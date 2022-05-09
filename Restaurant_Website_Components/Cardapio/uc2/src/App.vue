<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-card class="overflow-hidden">
        <v-app-bar
          color="#6A76AB"
          dark
        >
          <h1>Cardápio</h1>
          <v-spacer></v-spacer>
          <template v-slot:extension>
            <v-tabs>
              <v-tab>Estoque</v-tab>
              <v-tab>Pedido</v-tab>
              <v-tab>Entrega</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-card>
      <v-row>
      <v-col cols="2">
      <v-container>
          <v-list dense rounded="lg">
            <v-subheader>CATEGORIAS</v-subheader>
            <v-divider></v-divider>
              <v-list-item-group
                color="primary"
              >
                <v-list-item
                  v-for="category in categories" :key="category"
                  v-on:click = "select_category(category)"
                >
                  <v-list-item-content>
                    <v-list-item-title v-text="category"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
          </v-list>
      </v-container>
      </v-col>
      <v-divider
        vertical
      ></v-divider>
      <v-col cols="7">
      <v-container>
        <v-row>
          <v-col
            v-for="item in filtered_items" :key="item.name"
            cols="4"
          >
            <foodItemCard
              v-bind:name = "item.name" 
              v-bind:description = "item.description" 
              v-bind:price = "item.price" 
              v-bind:category = "item.category"
              v-bind:imgSource = "item.image_path"
              v-bind:nOrdered = "item.numberOrdered"

              v-on:add_item = "addOrder"
              v-on:remove_item = "removeOrder"
            >
            </foodItemCard>
          </v-col>
        </v-row>
      </v-container>
      </v-col>
      <v-divider
        vertical
      ></v-divider>
      <v-col cols="2">
        <div align="center">
        <v-container>
          <v-card
            rounded="lg"
          >
            <h1 > Pronto para fazer seu pedido? </h1>
            <v-spacer></v-spacer>
            <v-btn
              x-large
              color="secondary"
              href="/about"
              v-on:click = "prepara_pedido()"
            >
              PEDIR
            </v-btn>
            <v-spacer></v-spacer>
          </v-card>
          </v-container>
        </div>
      </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import foodItemCard from './components/foodItemCard';

import axios from 'axios';

export default {
  name: 'App',
  components: {
    foodItemCard,
  },
  data() {
    return {
      items: [],
      categories: ["todas"],
      selected_category: "todas",
    }
  },
  computed: {
    filtered_items: function(){
      if (this.items.length<1){
        return this.items
      }
      else if (this.selected_category=="todas"){
        return this.items
      }
      else{
        return this.items.filter(
          (it) => it.category == this.selected_category
        )
      }
    }
  },
  methods: {
    updateMenu: function(){
      axios
      .get('http://localhost:3000/cardapio')
      .then((response) => {
        this.items  = response.data["foodItems"];
        for (const item of this.items){
          item.numberOrdered = 0;
          if (!this.categories.includes(item.category))
            this.categories.push(item.category);
        }
      })
    },
    prepara_pedido: function(){
      let pedidoItem = {cliente: "01203", pratos: []}
      for (const item of this.items){
        if (item.numberOrdered > 0){
          pedidoItem.pratos.push({name: item.name, quantity: item.numberOrdered, price: item.price})
        }
      }
      axios
      .post('http://localhost:3000/pedidopost', pedidoItem)
			.then((response) => {
					this.payload = response.data;
					this.codigo = response.status;
			})
    },
    select_category: function(category){
      this.selected_category = category;
    },
    addOrder: function(cardName){
      this.items.find( (it)=>it.name == cardName ).numberOrdered+=1;
      this.$forceUpdate();
    },
    removeOrder: function(cardName){
      if (this.items.find( (it)=>it.name == cardName ).numberOrdered>0){
        this.items.find( (it)=>it.name == cardName ).numberOrdered-=1;
      }
      this.$forceUpdate();
    }
  },
  beforeMount(){
    this.updateMenu();
  }
};
</script>