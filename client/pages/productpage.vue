<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="routing('/')"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-card-title class="ml-3" style="font-style: italic">{{ onlyNameProduct }}</v-card-title>

        <v-btn style="border-radius: 8px"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </div>

      <v-row>

        <v-col class="ma-0 pa-0" cols="auto">
          <v-card class="custom-rounded" elevation="0"
                  width="340px" height="460px" :img="item['ProductImage']">
          </v-card>
        </v-col>

        <v-col class="my-0 mx-8 pa-0">
          <div></div>


          <v-card color="transparent" elevation="0">
            <v-card-title style="font-size: 14px">Описание</v-card-title>
            <v-card-text class="mt-2" style="font-size: 14px; line-height: 14px">{{ product['Description'] }}</v-card-text>
          </v-card>
        </v-col>

        <v-col class="ma-0 pa-0" cols="auto">
          <v-card class="d-flex flex-column custom-rounded" elevation="5"
                  width="350px" >

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
  model: any = 0
  item: any = {}
  product: any = {}
  weightProducts: any = []

  async created () {
    return await this.initProduct()
  }

  async initProduct () {
    let {docMainproduct, docproduct}: any = this.$router.currentRoute.query

    if (!docMainproduct && !docproduct) {
      console.log('Нема продукта')
      return
    }

    this.item = await this.$store.dispatch ('products/getProduct', docproduct)
    this.product = await this.$store.dispatch ('mainproducts/getProduct', docMainproduct)

    await this.initWeightProducts()
  }

  async initWeightProducts () {
    let array: any = []
    let {docproduct}: any = this.$router.currentRoute.query

    let products = this.product['weightproducts'].map((doc: any) => {
      let link = doc['_key']['path']['segments']
      return link[link.length - 1]
    });

    for (let i = 0; i < products.length; i++) {
      let product = await this.$store.dispatch ('products/getProduct', products[i])
      array.push(product)
    }

    this.weightProducts = array
    this.model = this.weightProducts.map((elem: any) => elem.id).indexOf(docproduct)
  }


  @Watch('model')
  changeCurrentRoute () {
    return this.routing(this.linkProductPage(this.product.id, this.weightProducts[this.model].id))
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
