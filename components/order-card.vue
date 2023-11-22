<template>
  <v-card class="px-3 py-2 mb-3" elevation="0"
          style="border-radius: 13px" max-width="900px" width="100vw">
    <div class="d-flex justify-space-between align-center">
      <div class="mx-2">
        <v-card-title class="pt-2 pa-0">Заказ № {{ order.id }}</v-card-title>
        <v-card-subtitle class="py-1 pa-0">{{ order.payment_uuid }}</v-card-subtitle>
      </div>
      <v-card-subtitle class="font-weight-medium mx-2 pa-0">{{ order.order_status.title }}</v-card-subtitle>
    </div>

    <div class="d-flex flex-row flex-wrap mt-2">
      <order-item-card v-for="(listItem, i) in order['cart_item']" :key="i"
                       :listItem="listItem"></order-item-card>
    </div>

    <div class="d-flex align-center mt-2">
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
