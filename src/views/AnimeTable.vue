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
            Descrição
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
          v-for="anime in animesLista"
          :key="anime.id"
        >
          <td><img :src="anime.photo" :alt ="anime.name"/></td>
          <td>{{ anime.name }}</td>
          <td>{{ anime.description }}</td>
          <td>{{ anime.genre }}</td>
          <td>{{ anime.id }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: 'AnimeTable',
  props: {
    animesLista: {
      type: Array,
      required: true
    }
  }
}
</script>