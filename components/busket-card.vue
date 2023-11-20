<template>
  <v-card class="d-flex flex-row custom-rounded pa-2 mb-2" width="100%" elevation="0"
          @click="routing(linkProductPage(listItem['sub_product'].main_product_id, listItem['sub_product'].id))">
    <v-card class="custom-rounded" elevation="0" color="#e5e5e5"
            width="100px" height="100px" :img="JSON.parse(listItem['sub_product'].images)[0]">
    </v-card>

    <div class="mt-2 ml-2">
      <v-card-title class="font-weight-medium" style="font-size: 16px">{{listItem['sub_product'].title }}
      </v-card-title>
      <v-card-subtitle>Цена: {{ listItem['sub_product'].price }} ₽</v-card-subtitle>
      <v-card-text class="font-weight-regular">Подитог: {{ listItem.count * listItem['sub_product'].price }} ₽</v-card-text>
    </div>

    <v-spacer/>

    <v-card class="custom-rounded d-flex flex-column justify-center align-center"
            @click.stop elevation="0" width="40px" height="100px" color="#26ae60" dark>
      <v-btn icon @click="countPlus">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-card-title class="d-flex align-center justify-center font-weight-medium my-1" style="font-size: 16px">
        {{ listItem.count }}
      </v-card-title>
      <v-btn icon @click="countMinus">
        <v-icon>mdi-minus</v-icon>
      </v-btn>
    </v-card>

  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator"

@Component
export default class BusketCard extends Vue {
  @Prop() listItem?: any

  linkProductPage(product: any, sub_product: any) {
    return `/productpage/?product=${product}&sub_product=${sub_product}`
  }

  async countPlus() {
    const count = this.listItem.count + 1
    await this.$axios.patch(`/api-products/cart-item/${this.listItem.id}/`, {
      count: count
    }, {})
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        this.$emit('initCart')
      })
  }

  async countMinus() {
    const count = this.listItem.count - 1
    if (count <= 0) {
      return await this.$axios.delete(`/api-products/cart-item-delete/${this.listItem.id}/`)
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.$emit('initCart')
        })
    }

    await this.$axios.patch(`/api-products/cart-item/${this.listItem.id}/`, {
      count: count
    }, {})
      .catch((e) => {
        console.log(e)
      })
      .finally(() => {
        this.$emit('initCart')
      })
  }

  routing(link: string) {
    return this.$router.push(link)
  }
}
</script>
