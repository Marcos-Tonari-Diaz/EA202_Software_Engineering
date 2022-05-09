<template>
    <v-card
     outlined
    >
        <v-card-title>PEDIDO #{{numero_da_entrega}}</v-card-title>
        <v-card-text> {{endereco}} </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-list>
            <v-list-item
            v-for="prato in pratos" :key = "prato.name"  
            >
                <v-list-item-title>{{prato.name}}</v-list-item-title>
                <v-list-item-text>x{{prato.quantity}} </v-list-item-text>
            </v-list-item>
             <v-card-actions>
                <v-btn 
                    v-on:click = "$emit('confirm', numero_da_entrega);"
                    dark
                    color="blue lighten-3"
                > ACEITAR ENTREGA
                </v-btn>
             </v-card-actions>
        </v-list>    
    </v-card>
</template>

<script>
    export default {
        name: 'entregaCard',
        data(){
            return {
                msg: 'card',
                show: false,
            }
        },
        props: [
          'numero_da_entrega',
          'pratos',
          'endereco'
        ],
        methods: {}
    }
</script>