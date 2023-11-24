<template>
  <v-card class="px-3 py-2 mb-3" elevation="0"
          style="border-radius: 13px" max-width="900px" width="100vw">
    <div class="d-flex justify-space-between align-center">
      <div class="mx-2">
        <v-card-title class="pt-2 pa-0">Заказ № {{ order.id }}</v-card-title>
        <v-card-subtitle class="py-1 pa-0">{{ order.payment_uuid }}</v-card-subtitle>
      </div>
    </div>

    <div class="d-flex flex-row flex-wrap mt-4">
      <order-item-card v-for="(listItem, i) in order['cart_item']" :key="i"
                       :listItem="listItem"></order-item-card>
    </div>

    <div class="mt-4">
      <v-row class="ma-0 px-2 mt-2">
        <v-col cols="3" class="d-flex ma-0 pa-0">
          <div style="width: 40px">
            <v-icon size="20">mdi-map-marker-circle</v-icon>
          </div>
          <div style="font-size: 14px" class="font-weight-bold">Адрес доставки:</div>
        </v-col>
        <v-col class="ma-0 pa-0">
          <span style="font-size: 14px">Адрес доставки, улица, дом, индекс</span>
        </v-col>
      </v-row>

      <v-row class="ma-0 px-2 mt-2">
        <v-col cols="3" class="d-flex ma-0 pa-0">
          <div style="width: 40px">
            <v-icon size="20">mdi-email-fast-outline</v-icon>
          </div>
          <div style="font-size: 14px" class="font-weight-bold">Трек номер:</div>
        </v-col>
        <v-col class="ma-0 pa-0">
          <span style="font-size: 14px">RH939388135CN</span>
        </v-col>
      </v-row>

      <v-row class="ma-0 px-2 mt-2">
        <v-col cols="3" class="d-flex ma-0 pa-0">
          <div style="width: 40px">
            <v-icon size="20">mdi-card-account-mail-outline</v-icon>
          </div>
          <div style="font-size: 14px" class="font-weight-bold">Статус заказа:</div>
        </v-col>
        <v-col class="ma-0 pa-0">
          <span style="font-size: 14px">{{ order.order_status.title }}</span>
        </v-col>
      </v-row>

      <v-row class="ma-0 px-2 mt-2">
        <v-col cols="3" class="d-flex ma-0 pa-0">
          <div style="width: 40px">
            <v-icon size="20">mdi-truck-delivery-outline</v-icon>
          </div>
          <div style="font-size: 14px" class="font-weight-bold">Служба доставки:</div>
        </v-col>
        <v-col class="ma-0 pa-0">
          <span style="font-size: 14px">СДЕК</span>
        </v-col>
      </v-row>
    </div>

    <div class="d-flex align-center mt-4">
      <v-card-title class="mx-2 px-0">Итог:</v-card-title>
      <div class="mt-1" style="font-size: 17px">{{ fullPrice }} ₽</div>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class OrderCard extends Vue {
  @Prop() order: any

  get fullPrice() {
    let price: number = 0
    for (let i = 0; i < this.order['cart_item'].length; i++) {
      let subProd = this.order['cart_item'][i]
      let localPrice = subProd.count * subProd['sub_product'].price
      price += localPrice
    }
    return price
  }
}
</script>
