<template>
  <v-card class="product-card rounded-xl mr-3 mb-5"
          style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)" width="180px" height="325px">

    <div class="product-card__container">

      <v-img class="rounded-xl cursor-pointer"
             width="160px" height="160px"
             @click="routing('/productpage')"
             :src="item['ImageMainProduct']" alt="#"></v-img>

      <v-card-title class="product-card__title cursor-pointer d-flex align-center pt-1"
                    @click="routing('/productpage')">
        {{ item['NameMainProduct'] }}
      </v-card-title>

      <div class="swiper my-2" ref="container">
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="i in 5" :key="i" style="width: 85px">
            <v-card class="product-card__variables_card cursor-pointer" style="border-radius: 8px"
                    @click="routing('/productpage')" min-height="44px" elevation="0">

              <div class="d-flex flex-column justify-center align-center pt-3">
                <v-card-subtitle class="text-center font-weight-bold" style="color:#000; line-height: 8px;">
                  <span>130</span>
                  <span>мл.</span>
                </v-card-subtitle>

                <v-card-text class="text-center ml-2" style="font-size: 13px">
                  <span>180</span>
                  <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
                </v-card-text>
              </div>

            </v-card>
          </div>

        </div>
      </div>

      <v-btn class="text-none font-weight-bold" height="40px"
             @click="routing('/productpage')"
             style="border-radius: 8px" color="white" elevation="0" block>
        Выбрать
      </v-btn>

    </div>
  </v-card>
</template>
<script lang="ts">
import Swiper from 'swiper'
import 'swiper/swiper-bundle.min.css'
import {Component, Prop, Ref, Vue} from "vue-property-decorator"
@Component
export default class CatalogItem extends Vue {
  @Prop () item: any

  @Ref()
  readonly container!: HTMLDivElement;

  swiper: any = Swiper

  mounted () {
    this.swiper = new Swiper (this.container, {
      slidesPerView: 2,
      spaceBetween: 3,
    })
  }

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
