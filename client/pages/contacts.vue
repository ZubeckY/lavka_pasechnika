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
          <iframe :src="getMapURL"
                  frameborder="0"
                  border-radius="8px"
                  allowfullscreen="true"
                  width="860" height="345"
                  style="position: relative;">
          </iframe>
        </v-col>
        <v-col class="ma-0 pa-0" cols="3">
          <locations class="pl-4"
                     :mapping="mapping"
                     :mapPoints="mapPoints"/>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Contacts extends Vue {
  mapping: any = "goryachiy-klyuch"
  mapPoints: any = []

  created () {
    // Делаем костыль, в виде jSON, тем самым избавляемся от зависимости
    this.mapPoints = JSON.parse(JSON.stringify(this.$store.state.mapPoints))
  }

  get getMapURL () {
    return this.mapPoints.filter((item: any) => item.value === this.mapping)[0]?.map
  }

}
</script>
