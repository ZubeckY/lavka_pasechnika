<template>
  <v-btn style="border-radius: 8px" @click="getBack"
         width="44px" height="44px" min-width="0"
         color="#26ae60" elevation="0" dark>
    <v-icon>mdi-chevron-left</v-icon>
  </v-btn>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class ButtonBack extends Vue {
  getBack() {
    if (!document.referrer) {
      return location.href = '/'
    } else {
      return location.href = document.referrer
    }
  }
}
</script>
