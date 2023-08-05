<template>
  <header>
    <v-container class="pa-1">
      <div class="d-flex flex-row mt-4 mb-6">
        <logo/>

        <div class="d-flex justify-center flex-column ml-9" style="position:relative; top: -5px">
          <v-icon class="font-weight-bold" style="font-size: 40px; line-height: 40px" color="#000">mdi-menu</v-icon>
          <div class="text-uppercase text-center font-weight-bold" style="font-size: 10px; line-height: 0; color: #411a04">Меню</div>
        </div>

      </div>

      <div class="d-flex flex-row justify-space-between">
        <a @click="routing('/')">Главная</a>
        <a @click="routing('/allproducts')">Каталог</a>
        <a @click="routing('')">Условия доставки и оплаты</a>
        <a @click="routing('')">Акции</a>
        <a @click="routing('')">О магазине</a>
        <yandex-reviews/>
        <a @click="routing('/contacts')">Контакты и адреса</a>
      </div>
      <v-divider class="mt-1"/>
    </v-container>
  </header>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class MainHeader extends Vue {
  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
