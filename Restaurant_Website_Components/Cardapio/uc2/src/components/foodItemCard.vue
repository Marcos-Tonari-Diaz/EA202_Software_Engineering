<template>
    <v-card>
      <v-img 
        :src="resolve_img_url(imgSource)"
        gradient="to bottom, rgba(0,0,0,.1), rgba(50,0,30,.3)"
        height="250"
      >
      </v-img>
      <v-card-title>{{name}}</v-card-title>
      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
      <v-expand-transition>
        <div v-show="show">
        <v-divider></v-divider>
        <v-card-text >{{description}}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-card-text class="font-weight-black">R${{price}}</v-card-text>
          <v-spacer></v-spacer>
          <v-btn 
            v-on:click = "$emit('add_item', name);"
            class="mx-2"
            fab
            dark
            color="indigo"
          >
            <v-icon dark>
              mdi-plus
            </v-icon>
          </v-btn>
          <v-btn
            v-on:click = "$emit('remove_item', name);"
            class="mx-2"
            fab
            dark
            small
            color="indigo lighten-4"
          >
            <v-icon dark>
              mdi-minus
            </v-icon>
          </v-btn>
            <v-sheet
              class="pa-2"
              color="grey lighten-3"
            >
            <span> {{ nOrdered }} </span>
          </v-sheet>
          </v-card-actions>
      </div>
    </v-expand-transition>
      <v-divider></v-divider>
      <v-divider></v-divider>
      
    </v-card>
</template>

<script>
    export default {
        name: 'foodItemCard',
        data(){
            return {
                msg: 'card',
                show: false
            }
        },
        props: [
          'imgSource',
          'description',
          'name',
          'price',
          'category',
          'nOrdered'
        ],
        methods: {
          resolve_img_url: function (path) {
            let images = require.context('../assets/', false, /\.png$|\.jpeg$/)
            return images("./"+path)
          }
        }
    }
</script>