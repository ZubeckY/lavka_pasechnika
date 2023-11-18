<template>
  <v-card class="product-card rounded-xl mr-3 mb-5"
          style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)" width="180px" height="325px">
    <div class="product-card__container d-flex flex-column" style="height: calc(100% - 20px)">
      <v-img class="rounded-xl cursor-pointer" width="160px" height="160px" alt="#"
             :src="item['image']" :lazy-src="item['image']"
             @click="routing(linkProductPage(item['id'], item['sub_products'][0]['id']))"/>

      <v-card-title class="product-card__title cursor-pointer d-flex align-center pt-1 overflow-y-hidden"
                    @click="routing(linkProductPage(item['id'], item['sub_products'][0]['id']))">
        {{ item['title'] }}
      </v-card-title>

      <div style="flex: 1 1 auto"></div>

      <div class="my-2">
        <div class="swiper" ref="container">
          <div class="swiper-wrapper">

            <div class="swiper-slide" v-for="(value, i) in subProducts" :key="i" style="width: 85px">
              <v-card class="product-card__variables_card cursor-pointer" style="border-radius: 8px"
                      @click="routing(linkProductPage(item['id'], value['id']))"
                      height="44px" elevation="0">

                <div class="d-flex flex-column justify-center align-center pt-1" style="height: inherit">
                  <v-card-subtitle class="text-center font-weight-bold" style="color:#000; line-height: 8px;">
                    <span>{{ value.weight_value }}</span>
                    <span>{{ value.weight_measure.value }}</span>
                  </v-card-subtitle>

                  <v-card-text class="text-center ml-2" style="font-size: 13px">
                    <span>{{ value.price }}</span> &nbsp;
                    <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
                  </v-card-text>
                </div>

              </v-card>
            </div>

          </div>
        </div>
      </div>

      <v-btn @click="routing(linkProductPage(item['id'], item['sub_products'][0]['id']))"
             class="text-none font-weight-bold" height="40px" style="border-radius: 8px" color="white" elevation="0" block>
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
  @Prop() item: any

  @Ref()
  readonly container!: HTMLDivElement;

  subProducts: any = []

  swiper: any = Swiper

  async created() {
    await this.initSubProducts()
  }

  mounted() {
    this.swiper = new Swiper(this.container, {
      slidesPerView: 'auto',
      spaceBetween: 5,
    })
  }

  async initSubProducts() {
    return this.subProducts = this.item['sub_products']
  }

  linkProductPage(product: any, sub_product: any) {
    return `/productpage/?product=${product}&sub_product=${sub_product}`
  }

  routing(link: string) {
    return this.$router.push(link)
  }
}
</script>
