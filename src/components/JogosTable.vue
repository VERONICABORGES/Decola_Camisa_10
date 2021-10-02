<template>

  <v-simple-table dark>

    <template v-slot:default>

      <thead>

        <tr>

          <th class="text-left">

            Genero

          </th>

          <th class="text-left">

            ID

          </th>

          <th class="text-left">

            Nome

          </th>

          <th class="text-left">

            Plataforma

          </th>

          <th class="text-right">

            Ano

          </th>

        </tr>

      </thead>

      <tbody>

        <tr

          v-for="jogos in jogosLista"

          :key="jogos.id"

        >

          <td><img :src="jogos.photo" :alt ="jogos.name"/></td>

          <td>{{ jogos.genre }}</td>

          <td>{{ jogos.name }}</td>

          <td>{{ jogos.plataform }}</td>

          <td>{{ jogos.id }}</td>
          
          <td>{{ jogos.year }}</td>

        </tr>

      </tbody>

    </template>

  </v-simple-table>

</template>



<script>

export default {

  name: 'JogosTable',

  props: {

    jogosLista: {

      type: Array,

      required: true

    }

  }

}

</script>