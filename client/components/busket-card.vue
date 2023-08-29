<template>
  <v-card class="d-flex flex-row custom-rounded pa-2 mb-2"
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
</template>
<script lang="ts">
import {Component, Prop, Vue, Watch} from "vue-property-decorator"
@Component
export default class BusketCard extends Vue {
  @Prop () listItem?: any

  initBusket () {
    this.$emit ('initBusket')
  }

  linkProductPage (id: any, product: any) {
    return '/productpage?docMainproduct=' + id + '&docproduct=' + product
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

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
