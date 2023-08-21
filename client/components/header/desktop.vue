<template>
  <header>
    <v-container class="pa-1">
      <div class="d-flex flex-row mt-4 mb-5">

        <logo class="cursor-pointer" @click="routing('/')"/>

        <div class="d-flex justify-center flex-column ml-9" style="position:relative; top: -5px">
          <v-icon class="font-weight-bold" style="font-size: 40px; line-height: 40px" color="#000">mdi-menu</v-icon>
          <div class="text-uppercase text-center font-weight-bold" style="font-size: 10px; line-height: 0; color: #411a04">Меню</div>
        </div>

        <yandex-reviews>
          <div class="d-flex flex-row ml-8">
            <div style="position:relative; top: -20px; width: 42px; height: 66px;">
              <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~/assets/images/header/флажок.png">
            </div>
            <div class="mt-3 ml-3" style="position:relative; width: 147px; height: 41px;">
              <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~/assets/images/header/rating_5_0_stars.png">
            </div>
          </div>
        </yandex-reviews>

        <div class="ml-8">
          <v-card-subtitle class="download-title--underline" style="font-size: 10px;">Скачать приложение</v-card-subtitle>
          <div class="d-flex flex-row justify-center mt-1">
            <a class="header-link-icon d-block mr-2" target="_blank" href="https://apps.apple.com/ru/app/лавка-пасечника-рф/id1669531191?platform=iphone">
              <img alt="#" src="~/assets/images/header/app-store.png">
            </a>
            <a class="header-link-icon d-block">
              <img alt="#" src="~/assets/images/header/google-play.png">
            </a>
          </div>
        </div>

        <div class="ml-8">
          <v-card-subtitle style="font-size: 10px">Написать на прямую:</v-card-subtitle>
          <div class="d-flex flex-row mt-1">
            <a class="header-link-icon d-block" target="_blank" style="margin-left: 6px;" href="https://vk.com/lavka_pasechnika">
              <img alt="#" src="~/assets/images/social/vklogo.png">
            </a>
            <a class="header-link-icon d-block mx-1" target="_blank">
              <img alt="#" src="~/assets/images/social/вайбер.png">
            </a>
            <a class="header-link-icon d-block" target="_blank" href="https://api.whatsapp.com/send/?phone=79183255556&text=Привет%21+�+Меня+интересует...&type=phone_number&app_absent=0">
              <img alt="#" src="~/assets/images/social/вотсапп.png">
            </a>
          </div>
        </div>

        <div class="d-flex align-center ml-9 mt-3">
          <v-btn @click="routing('/lk')"
                 class="text-none font-weight-bold" dark
                 elevation="1" min-width="0" height="30px"
                 style="font-size: 12px; letter-spacing: -0.1px; border-radius: 8px" color="#26ae60">
            <v-icon class="mr-1" small>mdi-account-outline</v-icon>
            Личный кабинет
          </v-btn>
        </div>

        <div class="ml-9 mt-3">
          <div class="d-flex flex-column align-end">
            <div class="d-flex flex-row align-center">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: #31eca8; margin-bottom: 2px; margin-right: 7px;"></div>
              <div style="font-size: 10px">Пн-Вск 7:00-21:00</div>
            </div>
            <div class="font-weight-bold mt-1" style="font-size: 15px">+7 (918) 325-55-56</div>
          </div>
        </div>
      </div>

      <div class="d-flex flex-row justify-space-between">
        <a @click="routing('/')">Главная</a>
        <a @click="routing('/allproducts')">Каталог</a>
        <a @click="routing('')">Условия доставки и оплаты</a>
        <a @click="routing('/stockssale')">Акции</a>
        <a @click="routing('')">О магазине</a>
        <yandex-reviews>
          <a @click="routing('')" class="d-block">Отзывы</a>
        </yandex-reviews>
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
