<template>
  <div class="d-flex flex-row">
    <v-dialog class="d-flex justify-center align-center" overlay-color="#e6e6e650" v-model="dialog">
      <div style="width: 100%;" class="d-flex justify-center align-center overflow-hidden">
        <v-progress-circular :width="6" :size="150" color="grey" indeterminate/>
      </div>
    </v-dialog>

    <div style="width: 100vw; max-width: 600px;">
      <v-card-actions class="pa-0 mb-2">
        <v-spacer/>
        <v-card-subtitle style="font-size: 16px">
          {{ itemsCount }} товаров
        </v-card-subtitle>
      </v-card-actions>

      <div v-if="itemsCount > 0">
        <busket-card v-for="(listItem, i) in list" :key="i"
                     :listItem="listItem" @initCart="initCart"/>
      </div>

      <v-card v-else class="mx-auto mt-5" elevation="0"
              width="320" color="transparent">

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

          <v-card-title class="d-flex flex-row justify-space-between font-weight-bold mt-3" style="width: 100%">
            <div>Итого:</div>
            <div>{{ priceWithDiscount }} ₽</div>
          </v-card-title>
        </v-card>

        <v-card class="d-flex flex-row align-center custom-rounded pl-4 pr-3 mt-4"
                elevation="0" width="300px" height="50px">
          <v-text-field class="custom-rounded" label="Промокод"
                        hide-details dense outlined color="primary"/>
          <v-btn class="ml-2" min-width="0" min-height="0"
                 width="40px" height="40px" color="#26ae60" dark>
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card>


        <v-btn class="mt-4 text-none d-inline" width="300px" :height="isAuth ? '45px' : '55px'" v-html="orderButtonText"
               color="#26ae60" dark style="font-size: 14px; letter-spacing: .3px; white-space: pre-line" @click="managerAuthORPay">
        </v-btn>

      </div>
    </div>

  </div>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"

@Component({
  layout: 'lk'
})
export default class Mybusket extends Vue {
  list: any = []
  isAuth: boolean = false
  dialog: boolean = false
  discount: number = 0
  itemsCount: number = 0
  couponDiscount: number = 0

  async mounted() {
    await this.initCart()
  }

  async initCart() {
    const cart_uuid = localStorage.getItem('cart_uuid')
    await this.$axios.get(`/api-products/cart-item/?cart_uuid=${cart_uuid ? cart_uuid : ''}`)
      .then((data) => {
        this.initItems(data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  initItems(data: any) {
    this.itemsCount = data.data.results.length ?? 0
    this.list = data.data.results
  }

  managerAuthORPay() {
    return this.isAuth ? this.generatePay() : this.goToAuth()
  }

  goToAuth() {
    console.log('going to auth')
  }

  async generatePay() {
    this.dialog = true
    const cart_uuid = localStorage.getItem('cart_uuid')
    const return_url = process.env.MAIN_LINK + `myorders?cart_uuid=${cart_uuid ? cart_uuid : ''}`

    await this.$store.dispatch(
      'orders/generatePayLink',
      {
        store: this.$store,
        value: this.priceWithoutDiscount,
        description: "Заказ №1",
        return_url: return_url
      }
    ).then(async (data: any) => {
      // console.log(data)
      const payment_id = data.data.id ? data.data.id : ''
      const payment_status = data.data.paid ? data.data.paid : ''

      await this.$axios.post(process.env.MAIN_LINK + `api-products/order/?cart_uuid=${cart_uuid ? cart_uuid : ''}&payment_id=${payment_id}&payment_status=${payment_status}`,
        {}, {}).then(() => {}).catch(() => {})

      location.href = data.data.confirmation.confirmation_url
    }).catch((e) => {
      console.log(e)
    }).finally(() => {
      this.dialog = false
    })
  }

  get priceWithoutDiscount() {
    let total_price = 0
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i]
      total_price += item.count * item['sub_product'].price
    }
    return total_price
  }

  get priceWithDiscount() {
    let total_price = 0
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i]
      total_price += item.count * item['sub_product'].price
    }
    return total_price
  }

  get orderButtonText () {
    return this.isAuth ? 'Оформить заказ' : '<span style="border-bottom: .06cm white dashed;">Войти</span> или <span style="border-bottom: .06cm white dashed;">зарегестрироваться,</span> \ чтобы офорить заказ'
  }

  routing(link: string) {
    return this.$router.push(link)
  }
}
</script>
