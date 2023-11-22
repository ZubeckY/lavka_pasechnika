<template>
  <div>
    <order-card v-for="order in list" :key="'order'+order.id" :order="order"/>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"

@Component({
  layout: 'lk'
})
export default class Myorders extends Vue {
  list: any = []

  async mounted() {
    await this.initOrders()
  }

  async initOrders() {
    await this.$axios.get(`/api-products/order/`)
      .then((data) => {
        this.initItems(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  initItems(data: any) {
    this.list = data.data.results
  }
}
</script>
