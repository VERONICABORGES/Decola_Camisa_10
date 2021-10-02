<template>
  <v-container>
    <h2 class= "text-h5 text-center mb-3 mt5">Lista de melhores jogos!</h2>
    <!-- Passando a prop para exibição -->
    <JogosTable :jogosLista ="this.jogosLista"/>
  </v-container>
</template>

<script>
import JogosTable from './components/JogosTable'; 
export default {
  name: 'ListaJogos',
  components: {
    JogosTable,
  },
  data() {
    return {
      jogosLista: []
    }
  },
  created() {
    fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
      .then(response => response.json())
      .then(json => {
        this.jogosLista = json;
        console.log(this.jogosLista);
      });
  },
}
</script>