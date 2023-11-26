<template>
  <!-- width = 991 - спрятать стрелки -->
  <section>
    <v-container>
      <v-carousel v-model="activeSlide"
                  class="custom-rounded mt-8"
                  next-icon="mdi-arrow-right-thin"
                  prev-icon="mdi-arrow-left-thin"
                  hide-delimiters height="290px">
        <v-carousel-item v-for="(item, i) in imagesBanner" :key="'banner-'+i" :src="item">
        </v-carousel-item>
      </v-carousel>

      <!-- Слайды поменьше -->
      <small-slides :activeSlide="activeSlide" :countSlide="imagesBanner.length"/>
    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component
export default class Pages extends Vue {
  activeSlide: number = 0
  imagesBanner: any = [
    'https://firebasestorage.googleapis.com/v0/b/lavka-pasechnika-rf-a069f.appspot.com/o/cms_uploads%2Fbannermain%2F1678826036727000%2Fdeliverypk2.jpg?alt=media&token=d393cebb-2c6c-49fa-9cea-5fc0ac681e33',
    'https://firebasestorage.googleapis.com/v0/b/lavka-pasechnika-rf-a069f.appspot.com/o/cms_uploads%2Fbannermain%2F1679500644497000%2Fstockspk.png?alt=media&token=e5302f0f-22d7-4082-96e0-8c56307469a9'
  ]
}
</script>
