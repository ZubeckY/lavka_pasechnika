<template>
  <v-dialog v-model="dialog"
            class="carousel-dialog"
            :max-width="maxWidth ?? '1200px'">

    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs"
           v-on="on">
        <slot></slot>
      </div>
    </template>

    <v-card elevation="0" color="transparent">
      <div style="position:relative;">

        <v-carousel v-model="localCarousel"
                    hide-delimiters height="85vh"
                    :show-arrows="img.length > 1"
                    :show-arrows-on-hover="img.length > 1">

          <v-carousel-item v-for="(item,i) in img" :key="i">
            <img class="d-block mx-auto my-auto custom-rounded"
                 width="90%" height="auto" :src="item" alt="#">
          </v-carousel-item>
        </v-carousel>

        <div class="d-flex justify-center custom-rounded"
             style="position:absolute; bottom: 0; width: 100%; height: 20px; background: rgba(0, 0, 0, .25)">
          <!-- Слайды поменьше -->
          <small-slides :activeSlide="localCarousel"
                        :countSlide="img"/>
        </div>
      </div>

      <v-fab-transition>
        <v-btn color="error"
               elevation="0"
               icon absolute
               top right text
               style="background: #3336"
               @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-fab-transition>

    </v-card>
  </v-dialog>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator"
@Component
export default class CarouselDialog extends Vue {
  @Prop () img: any
  @Prop () carousel!: number
  @Prop () maxWidth!: any

  dialog: boolean = false

  localCarousel: number = 0

  @Watch ('carousel')
  changeCarousel () {
    this.localCarousel = this.carousel
  }

}
</script>
