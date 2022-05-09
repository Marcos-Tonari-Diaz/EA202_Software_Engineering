<template>
  <v-container>
  <v-row>
    <v-col cols=6 >
    <v-col 
      v-for="item in items" :key="item.name"
    >
      <entregaItemCard
        v-bind:numero_da_entrega = "item.numero_da_entrega" 
        v-bind:endereco = "item.endereco" 
        v-bind:pratos = "item.pratos" 
        v-bind:status = "item.status" 

        v-on:confirm = "confirm"
      >
      </entregaItemCard>
    </v-col>
    </v-col>
    <v-divider vertical></v-divider>
    <v-col cols=4>
  <v-col>
    <v-card
     class="mx-auto"
     >
      <v-card-text>Entregador: {{entregador}}
        <v-avatar color="indigo">
          <v-icon dark>
            mdi-account-circle
          </v-icon>
        </v-avatar>      
      </v-card-text>
      <v-divider ></v-divider>
      <v-card-text>CONFIRMAR ENTREGA </v-card-text>
      <v-card-title> #{{numero}} </v-card-title>
        <v-card-actions>
            <v-btn 
                v-on:click = 'goToMap()'
                dark
                color="indigo"
                x-large
            > SAIR PARA A ENTREGA
            </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
  </v-col>
  </v-row>
  </v-container>
</template>

<script>
import entregaItemCard from './entregaCard.vue';

import axios from 'axios';

export default {
  name: 'entregaHome',
  components: {
    entregaItemCard
  },
  data() {
    return {
      items: [],
      numero: 0,
      entregador: ""
    }
  },
  methods: {
    updateItems: function(){
      axios
      .get('http://localhost:3000/entrega')
      .then((response) => {
        this.items  = response.data;
      })
    },
    getEntregador: function(){
      axios
      .get('http://localhost:3000/entregadorLogin')
      .then((response) => {
        this.entregador  = response.data[0]["nome_entregador"];
      })
    },

    confirm: function(entregaNumber){
      this.numero = entregaNumber;
      let requestJSON = {numero: this.numero, nome_entregador: this.entregador} ;
      axios
				.put('http://localhost:3000/entrega', requestJSON)
				.then((response) => {
          console.log(response);
		    })
    },
    goToMap : function(){
    let requestJSON = {numero: this.numero, status: "em viagem"} ;
    axios
				.put('http://localhost:3000/entrega', requestJSON)
				.then((response) => {
          console.log(response);
		    })
    this.$router.push({ name: 'mapa', params: { num: this.numero } })
    }
  },
  beforeMount(){
    this.updateItems();
    this.getEntregador();
  }
};
</script>