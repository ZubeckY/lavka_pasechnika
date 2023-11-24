<template>
  <v-card class="d-flex flex-row custom-rounded px-2 pb-1" width="auto" elevation="0">
    <v-card class="custom-rounded" elevation="0" color="#e5e5e5" width="100px" height="100px" :img="getImages">
    </v-card>
    <div class="d-flex flex-column ml-2" style="padding: 3px 0">
      <v-card-title class="font-weight-medium" style="font-size: 16px">
        {{ listItem['sub_product'].title }}
      </v-card-title>
      <div style="flex: 1 1 auto"></div>
      <v-card-subtitle>Цена: {{ listItem['sub_product'].price }} ₽</v-card-subtitle>
      <v-card-subtitle>Количество: {{ listItem.count }}</v-card-subtitle>
      <v-card-text class="font-weight-regular">
        Подитог: {{ listItem.count * listItem['sub_product'].price }} ₽
      </v-card-text>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class OrderCard extends Vue {
  @Prop() listItem?: any

  get getImages() {
    if (!this.listItem['sub_product']) return []
    return JSON.parse(this.listItem['sub_product'].images).length ?
      JSON.parse(this.listItem['sub_product'].images)[0].replace(/[\'\`]/g, '"') : []
  }
}
</script>
