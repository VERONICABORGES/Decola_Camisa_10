<template>
  <v-simple-table dark>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Foto
          </th>
          <th class="text-left">
            Nome
          </th>
          <th class="text-left">
            Plataforma
          </th>
          <th class="text-left">
            Plataforma
          </th>
          <th class="text-left">
            Gênero
          </th>
          <th class="text-right">
            Classificação
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="game in gamesLista"
          :key="game.id"
        >
          <td><img :src="game.photo" :alt ="game.name"/></td>
          <td>{{ game.name }}</td>
          <td>{{ game.platform }}</td>
          <td>{{ game.year }}</td>
          <td>{{ game.genre }}</td>
          <td>{{ game.id }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'GamesTable',
  props: {
    gamesLista: {
      type: Array,
      required: true
    }
  }
}
</script>