<template>
  <div>
    <div v-if="user"></div>
    <div v-else class="d-flex justify-center align-center" style="width: 60vw; max-width: 950px; height: 50vh">
      <v-btn class="text-none d-inline" color="#26ae60" width="300px" height="55px"
             v-html="orderButtonText" elevation="0" @click="gotToAuth"
             style="font-size: 14px; letter-spacing: .3px; white-space: pre-line" dark>
      </v-btn>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"

@Component({
  layout: 'lk'
})
export default class Bonuscard extends Vue {
  @Inject() user!: any;
  orderButtonText: string = '<span style="border-bottom: .06cm white dashed;">Войти</span> или <span style="border-bottom: .06cm white dashed;">зарегестрироваться</span>'

  gotToAuth() {
  }
}
</script>
