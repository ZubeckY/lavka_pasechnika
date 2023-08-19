<template>
  <footer style="margin-top: 90px;">
    <v-container>
      <v-row class="ma-0 pa-0">

        <!-- Контакты -->
        <v-col class="ma-0 pa-0" cols="auto">

          <logo/>

          <div class="mt-5">
            <v-card-title style="font-size: 19px">Контакты</v-card-title>
            <v-card-subtitle class="mt-2" style="color:#787070; font-size: 16px">Мы работаем</v-card-subtitle>

            <div class="d-flex flex-row font-weight-medium"
                 style="color:#787070; line-height: 18px; height: 35px">
              <div style="width: 1px; margin-top: 3px; height: 100%; background: #787070"></div>
              <div style="margin-left: 8px; margin-top: 4px; height: 100%">
                <div>пн-пт 8:00—21:00</div>
                <div>сб-вс 8:00—21:00</div>
              </div>
            </div>
          </div>

          <div>
            <v-card-title class="my-4" style="font-size: 24px">+7 (918) 325-55-56</v-card-title>

            <v-btn class="text-none rounded-xxl"
                   color="#26ae60" style="font-size: 16px; letter-spacing: .1px"
                   width="214px" height="40px" dark>
              Задать вопрос
            </v-btn>

            <div class="d-flex flex-row align-center my-3">
              <div style="width: 10px; height: 10px; border-radius: 50%; background: #31eca8; margin-left: 7px; margin-right: 17px;"></div>
              <div class="font-weight-bold" style="font-size: 16px; line-height: 16px; color: #574f4f;">Задайте нам <br> вопрос напрямую:</div>
            </div>

            <div class="d-flex flex-row">
              <div style="width: 35px; height: 35px; margin-right: 8px;">
                <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~assets/images/social/vklogo.png">
              </div>

              <div style="width: 35px; height: 35px; margin-right: 8px;">
                <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~assets/images/social/вайбер.png">
              </div>

              <div style="width: 35px; height: 35px; margin-right: 8px;">
                <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~assets/images/social/вотсапп.png">
              </div>

              <div style="width: 35px; height: 35px; margin-right: 8px;">
                <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~assets/images/social/телеграм.png">
              </div>
            </div>
          </div>
        </v-col>

        <!-- До встречи в наших магазинах -->
        <v-col class="ma-0 pa-0" style="margin-left: 30px !important" cols="auto">
          <v-card-title style="font-size: 19px">До встречи в наших магазинах</v-card-title>
        </v-col>

        <!-- Меню -->
        <v-col class="ma-0 pa-0" style="margin-left: 60px !important" cols="auto">
          <div>
            <v-card-title class="mb-3" style="font-size: 19px">Меню</v-card-title>
            <div class="d-flex flex-column">
              <a @click="routing('/')" style="font-size: 16px; line-height: 26px;">Главная</a>
              <a @click="routing('/allproducts')" style="font-size: 16px; line-height: 26px;">Каталог</a>
              <a @click="routing('/stockssale')" style="font-size: 16px; line-height: 26px;">Акции</a>
              <a style="font-size: 16px; line-height: 26px;">О магазине</a>
              <a style="font-size: 16px; line-height: 26px;">Отзывы</a>
            </div>
          </div>

          <div>
            <v-card-title class="my-3" style="font-size: 19px">Меню</v-card-title>
            <div class="d-flex flex-column">
              <a style="font-size: 16px; line-height: 26px;">Мои заказы</a>
              <a style="font-size: 16px; line-height: 26px;">Моя корзина</a>
              <a style="font-size: 16px; line-height: 26px;">Бонусная карта</a>
              <a style="font-size: 16px; line-height: 26px;">Условия доставки и оплаты</a>
            </div>
          </div>
        </v-col>

        <!-- Скачайте наше приложение -->
        <v-col class="ma-0 pa-0" style="margin-left: 68px !important" cols="auto">
          <div style="width: 254px; height: 345px">
            <img class="d-block" style="width: 100%; height: 100%" alt="#" src="~assets/images/info.png">
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-divider class="my-4"/>

    <v-container>
      <v-row class="d-flex align-center pa-1">
        <v-col class="ma-0 pa-0">
          <div class="pl-15 text-uppercase" style="font-size: 13px">&#169; Лавка пасечника | {{ getNowYear}}</div>
        </v-col>

        <v-col class="ma-0 pa-0">
          <div class="pl-3 text-uppercase" style="font-size: 13px">Политика конфиденциальности</div>
        </v-col>


        <v-col class="ma-0 pa-0 pr-7" cols="auto">
          <div class="d-flex flex-row align-center">

            <div style="width: 37px; height: 29px; margin-right: 8px;">
              <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~assets/images/elephant.png">
            </div>
            <div class="" style="font-size: 13px">Разработано в <a class="text-decoration-underline" style="color:#26ae60 !important;" href="https://mazurgroup.ru" target="_blank">mazurgroup.ru</a></div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class MainFooter extends Vue {
  get getNowYear () {
    return new Date ().getFullYear()
  }

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>
