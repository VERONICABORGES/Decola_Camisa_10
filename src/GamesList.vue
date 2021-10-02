<template>
  <v-container>
    <h2 class= "text-h5 text-center mb-3 mt5">Lista de melhores games!</h2>
    <!-- Passando a prop para exibição -->
    <GamesTable :gamesLista ="this.gamesLista"/>
  </v-container>
</template>

<script>

import GamesTable from './components/GamesTable'; 

export default {
  name: 'ListaAnime',
  components: {
    GamesTable,
  },
  data() {
    return {
      gamesLista: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
      .then(response => response.json())
      .then(json => {
        this.gamesLista = json;
        console.log(this.gamesLista);
      });
  },
}
</script>