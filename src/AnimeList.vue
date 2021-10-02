<template>
  <v-container>
    <h2 class= "text-h5 text-center mb-3 mt5">Lista de melhores animes!</h2>
    <!-- Passando a prop para exibição -->
    <AnimeTable :animesLista ="this.animesLista"/>
  </v-container>
</template>

<script>

import AnimeTable from './components/AnimeTable'; 

export default {
  name: 'ListaAnime',
  components: {
    AnimeTable,
  },
  data() {
    return {
      animesLista: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json')
      .then(response => response.json())
      .then(json => {
        this.animesLista = json;
        console.log(this.animesLista);
      });
  },
}
</script>