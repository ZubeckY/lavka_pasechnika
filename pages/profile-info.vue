<template>
  <div>
    <div v-if="user" class="d-block">
      <div>
        <v-card-title>Личная информация</v-card-title>
        <div class="mt-6" style="width: 430px">
          <v-text-field label="Фамилия" class="pa-0 ma-0" dense outlined background-color="white"/>
          <v-text-field label="Имя" class="pa-0 ma-0" dense outlined background-color="white"/>
          <v-text-field label="Телефон" class="pa-0 ma-0" dense outlined background-color="white"/>
        </div>
      </div>

      <div>
        <v-card-title>Адрес</v-card-title>
        <div class="mt-6">
          <v-card class="py-2" elevation="0">
            <div v-if="user.address">
              <div class="d-flex justify-space-between align-center mx-2">
                <div>{{user.address}}</div>
                <div class="d-flex flex-row" style="max-width: 40px">
                  <v-btn icon color="success darken-1">
                    <v-icon size="20" >mdi-pen</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div v-else class="d-flex justify-center align-center">
              <v-btn class="text-none d-inline white--text" elevation="0"
                     color="#26ae60" width="120px" height="35px">
                Добавить
              </v-btn>
            </div>
          </v-card>
        </div>
      </div>

      <div class="mt-6 d-flex justify-end">
        <v-btn class="text-none d-inline white--text" elevation="0" disabled
               color="#26ae60" width="120px" height="35px">
          Сохранить
        </v-btn>
        <div class="mx-2"></div>
        <v-btn class="text-none d-inline white--text" elevation="0" disabled
               color="#26ae60" width="120px" height="35px">
          Отмена
        </v-btn>
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
