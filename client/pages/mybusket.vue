<template>
  <div class="d-flex flex-row">
    <div style="width: 100vw; max-width: 600px;">
      <v-card-actions class="pa-0 mb-2">
        <v-spacer/>
        <v-card-subtitle style="font-size: 16px">
          {{ itemsCount }} товаров
        </v-card-subtitle>
      </v-card-actions>

      <div v-if="itemsCount > 0">
        <v-card v-for="(listItem, i) in list" :key="i"
                class="d-flex flex-row custom-rounded pa-2 mb-2"
                width="100%" elevation="0"
                @click="routing(linkProductPage(
                  listItem['mainProductId'],
                  listItem['productId']))">
          <v-card class="custom-rounded"
                  elevation="0"
                  width="100px"
                  height="100px"
                  color="#e5e5e5"
                  :img="listItem.productImage">
          </v-card>

          <div class="mt-2 ml-2">
            <v-card-title class="font-weight-medium" style="font-size: 16px">{{ listItem.productName }}</v-card-title>
            <v-card-subtitle>Цена: {{ listItem.productPrice }} ₽</v-card-subtitle>
            <v-card-text class="font-weight-regular">Подитог: {{ listItem.count * listItem.productPrice }} ₽</v-card-text>
          </div>

          <v-spacer/>

          <v-card class="custom-rounded d-flex flex-column justify-center align-center"
                  @click.stop elevation="0" width="40px" height="100px" color="#26ae60" dark>
            <v-btn icon @click="countPlus(listItem)">
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-card-title class="d-flex align-center justify-center font-weight-medium my-1" style="font-size: 16px">
              {{ listItem.count }}
            </v-card-title>
            <v-btn icon @click="countMinus(listItem)">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
          </v-card>

        </v-card>
      </div>

      <v-card v-else
              class="mx-auto mt-5"
              elevation="0"
              width="320"
              color="transparent">

        <v-img class="mx-auto" width="174px" height="214px" alt="#"
               :src="require(`~/assets/images/honeyhivecart.png`)"
               :lazy-src="require(`~/assets/images/honeyhivecart.png`)"/>

        <v-card-title class="d-flex justify-center text-center mt-6">В корзине пока <br> ничего нет</v-card-title>
        <v-card-text class="text-center font-weight-medium mt-4"
                     style="font-size: 16px; line-height: 18px; letter-spacing: -.3px !important">
          Вы можете начать свой выбор с главной
          страницы или воспользоваться поиском
          если ищите что-то конкретное
        </v-card-text>

        <v-card-actions class="d-flex flex-column mx-auto mt-2" style="width: 220px;">
          <v-btn class="font-weight-bold text-none custom-rounded" dark block height="40px"
                 color="#26ae60" style="font-size: 16px; letter-spacing: .3px"
                 @click="routing('/allproducts')">
            К покупкам
          </v-btn>
          <v-btn class="font-weight-bold text-none mt-2" text
                 color="#26ae60" style="font-size: 16px; letter-spacing: .3px"
                 @click="routing('/stockssale')">
            Акции и скидки
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <div class="ml-8" v-if="itemsCount > 0">
      <div>
        <v-card class="d-flex align-center custom-rounded pl-4 pr-3"
                elevation="0" width="300px" height="50px">
          <v-card-subtitle style="font-size: 18px">Получатель</v-card-subtitle>
          <v-spacer/>
          <v-btn class="font-weight-bold text-none custom-rounded"
                 min-height="0" height="30px" width="140px" color="#26ae60"
                 dark style="font-size: 16px; letter-spacing: .3px">
            Заполнить
          </v-btn>
        </v-card>

        <v-card class="d-flex align-center custom-rounded pl-4 pr-3 mt-4"
                elevation="0" width="300px" height="50px">
          <v-card-subtitle style="font-size: 18px">Доставка</v-card-subtitle>
          <v-spacer/>
          <v-btn class="font-weight-bold text-none custom-rounded"
                 min-height="0" height="30px" width="140px" color="#26ae60"
                 dark style="font-size: 16px; letter-spacing: .3px">
            Выбрать
          </v-btn>
        </v-card>

        <v-card class="d-flex flex-row align-center custom-rounded pl-4 pr-3 mt-4"
                elevation="0" width="300px" height="50px">
          <v-text-field class="custom-rounded"
                        label="Промокод"
                        hide-details dense
                        outlined color="primary"/>
          <v-btn class="ml-2"
                 min-width="0"
                 min-height="0"
                 width="40px"
                 height="40px"
                 color="#26ae60" dark>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card>

        <v-card class="d-flex flex-column custom-rounded pl-4 pr-3 py-3 mt-4"
                elevation="0" width="300px">
          <v-card-subtitle class="d-flex flex-row justify-space-between font-weight-bold"
                           style="font-size: 16px; width: 100%">
            <div>Сумма без скидок</div>
            <div>{{ priceWithoutDiscount }} ₽</div>
          </v-card-subtitle>
          <v-card-subtitle class="d-flex flex-row justify-space-between font-weight-bold"
                           style="font-size: 16px; width: 100%">
            <div>Скидка</div>
            <div>{{ discount }} ₽</div>
          </v-card-subtitle>
          <v-card-subtitle class="d-flex flex-row justify-space-between font-weight-bold"
                           style="font-size: 16px; width: 100%">
            <div>Скидка по купону</div>
            <div>{{ couponDiscount }} ₽</div>
          </v-card-subtitle>

          <v-card-title class="d-flex flex-row justify-space-between font-weight-bold mt-3"
                        style="width: 100%">
            <div>Итого:</div>
            <div>{{ priceWithDiscount }} ₽</div>
          </v-card-title>
        </v-card>

        <v-btn class="text-none mt-4"
               width="300px"
               height="45px"
               color="#26ae60" dark
               style="font-size: 16px; letter-spacing: .3px">
          Оформить заказ
        </v-btn>

      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
@Component ({
  layout: 'lk'
})
export default class Mybusket extends Vue {
  list: any = []
  itemsCount: number = 0
  discount: number = 0
  couponDiscount: number = 0

  created () {
    this.initBusket()
    // console.log(this.$cookies.get('auth'))
  }

  initBusket () {
    this.list = this.$store.getters['busket/getList']
    this.itemsCount = this.totalCountItems ?? 0
  }

  routing (link: string) {
    return this.$router.push(link)
  }

  linkProductPage (id: any, product: any) {
    return '/productpage?docMainproduct=' + id + '&docproduct=' + product
  }

  get totalCountItems () {
    let count = 0
    let storeData = this.$store.getters['busket/getList']
    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count']
    }
    return count
  }

  get priceWithoutDiscount () {
    let count = 0
    let storeData = this.$store.getters['busket/getList']
    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count'] * storeData[i]['productPrice']
    }
    return count
  }

  get priceWithDiscount () {
    let count = 0
    let storeData = this.$store.getters['busket/getList']
    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count'] * storeData[i]['productPrice']
    }
    return count - this.discount - this.couponDiscount
  }

  countPlus (data: any) {
    this.$store.dispatch ("busket/addOne", data).then(() => {
      this.initBusket()
    })
  }

  countMinus (data: any) {
    this.$store.dispatch ("busket/deleteOne", data).then(() => {
      this.initBusket()
    })
  }

}
</script>
