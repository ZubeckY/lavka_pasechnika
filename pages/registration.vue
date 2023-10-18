<template>
  <v-form>
    <v-text-field label="Email"
                  placeholder="Email"
                  solo/>

    <v-text-field label="Пароль"
                  placeholder="Пароль"
                  solo/>

    <v-text-field label="Повторите пароль"
                  placeholder="Повторите пароль"
                  solo/>

    <v-card-actions class="d-flex justify-center">
      <v-btn class="font-weight-medium text-none pt-1"
             elevation="0" width="160px" style="letter-spacing: .3px"
             height="35px" color="#26ae60" dark>
        Создать аккаунт
      </v-btn>
    </v-card-actions>

  </v-form>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
@Component ({
  layout: 'auth'
})
export default class Registration extends Vue {

}
</script>
