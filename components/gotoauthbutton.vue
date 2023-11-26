<template>
  <v-btn class="go-to-auth-button text-none d-inline" color="#26ae60" width="300px" height="55px"
         v-html="orderButtonText" elevation="0" @click="goToAuth" dark/>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class Gotoauthbutton extends Vue {
  orderButtonText: string = '<span style="border-bottom: .06cm white dashed;">Войти</span> или <span style="border-bottom: .06cm white dashed;">зарегестрироваться</span>'

  goToAuth() {
    this.$router.push('/auth')
  }
}
</script>
<style scoped>
.go-to-auth-button {
  font-size: 14px;
  letter-spacing: .3px;
  white-space: pre-line
}
</style>
