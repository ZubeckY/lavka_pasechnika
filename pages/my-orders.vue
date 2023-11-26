<template>
  <div>
    <div v-if="isUser">
      <order-card v-for="order in list" :key="'order'+order.id" :order="order"/>
    </div>
    <div v-else class="d-flex justify-center align-center" style="width: 60vw; max-width: 950px; height: 50vh">
      <gotoauthbutton/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"

@Component({
  layout: 'lk'
})
export default class MyOrders extends Vue {
  @Inject() user!: any;
  list: any = []

  async mounted() {
    this.isUser && await this.initOrders()
  }

  get isUser() {
    return this.user?.id
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
