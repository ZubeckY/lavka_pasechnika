<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="routing('/')"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-card-title class="philosopher-font ml-3" style="font-size: 24px">{{ onlyNameProduct }}</v-card-title>

        <v-btn style="border-radius: 8px"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </div>

      <v-row>
        <v-col class="ma-0 pa-0" cols="auto">
          <div v-if="!!(!weightProducts.length)">
            <v-skeleton-loader class="custom-rounded"
                               type="image" width="340px"/>

            <div class="d-flex flex-row">
              <v-skeleton-loader v-for="i in 2" :key="i"
                                 class="custom-rounded ml-0 ma-3"
                                 type="image" width="120px" height="80px"/>
            </div>

          </div>

          <div v-else>
            <carousel-dialog maxWidth="572px"
                             :carousel="carousel"
                             :img="imageList(weightProducts[model])">

              <v-carousel v-model="carousel"
                          class="custom-rounded"
                          style="width: 340px"
                          hide-delimiters height="460px"
                          :show-arrows="!(imageList(weightProducts[model]).length <= 1)">

                <v-carousel-item v-for="image in imageList(weightProducts[model])" :key="image" :src="image"/>

              </v-carousel>
            </carousel-dialog>

            <!-- Слайды поменьше -->
            <v-sheet max-width="800" color="transparent">
              <v-slide-group v-model="carousel"
                             center-active
                             show-arrows>
                <v-slide-item v-for="(item, i) in imageList(weightProducts[model])"
                              :key="i" v-slot="{ active, toggle }">
                  <!-- Картинки -->
                  <v-card :style="active ? 'filter: grayscale(20%) contrast(125%); border: 3px solid #26ae60' : 'filter: grayscale(60%)'"
                          class="custom-rounded ml-0 ma-3"
                          width="120px"
                          height="80px"
                          @click="toggle"
                          :img="item">
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
          </div>

        </v-col>

        <v-col class="my-0 mx-8 pa-0">

          <div @click="listAdvantage.length > 6 ? show = !show : ''" class="cursor-pointer">
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

          <v-card color="transparent" elevation="0">
            <v-card-title style="font-size: 14px; line-height: 14px;">Описание</v-card-title>

            <!-- описание по количеству строк -->
            <v-card-text class="overflow-y-hidden" style="max-height: calc(14px * 12);">
              <div style="font-size: 14px; line-height: 14px; white-space: pre-line;">
                {{ product['Description'] }}
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
                  {{ product['Description'] }}
                </v-card-text>

              </v-card>
            </v-dialog>


          </v-card>
        </v-col>

        <v-col class="ma-0 pa-0" cols="auto">
          <v-card class="d-flex flex-column custom-rounded"
                  elevation="5" width="350px"
                  :disabled="!!(!weightProducts.length)"
                  :loading="!!(!weightProducts.length)">

            <div class="pl-4 pr-1 py-2">
              <v-card-title class="mt-2" style="font-size: 19px">{{ weightProducts[model] ? weightProducts[model]['ProductName'] : '' }}</v-card-title>
              <v-card-title class="mt-1 mb-2" style="font-size: 16px">Вес </v-card-title>
            </div>

            <v-item-group v-model="model" mandatory
                          class="d-flex flex-row flex-wrap my-0 py-0 px-2"
                          active-class="product-card__variables_card--active">
              <v-item v-for="(value, i) in weightProducts" :key="i" v-slot="{ active, toggle }">

                <v-card class="product-card__variables_card cursor-pointer ml-2 mb-3"
                        width="102px" height="65px" elevation="0" @click="toggle" style="border-radius: 8px">

                  <div class="d-flex flex-column justify-center align-center" style="height: inherit">
                    <v-card-subtitle class="text-center font-weight-bold" style="font-size: 15px; color:#000; line-height: 10px;">
                      <span>{{ value['volumeinml'] }}</span>
                      <span>мл.</span>
                    </v-card-subtitle>

                    <v-card-text class="text-center ml-2" style="font-size: 13px">
                      <span>{{ value['ProductPrice'] }}</span> &nbsp;
                      <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
                    </v-card-text>
                  </div>
                </v-card>

              </v-item>
            </v-item-group>

            <v-card-title class="mb-2 pl-4 pr-1 py-2">
              <span> {{ weightProducts[model] ? weightProducts[model]['ProductPrice'] : '' }} </span>
              <v-icon color="black" style="font-size: 20px">mdi-currency-rub</v-icon>
            </v-card-title>

            <v-card-actions class="pa-4 pt-0">
              <v-btn class="custom-rounded font-weight-regular text-none"
                     elevation="0" height="50px" color="#26ae60"
                     style="font-size: 16px; letter-spacing: .4px;" dark block>
                <!-- todo заменить v-icon-->
                <v-card class="d-flex justify-center align-center rounded-circle pa-2 mr-2" color="#159d4f" elevation="0">
                  <v-icon style="font-size: 18px">mdi-briefcase-outline</v-icon>
                </v-card>
                <span>Добавить в корзину</span>
              </v-btn>
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
  model: any = 0
  item: any = {}
  product: any = {}
  listAdvantage: any = []
  weightProducts: any = []

  async created () {
    return await this.initAll ()
  }

  async initAll () {
    try {
      let {docMainproduct, docproduct}: any = this.$router.currentRoute.query

      if (!docMainproduct && !docproduct) {
        console.log('Нема продукта')
        return
      }

      this.item = await this.initItem(docproduct)
      this.product = await this.initProduct(docMainproduct)
      this.listAdvantage = await this.initList('listadvantage', 'advantage/getProduct')
      this.weightProducts = await this.initList ('weightproducts', 'products/getProduct')
      this.model = this.weightProducts.map((elem: any) => elem.id).indexOf(docproduct)
    } catch (e) {
      console.log(e)
    }
  }

  async initItem (id: any) {
    return await this.$store.dispatch ('products/getProduct', id)
  }

  async initProduct (id: any) {
    return await this.$store.dispatch ('mainproducts/getProduct', id)
  }

  async initList (type: string, storage: string) {
    let array: any = []

    let products = this.product[type].map((doc: any) => {
      let link = doc['_key']['path']['segments']
      return link[link.length - 1]
    });

    for (let i = 0; i < products.length; i++) {
      let product = await this.$store.dispatch (storage, products[i])
      array.push(product)
    }

    return array
  }

  @Watch('model')
  changeCurrentRoute () {
    return this.routing(this.linkProductPage(this.product.id, this.weightProducts[this.model].id))
  }

  imageList (image: any) {
    let firstImage = image['ProductImage']
    let images = image['imgsProduct']
    let array = []
    array.push(firstImage)
    array.push(...images)
    return array
  }

  firstListAdvantage (list: any) {
    return list.filter ((item: any, i: number) => i <= 5)
  }

  secondListAdvantage (list: any) {
    return list.filter ((item: any, i: number) => i >= 6)
  }

  linkProductPage (id: any, product: any) {
    return '/productpage?docMainproduct=' + id + '&docproduct=' + product
  }

  get onlyNameProduct () {
    return this.item['ProductName'] ? this.item['ProductName'].split(',')[0] : ''
  }

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
