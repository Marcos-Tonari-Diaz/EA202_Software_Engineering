<template>
  <v-container>
    <v-row justify="space-around">
    <v-col cols = 6>
    <v-card
     outlined
     >
        <v-card-title>Viagem ...</v-card-title>
        <v-img
            :aspect-ratio="1"
            max-height="500"
            src="https://i.stack.imgur.com/ddX9U.png"
        ></v-img>
        <v-card-actions>
            <v-btn 
                v-on:click = 'goToEspera()'
                dark
                color="red lighten-2"
            > CHEGUEI NO DESTINO
            </v-btn>
        </v-card-actions>
        <v-card-text> (Placeholder para uma integracao com o google maps) </v-card-text>
    </v-card>
    </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'entregaCard',
        data(){
            return {
                msg: 'card',
                show: false
            }
        },
        props: [
          'numero_da_entrega'
        ],
        methods: {
            goToEspera : function(){
                let requestJSON = {numero: this.$route.params.num, status: "esperando o cliente"} ;
                axios
				    .put('http://localhost:3000/entrega', requestJSON)
				    .then((response) => {
                        console.log(response);
		        });
                this.$router.push({ name: 'espera', params: { num: this.$route.params.num } })
            },
            
        }
    }
</script>