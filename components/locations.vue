<template>
  <div style="max-width: 290px">
    <div>
      <v-card-title class="mb-1" style="font-size: 18px;">До встречи в наших магазинах</v-card-title>
      <v-chip-group v-model="activeChip" active-class="my-green-color white--text" mandatory column>
        <v-chip v-for="(item, i) in localMapping" :key="'city-chip-'+item.id" :value="i"
                style="font-size: 13px; height: 28px">
          {{ item['title'] }}
        </v-chip>
      </v-chip-group>
    </div>

    <div class="mt-3" style="width: 280px">
      <v-carousel v-model="activeSlide" class="custom-rounded" style="width: 100%; max-width: 290px"
                  height="210px" hide-delimiters>
        <v-carousel-item v-for="(item, i) in getImages" :key="'city-image-'+i" :src="item"/>
      </v-carousel>


      <div class="d-flex flex-column" style="position: relative; width: inherit; top: -60px">
        <!-- Слайды поменьше -->
        <small-slides :activeSlide="activeSlide" :countSlide="getImages"/>

        <!-- Адреса -->
        <v-card class="custom-rounded px-2 py-1 mx-auto" width="250px" height="60px"
                elevation="0" :img="require(`~/assets/images/bgmainhoneypattern.jpg`)">
          <v-card-subtitle
            style="font-size: 13px; line-height: 15px; letter-spacing: .1px; width: calc(100% - 20px); height: calc(100%)"
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

  created() {
    this.getResult()
  }

  async getResult() {
    await this.$axios.get(`/api-products/shop/`)
      .then((data: any) => {
        this.localMapping = data.data.results
      })
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        this.changeMapping()
      })
  }

  @Watch('activeChip')
  changeController() {
    this.changeMapping()
    this.emptyActiveSlide()
  }

  emptyActiveSlide() {
    return this.activeSlide = -1
  }

  changeMapping() {
    this.$emit('changeMapping', this.localMapping.length > 0 ? this.localMapping[this.activeChip]['address_map_link'] : '')
  }

  get getImages() {
    if (this.localMapping.length <= 0) return []
    return JSON.parse(this.localMapping[this.activeChip].images.replace(/[\'\`]/g, '"'))
  }

  get getAddress() {
    if (this.localMapping.length <= 0) return ""
    const activeItem: any = this.localMapping[this.activeChip]
    const activeArray = []

    activeArray.push(activeItem.address_region)
    activeArray.push(activeItem.address_district)
    activeArray.push(activeItem.address_city)
    activeArray.push(activeItem.address_street)
    activeArray.push(activeItem.address_home)

    return (activeArray.filter(Boolean)).join(', ')
  }
}
</script>
