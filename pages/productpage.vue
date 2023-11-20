<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between mt-5 mb-10" style="position:relative; left: -10px;">
        <button-back/>

        <!-- Название мёда -->
        <v-skeleton-loader v-if="textLoad" class="custom-rounded" type="image" width="200px" height="35px"/>
        <v-card-title v-else class="philosopher-font ml-3" style="font-size: 24px">{{ item['title'] }}</v-card-title>

        <v-btn style="border-radius: 8px"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </div>

      <v-row>
        <!-- Слайдер -->
        <v-col class="ma-0 pa-0" cols="auto">

          <!-- Слайдер--загрузка -->
          <div v-if="subProductsLoad">
            <div>
              <v-skeleton-loader type="image" width="340px" style="border-radius: 15px 15px 0 0"/>
              <v-skeleton-loader type="image" width="340px" style="border-radius: 0 0 15px 15px"/>
            </div>

            <div class="d-flex flex-row">
              <v-skeleton-loader v-for="i in 2" :key="i" class="custom-rounded ml-0 ma-3"
                                 type="image" width="80px" height="100px"/>
            </div>
          </div>

          <!-- Слайдер--контент -->
          <div v-else>
            <!-- Слайды побольше -->
            <carousel-dialog maxWidth="572px" :carousel="carousel" :img="imageList(subProducts[model])">
              <v-carousel v-model="carousel" class="custom-rounded"
                          style="width: 340px" hide-delimiters height="460px"
                          :show-arrows="!(imageList(subProducts[model]).length <= 1)">
                <v-carousel-item v-for="image in imageList(subProducts[model])" :key="image" :src="image"/>
              </v-carousel>
            </carousel-dialog>

            <!-- Слайды поменьше -->
            <v-sheet max-width="800" color="transparent">
              <v-slide-group v-model="carousel" center-active show-arrows>
                <v-slide-item v-for="(item, i) in imageList(subProducts[model])"
                              :key="i" v-slot="{ active, toggle }">
                  <!-- Картинки -->
                  <v-card
                    :style="active ? 'filter: grayscale(20%) contrast(125%); border: 3px solid #26ae60' : 'filter: grayscale(60%)'"
                    class="custom-rounded ml-0 ma-3" width="80px" height="100px" @click="toggle" :img="item">
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>
        </v-col>

        <!-- Полезные свойства и текст -->
        <v-col class="my-0 mx-8 pa-0">
          <!-- Полезные свойства--загрузка -->
          <div v-if="listAdvantageLoad">
            <v-card-title class="mb-3" style="font-size: 14px">Полезные свойства</v-card-title>
            <div class="d-flex flex-row flex-wrap">
              <advantage-card-load v-for="i in 4" :key="i"/>
            </div>
          </div>

          <!-- Полезные свойства--контент -->
          <div v-else @click="listAdvantage.length > 6 ? show = !show : ''" class="cursor-pointer">
            <v-card-title class="mb-3" style="font-size: 14px">Полезные свойства</v-card-title>

            <div class="d-flex flex-row flex-wrap">
              <advantage-card v-for="advantage in firstListAdvantage(listAdvantage)"
                              :key="advantage.id" :advantage="advantage">
              </advantage-card>
            </div>

            <v-expand-transition>
              <div v-if="show" class="d-flex flex-row flex-wrap">
                <advantage-card v-for="advantage in secondListAdvantage(listAdvantage)"
                                :key="advantage.id" :advantage="advantage">
                </advantage-card>
              </div>
            </v-expand-transition>

            <div v-if="listAdvantage.length > 6" class="d-flex justify-center mb-2 cursor-pointer">
              <div class="font-weight-medium"
                   style="font-size: 14px; letter-spacing: .3px">
                {{ show ? 'Свернуть' : 'Показать ещё' }}
                <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </div>
            </div>
          </div>

          <!-- Описание--загрузка -->
          <v-card v-if="textLoad" color="transparent" elevation="0">
            <v-card-title style="font-size: 14px; line-height: 14px;">Описание</v-card-title>

            <v-skeleton-loader class="mt-3" type="sentences"></v-skeleton-loader>
            <v-skeleton-loader class="mt-2" type="sentences"></v-skeleton-loader>
            <v-skeleton-loader type="paragraph"></v-skeleton-loader>

            <v-skeleton-loader class="mt-2" type="sentences"></v-skeleton-loader>
          </v-card>

          <!-- Описание--контент -->
          <v-card v-else color="transparent" elevation="0">
            <v-card-title style="font-size: 14px; line-height: 14px;">Описание</v-card-title>

            <!-- описание по количеству строк -->
            <v-card-text class="overflow-y-hidden" style="max-height: calc(14px * 12);">
              <div style="font-size: 14px; line-height: 14px; white-space: pre-line;">
                {{ item['description'] }}
              </div>
            </v-card-text>

            <v-dialog v-model="readMoreDialog" max-width="500">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="read-more--underline text-none pa-0 mt-3" color="#26ae60"
                       v-bind="attrs" v-on="on" small text>
                  Читать подробнее
                </v-btn>
              </template>

              <v-card>
                <v-card-actions class="pt-3 pb-0">
                  <v-card-title>Описание</v-card-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="readMoreDialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-card-text class="pt-0 px-4 pb-5" style="font-size: 14px; line-height: 14px; white-space: pre-line;">
                  {{ item['description'] }}
                </v-card-text>

              </v-card>
            </v-dialog>

          </v-card>
        </v-col>

        <!-- Вес -->
        <v-col class="ma-0 pa-0" cols="auto">

          <!-- Вес--загрузка -->
          <v-card v-if="subProductsLoad"
                  class="custom-rounded py-1 px-3"
                  width="350px" height="275px">

            <v-skeleton-loader class="mt-4" type="heading"/>
            <v-skeleton-loader class="mt-2" type="text" width="75px"/>

            <div class="d-flex flex-row flex-wrap my-0 py-0 px-2 mt-5">
              <v-skeleton-loader v-for="i in 2" :key="i" type="image"
                                 class="mr-2 mb-3"
                                 width="102px" height="65px"
                                 style="border-radius: 8px">
              </v-skeleton-loader>
            </div>

            <v-skeleton-loader class="mt-2" type="heading" width="150px"/>
            <v-skeleton-loader class="custom-rounded mt-3" type="image"
                               width="100%" height="50px"/>
          </v-card>

          <!-- Вес--контент -->
          <v-card v-else class="d-flex flex-column custom-rounded"
                  elevation="5" width="350px">

            <div class="pl-4 pr-1 py-2">
              <v-card-title class="mt-2" style="font-size: 19px">
                {{ subProducts[model] ? subProducts[model]['title'] : '' }}
              </v-card-title>
              <v-card-title class="mt-1 mb-2" style="font-size: 16px">Вес</v-card-title>
            </div>

            <v-item-group v-model="model" mandatory
                          class="d-flex flex-row flex-wrap my-0 py-0 px-2"
                          active-class="product-card__variables_card--active">
              <v-item v-for="(value, i) in subProducts" :key="i"
                      v-slot="{ active, toggle }">

                <v-card class="product-card__variables_card cursor-pointer ml-2 mb-3"
                        width="102px" height="65px" elevation="0"
                        @click="toggle" style="border-radius: 8px">

                  <div class="d-flex flex-column justify-center align-center" style="height: inherit">
                    <v-card-subtitle class="text-center font-weight-bold"
                                     style="font-size: 15px; color:#000; line-height: 10px;">
                      <span>{{ value.weight_value }}</span>
                      <span>{{ value.weight_measure.value }}</span>
                    </v-card-subtitle>

                    <v-card-text class="text-center ml-2" style="font-size: 13px">
                      <span>{{ value ? value['price'] : '' }}</span> &nbsp;
                      <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
                    </v-card-text>
                  </div>
                </v-card>

              </v-item>
            </v-item-group>

            <v-card-title class="mb-2 pl-4 pr-1 py-2">
              <span> {{ subProducts[model] ? subProducts[model]['price'] : '' }} </span>
              <v-icon color="black" style="font-size: 20px">mdi-currency-rub</v-icon>
            </v-card-title>

            <v-card-actions class="pa-4 pt-0">
              <v-btn v-if="countInCart <= 0" class="custom-rounded font-weight-regular text-none"
                     elevation="0" height="50px" color="#26ae60" style="font-size: 16px; letter-spacing: .4px;"
                     dark block @click="addToCartItem">
                <v-card class="d-flex justify-center align-center rounded-circle pa-2 mr-2" color="#159d4f"
                        elevation="0">
                  <v-icon style="font-size: 18px">mdi-cart-variant</v-icon>
                </v-card>
                <span>Добавить в корзину</span>
              </v-btn>

              <v-card v-else class="custom-rounded d-flex align-center justify-space-between flex-row"
                      width="100%" height="50px" elevation="0" color="#26ae60">
                <div class="d-flex align-center flex-row">

                  <!-- Добавить кол-во -->
                  <v-btn icon dark large @click="countMinus">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>

                  <!-- Значение кол-во -->
                  <v-card-title class="font-weight-regular white--text mx-3" style="font-size: 16px">
                    {{ countInCart }} шт.
                  </v-card-title>

                  <!-- Добавить убрать кол-во -->
                  <v-btn icon dark larg @click="countPlus">
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                </div>

                <!-- Перейти в корзину -->
                <v-btn class="custom-rounded text-none pa-0" @click="routing('/mybusket')"
                       dark elevation="0" width="50%" height="inherit" color="#159d4f" style="letter-spacing: .3px">
                  <v-icon class="mr-2" style="font-size: 18px">mdi-briefcase-outline</v-icon>
                  Перейти <br> в корзину
                </v-btn>

              </v-card>
            </v-card-actions>

          </v-card>
        </v-col>

      </v-row>
    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"

@Component
export default class Productpage extends Vue {
  carousel: number = 0

  show: boolean = false
  readMoreDialog: boolean = false

  countInCart: number = 0

  model: any = 0
  item: any = {}

  textLoad: boolean = true

  listAdvantage: any = []
  listAdvantageLoad: boolean = true

  subProducts: any = []
  subProductsLoad: boolean = true

  async created() {
    await this.initAll()
  }

  mounted () {
    this.$root.$on('checkCart', this.initAll)
  }

  destroyed() {
    return this.$root.$off('checkCart', this.initAll)
  }

  @Watch('model')
  async changeCurrentRoute() {
    await this.getDataFromCart()
    return this.routing(this.linkProductPage(this.item.id, this.subProducts[this.model].id))
  }

  async initAll() {
    try {
      let {product, sub_product}: any = this.$router.currentRoute.query
      if (!product && !sub_product) {
        this.listAdvantageLoad = false
        this.subProductsLoad = false
        return console.log('Нема продукта')
      }

      await this.initProduct(product)
      this.listAdvantage = this.item['advantages']
      this.subProducts = this.item['sub_products']
      await this.getDataFromCart()

    } catch (e) {
      console.log(e)
    } finally {
      this.listAdvantageLoad = false
      this.subProductsLoad = false
      this.textLoad = false
    }
  }

  async initProduct(product: any) {
    await this.$axios.get(`/api-products/product/${product}/`)
      .then((data: any) => {
        this.item = data.data
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async addToCartItem() {
    const sub_product = this.subProducts[this.model]['id']
    const cart_uuid = localStorage.getItem('cart_uuid')

    await this.$axios.post(`/api-products/cart-item/?sub_product=${sub_product}&cart_uuid=${cart_uuid ? cart_uuid : ''}`, {}, {})
      .then(async (data) => {
        if (!cart_uuid) localStorage.setItem('cart_uuid', data.data.cart_uuid)
        await this.getDataFromCart()
      }).catch((e) => {
        console.log(e)
      })
  }

  async getDataFromCart() {
    const item: any = await this.getCartItem()
    return this.countInCart = item.length > 0 ? item[0].count : 0
  }

  async getCartItem() {
    const sub_product = this.subProducts[this.model]['id']
    const cart_uuid = localStorage.getItem('cart_uuid')
    let item: any = []
    await this.$axios.get(`/api-products/cart-item/?cart_uuid=${cart_uuid ? cart_uuid : ''}`)
      .then((data) => {
        return item = data.data.results.filter((item: any) => {
          return item['sub_product'].id == sub_product
        })
      })
      .catch((e) => {
        console.log(e)
      })
    return item
  }

  async countPlus() {
    const item: any = await this.getCartItem()
    this.countInCart++
    await this.$axios.patch(`/api-products/cart-item/${item[0].id}/`, {
      count: this.countInCart
    }, {})
      .catch((e) => {
        console.log(e)
      })
  }

  async countMinus() {
    const item: any = await this.getCartItem()
    this.countInCart--
    if (this.countInCart <= 0) {
      return await this.$axios.delete(`/api-products/cart-item-delete/${item[0].id}/`)
        .catch((e) => {
          console.log(e)
        })
    }

    await this.$axios.patch(`/api-products/cart-item/${item[0].id}/`, {
      count: this.countInCart
    }, {})
      .catch((e) => {
        console.log(e)
      })
  }

  imageList(image: any) {
    if (!image) return []
    return JSON.parse(image.images)
  }

  firstListAdvantage(list: any) {
    return list.filter((item: any, i: number) => i <= 5)
  }

  secondListAdvantage(list: any) {
    return list.filter((item: any, i: number) => i >= 6)
  }

  linkProductPage(product: any, sub_product: any) {
    return `/productpage/?product=${product}&sub_product=${sub_product}`
  }

  routing(link: string) {
    return this.$router.push(link)
  }
}
</script>
