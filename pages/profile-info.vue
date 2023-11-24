<template>
  <div>
    <div v-if="user">
      <div>
        <v-card-title>Личная информация</v-card-title>
        <div class="mt-6" style="width: 500px">
          <v-text-field label="Фамилия" class="pa-0 ma-0" dense outlined background-color="white"/>
          <v-text-field label="Имя" class="pa-0 ma-0" dense outlined background-color="white"/>
          <v-text-field label="Email" class="pa-0 ma-0" dense outlined background-color="white"/>
          <v-text-field label="Телефон" class="pa-0 ma-0" dense outlined background-color="white"/>
        </div>
      </div>

      <div class="mt-4">
        <v-card-title>Адреса</v-card-title>
        <div class="mt-4">
          <div>

          </div>
          <v-btn class="text-none d-inline" elevation="0"
                 color="#26ae60" width="120px" height="35px" dark>
            Добавить
          </v-btn>
        </div>
      </div>


    </div>
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
export default class ProfileInfo extends Vue {
  @Inject() user!: any;
  orderButtonText: string = '<span style="border-bottom: .06cm white dashed;">Войти</span> или <span style="border-bottom: .06cm white dashed;">зарегестрироваться</span>'

  gotToAuth() {
  }
}
</script>
