<template>
  <header>
    <v-container class="pa-1">
      <div class="d-flex flex-row justify-space-between">
        <a @click="routing('/')">Главная</a>
        <a @click="routing('/')">Каталог</a>
        <a @click="routing('/')">Условия доставки и оплаты</a>
        <a @click="routing('/')">Акции</a>
        <a @click="routing('/')">О магазине</a>
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
