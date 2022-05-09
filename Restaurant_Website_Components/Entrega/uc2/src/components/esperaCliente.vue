<template>
  <v-container>
    <v-row justify="space-around">
    <v-col cols = 6>
    <v-card
     outlined
     >
        <v-card-text>Esperando o cliente...</v-card-text>
        <v-card-title>{{nome_cliente}}</v-card-title>
        <v-card-actions>
            <v-col>
            <v-btn 
                v-on:click = 'confirmaEntrega(true)'
                dark
                color="indigo"
                x-large
            > ENTREGA REALIZADA
            </v-btn>
            <v-btn 
                v-on:click = 'confirmaEntrega(false)'
                color="red lighten-2"
                dark
                x-large
            > NÂO FOI POSSÍVEL REALIZAR A ENTREGA
            </v-btn>
            </v-col>
        </v-card-actions>
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
                nome_cliente: 'vazio',
                item: 'vazio'
            }
        },
        props: [
          'numero_da_entrega'
        ],
        methods: {
            confirmaEntrega : function(sucesso){
                let requestJSON = {};
                if (sucesso){
                    requestJSON = {numero: this.$route.params.num, status: "entrega finalizada"} ;
                }
                else{
                    requestJSON = {numero: this.$route.params.num, status: "falha na entrega"} ;
                }
                axios
				    .put('http://localhost:3000/entrega', requestJSON)
				    .then((response) => {
                        console.log(response);
		        })

            }
        },
        beforeMount(){
            axios
            .get('http://localhost:3000/entrega')
            //.get('http://localhost:8080/entrega')
            .then((response) => {
                this.nome_cliente = response.data.find(e=>e.numero_da_entrega==this.$route.params.num)['nome_cliente'];
            })
        }
    }
</script>