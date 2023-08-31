<template>
  <section>
    <v-container>

      <div class="d-flex flex-row mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="$router.push('/')"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-card-title class="ml-3">Контакты</v-card-title>
      </div>

      <v-row>
        <v-col class="ma-0 pa-0 pl-2">
          <div v-html="mapping"></div>
        </v-col>
        <v-col class="ma-0 pa-0" cols="3">
          <locations class="pl-4" @changeMapping="changeMapping"/>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Contacts extends Vue {
  mapping: any = ""

  changeMapping (value: any) {
    return this.mapping = value
  }
}
</script>
