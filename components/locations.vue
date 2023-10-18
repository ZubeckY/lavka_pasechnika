<template>
  <div style="max-width: 290px">

    <div>
      <v-card-title class="mb-1" style="font-size: 18px;">До встречи в наших магазинах</v-card-title>
      <v-chip-group v-model="activeChip" mandatory column
                    active-class="my-green-color white--text">
        <v-chip style="font-size: 13px; height: 28px"
                v-for="(item, i) in localMapping"
                :key="item.id" :value="i">
          {{ item['CityShopsFilial'] }}
        </v-chip>
      </v-chip-group>
    </div>

    <div class="mt-3" style="width: 280px">
      <v-carousel v-model="activeSlide"
                  class="custom-rounded"
                  style="width: 100%; max-width: 290px"
                  height="210px" hide-delimiters>
        <v-carousel-item v-for="item in getImages"
                         :key="item" :src="item">
        </v-carousel-item>
      </v-carousel>


      <div class="d-flex flex-column"
           style="position: relative; width: inherit; top: -60px">

        <!-- Слайды поменьше -->
        <small-slides :activeSlide="activeSlide"
                      :countSlide="getImages.length"/>

        <!-- Адреса -->
        <v-card class="custom-rounded px-2 py-1 mx-auto"
                width="250px"
                height="60px"
                elevation="0"
                :img="require(`~/assets/images/bgmainhoneypattern.jpg`)">
          <v-card-subtitle style="font-size: 13px; line-height: 15px; letter-spacing: .1px; width: calc(100% - 20px); height: calc(100%)"
                           class="d-flex justify-center align-center font-weight-medium text-center white--text mx-auto">
            <div>{{ getAddress }}</div>
          </v-card-subtitle>
        </v-card>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
@Component
export default class Locations extends Vue {
  localMapping: any = []
  activeChip: number = 0
  activeSlide: number = 0

  created () {
    this.getResult ()
  }

  async getResult () {
    this.localMapping = await this.$store.dispatch('filialsShop/loadFilialShop')
    this.changeMapping ()
  }

  @Watch('activeChip')
  changeController () {
    this.changeMapping()
    this.emptyActiveSlide ()
  }

  changeMapping () {
   this.$emit('changeMapping', this.localMapping[this.activeChip]['htmltagyandexmap'])
  }

  emptyActiveSlide () {
    return this.activeSlide = -1
  }

  get getImages () {
    return this.localMapping.length ? this.localMapping[this.activeChip]['ImgsShopFilial'] : []
  }

  get getAddress () {
    return this.localMapping.length ? this.localMapping[this.activeChip]['AdressShopFilial'] : ""
  }
}
</script>
