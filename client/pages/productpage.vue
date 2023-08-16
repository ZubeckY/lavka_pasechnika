<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="$router.back()"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-card-title class="ml-3">ТУТ МОГЛА БЫТЬ ВАША РЕКЛАМА</v-card-title>

        <v-btn style="border-radius: 8px"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </div>

      <v-row>
        <v-col>Картинка</v-col>
        <v-col>Полезные свойства, текст</v-col>
        <v-col>Развесовка</v-col>
      </v-row>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Productpage extends Vue {
}
</script>
