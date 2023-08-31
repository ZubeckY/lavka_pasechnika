<template>
  <!-- width = 991 - спрятать стрелки -->
  <section>
    <v-container>
      <v-carousel v-model="activeSlide"
                  class="custom-rounded mt-8"
                  next-icon="mdi-arrow-right-thin"
                  prev-icon="mdi-arrow-left-thin"
                  hide-delimiters height="290px">
        <v-carousel-item v-for="(item) in imagesBanner"
                         :key="item.id" :src="item['imagebannerpc']">
        </v-carousel-item>
      </v-carousel>

      <!-- Слайды поменьше -->
      <small-slides :activeSlide="activeSlide"
                    :countSlide="imagesBanner.length"/>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Pages extends Vue {
  imagesBanner: any = []
  activeSlide: number = 0

  created () {
    this.loadBanner ()
  }

  async loadBanner () {
    return this.imagesBanner = await this.$store.dispatch('bannermain/loadBanner')
  }
}
</script>
