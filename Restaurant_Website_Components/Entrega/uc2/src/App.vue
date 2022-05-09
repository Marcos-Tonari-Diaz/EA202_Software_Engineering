<template>
  <v-app>
    <v-main class="grey lighten-3">
      <v-card>
        <v-app-bar
          color="#6A76AB"
          dark
        >
          <h1>Entregas</h1>
          <v-spacer></v-spacer>
          <template v-slot:extension>
            <v-tabs>
              <v-tab>Estoque</v-tab>
              <v-tab>Cardapio</v-tab>
              <v-tab>Pedido</v-tab>
            </v-tabs>
          </template>
        </v-app-bar>
      </v-card>
      <v-col>
        <router-view></router-view>
      </v-col>
    </v-main >
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: "app",
    }
  },
};
</script>