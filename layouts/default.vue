<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-card class="d-flex flex-column" elevation="0" height="100%" color="#fef6f2">

          <header-desktop/>

          <div style="flex: 1 1 auto;">
            <v-fade-transition>
              <nuxt/>
            </v-fade-transition>
          </div>

          <v-fab-transition>
            <v-btn class="custom-rounded mini-busket-button"
                   :data-total-count="totalCountItems ? totalCountItems : 0"
                   fixed dark bottom right
                   elevation="0" color="#26ae60"
                   width="60px" height="60px"
                   @click="cartDialog = !cartDialog">
              <v-icon>mdi-cart-variant</v-icon>
            </v-btn>
          </v-fab-transition>

          <v-overlay v-model="cartDialog" :dark="false" >
            <div class="d-flex justify-end align-end"
                 style="width: 100vw; height: 100vh"
                 @click="cartDialog = false">
              <div class="rounded-lg d-flex flex-column mb-4 mr-7"
                   @click.stop style="width: 450px; height: 400px; background: white">

                <v-card-title class="text-uppercase pa-2" style="font-size: 16px">Корзина</v-card-title>
                <v-divider></v-divider>

                <div class="overflow-y-auto ma-2" style="flex: 1 1 auto">
                  <busket-card v-for="(listItem, i) in list"
                               :key="i" :listItem="listItem"
                               @initBusket="initBusket"/>
                </div>

                <v-card-actions class="pa-0">
                  <v-btn class="rounded-0 rounded-bl-lg font-weight-bold"
                         elevation="0"
                         width="88%"
                         height="60px"
                         color="#26ae60" dark
                         style="font-size: 18px; letter-spacing: .4px"
                         @click="routing('/mybusket')">
                    Оформить заказ
                  </v-btn>
                  <v-btn color="black" text icon
                         @click="cartDialog = false">
                    <v-icon large>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>

              </div>
            </div>
          </v-overlay>

          <main-footer/>
        </v-card>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
import getBusketFromLocalStorage from "~/assets/scripts/getBusketFromLocalStorage"
@Component
export default class Default extends Vue {
  list: any = []

  cartDialog: boolean = false

  created () {
    this.getBusket ()
    // console.log(this.$cookies.get('auth'))
  }

  getBusket () {
    let data = getBusketFromLocalStorage()
    this.$store.dispatch ('busket/initList', data)
    this.list = this.$store.getters['busket/getList']
  }

  @Watch('$route')
  changeScrollTo () {
    window.scrollTo ({
      top: 0,
      left: 0
    })
  }

  initBusket () {
    this.list = this.$store.getters['busket/getList']
  }

  routing (link: string) {
    return this.$router.push(link)
  }

  get totalCountItems () {
    let count = 0
    let storeData = this.$store.getters['busket/getList']

    if (!storeData) return 0

    for (let i = 0; i < storeData.length; i++) {
      count += storeData[i]['count']
    }

    return count
  }

}
</script>
