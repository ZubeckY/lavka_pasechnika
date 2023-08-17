<template>
  <v-card class="product-card rounded-xl mr-3 mb-5"
          style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)" width="180px" height="325px">

    <div class="product-card__container">

      <v-img class="rounded-xl cursor-pointer" width="160px" height="160px"
             @click="routing(linkProductPage(item['id'], linkId(item['weightproducts'][0])))"
             :src="item['ImageMainProduct']" alt="#"></v-img>

      <v-card-title class="product-card__title cursor-pointer d-flex align-center pt-1"
                    @click="routing(linkProductPage(item['id'], linkId(item['weightproducts'][0])))">
        {{ item['NameMainProduct'] }}
      </v-card-title>

      <div class="swiper my-2" ref="container">
        <div class="swiper-wrapper">

          <div class="swiper-slide" v-for="(value, i) in weightProducts" :key="i" style="width: 85px">
            <v-card class="product-card__variables_card cursor-pointer" style="border-radius: 8px"
                    @click="routing(linkProductPage(item['id'], value.id))"
                    height="44px" elevation="0">

              <div class="d-flex flex-column justify-center align-center pt-1" style="height: inherit">
                <v-card-subtitle class="text-center font-weight-bold" style="color:#000; line-height: 8px;">
                  <span>{{ value['volumeinml'] }}</span>
                  <span>мл.</span>
                </v-card-subtitle>

                <v-card-text class="text-center ml-2" style="font-size: 13px">
                  <span>{{ value['ProductPrice'] }}</span> &nbsp;
                  <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
                </v-card-text>
              </div>

            </v-card>
          </div>

        </div>
      </div>

      <v-btn class="text-none font-weight-bold" height="40px"
             @click="routing(linkProductPage(item['id'], linkId(item['weightproducts'][0])))"
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

  weightProducts: any = []

  @Ref()
  readonly container!: HTMLDivElement;

  swiper: any = Swiper

  async created () {
    await this.initWeightProducts ()
  }

  mounted () {
    this.swiper = new Swiper (this.container, {
      slidesPerView: 2,
      spaceBetween: 3,
    })
  }

  async initWeightProducts () {
    let array: any = []

    let products = this.item['weightproducts'] ? this.item['weightproducts'].map((doc: any) => {
      let link = doc['_key']['path']['segments']
      return link[link.length - 1]
    }) : []

    for (let i = 0; i < products.length; i++) {
      let product = await this.$store.dispatch ('products/getProduct', products[i])
      array.push(product)
    }

    this.weightProducts = array
  }

  linkProductPage (id: any, product: any) {
    return '/productpage?docMainproduct=' + id + '&docproduct=' + product
  }

  linkId (info: any) {
    let link = info['_key']['path']['segments']
    return link[link.length - 1]
  }

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
