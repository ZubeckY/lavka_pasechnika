<template>
  <v-container>

    <header class="py-2">
      <div class="d-flex flex-row justify-space-between">
        <a @click="routing('/')">Главная</a>
        <a @click="routing('/')">Каталог</a>
        <a @click="routing('/')">Условия доставки и оплаты</a>
        <a @click="routing('/')">Акции</a>
        <a @click="routing('/')">О магазине</a>
        <yandex-reviews/>
        <a @click="routing('/contacts')">Контакты и адреса</a>


      </div>

      <v-divider/>
    </header>


    <section v-show="false">
      <div>
        <v-card-title>Полезные советы</v-card-title>
        <v-card-text>В формате сторис</v-card-text>
      </div>
    </section>


    <!-- width = 991 - спрятать стрелки -->
    <section>
      <div>
        <v-carousel v-model="activeSlide"
                    class="custom-rounded mt-8"
                    next-icon="mdi-arrow-right-thin"
                    prev-icon="mdi-arrow-left-thin"
                    hide-delimiters height="290px">
          <v-carousel-item v-for="i in 3" :key="i">
            <v-sheet color="#69696969" height="100%"></v-sheet>
          </v-carousel-item>
        </v-carousel>

        <!-- Слайды поменьше -->
        <v-sheet class="d-flex justify-center" color="transparent">
          <v-slide-group v-model="activeSlide"
                         center-active show-arrows>
            <v-slide-item v-for="i in 3" :key="i" v-slot="{ active, toggle }">
              <!-- Картинки -->

              <v-card class="custom-rounded ml-0 mt-2 ma-3"
                      elevation="0"
                      height="4px" @click="toggle"
                      :color="active ? '#26ae60' : '#9e9e9e'"
                      :width="active ? '34px' : '18px'">
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>
      </div>
    </section>



    <section class="mt-3">
      <div>
        <v-card-title>Категории</v-card-title>
        <v-card-text>Более 10 категорий и подкатегорий натуральной продукции</v-card-text>

        <div class="d-flex flex-row flex-wrap mt-2">
          <v-card class="custom-rounded ma-1" elevation="1" color="#765337" width="480px" height="120px"></v-card>
          <v-card class="custom-rounded ma-1" elevation="1" color="#786e24" width="190px" height="120px"></v-card>
          <v-card class="custom-rounded ma-1" elevation="1" color="#ae794b" width="480px" height="120px"></v-card>
          <v-card class="custom-rounded ma-1" elevation="1" color="#cf8e0e" width="480px" height="120px"></v-card>
          <v-card class="custom-rounded ma-1" elevation="1" color="#98806d" width="480px" height="120px"></v-card>
          <v-card class="custom-rounded ma-1" elevation="1" color="#1f3738" width="190px" height="120px"></v-card>
        </div>
      </div>
    </section>

    <section class="mt-5">
      <div>
        <v-card-title>Популярные товары</v-card-title>

        <div class="d-flex flex-row mt-4">
          <v-card class="product-card rounded-xl mr-3"
                  style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)"
                  width="180px" height="325px"
                  v-for="i in 6" :key="i">
            <div class="product-card__container">
              <v-img class="rounded-xl" width="160px" height="160px"
                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2kCrO5vzXnkiGZyI4hLoBY-FaUYe-iQRPg&usqp=CAU" alt="#"></v-img>

              <v-card-title class="product-card__title mt-3">Мёд золотарник</v-card-title>

              <div class="product-card__variables d-flex flex-row overflow-x-auto my-2">
                <v-card class="product-card__variables_card rounded-xl mr-2"
                        @click="routing('/test')" v-for="i in 5" :key="i"
                        min-width="85px" min-height="56px" elevation="0">
                </v-card>
              </div>

              <v-btn class="text-none font-weight-bold" height="40px"
                     style="border-radius: 8px" color="white" elevation="0" block>
                Выбрать
              </v-btn>

            </div>
          </v-card>
        </div>
      </div>
    </section>

    <section style="margin-top: 140px;">
      <div class="d-flex flex-row">

        <div class="">

          <v-card-title style="color: #411a04;">Семейная пасека <br> с 10-ти летней историей </v-card-title>

          <div class="my-4" style="width: 70px; height: 2px; background: #eb9f11"></div>

          <v-card-text class="font-weight-light" style="max-width: 620px; font-size: 16px; color: #411a04; line-height: 16px; letter-spacing: .1px !important">
            У нас есть цель — сделать наш родной Южный мёд таким же популярным, как Башкирский и Алтайский.
            У нас есть все условия и возможности ее добиться.
          </v-card-text>
          <v-card-text class="font-weight-light mt-4" style="max-width: 690px; font-size: 16px; color: #411a04; line-height: 16px; letter-spacing: .1px !important">
            Мы используем все доступные нам современные технологии, чтобы сохранять, поддерживать и увеличивать популяцию породы Краснодарских пчёл.
            Человечество не сможет и трёх лет продержаться, если с пчёлами что-то случиться, поэтому сейчас в условиях кризиса окружающей среды как никогда важно заботится об этом.
            Мы <br> постоянно сотрудничаем с НИИ в области пчеловодства и способствуем развитию селекционной работы в России в целом.
          </v-card-text>

          <v-card-subtitle class="font-weight-bold mt-4" style="color: #411a04; font-size: 16px; line-height: 14px">Квитко Николай Игнатьевич</v-card-subtitle>
          <v-card-text style="color:#eb9f11; font-size: 13px; line-height: 15px">основатель пасеки и пчеловод</v-card-text>

        </div>


        <div style="width: 500px; height: 330px">
          <img class="d-block" style="position:relative; top: -40px; width: 100%; height: 100%" alt="#" src="~assets/images/family.png">
        </div>

      </div>
    </section>

    <section class="mt-1">
      <div>
        <v-card-title class="justify-center mb-2" style="color: #411a04; font-size: 28px; letter-spacing: -0.1px;">Почему выбирают нас?</v-card-title>
        <v-card-text class="font-weight-regular text-center" style="color: #411a04; font-size: 18px; letter-spacing: -0.1px; line-height: 20px">
          Медовая и натуральная продукция
          <span class="font-weight-bold">с высоким качеством</span>
          <br>
          и историей происхождения
        </v-card-text>

        <div class="mt-5" style="width: 1200px; height: 630px">
          <img class="d-block" style="width: 100%; height: 100%" alt="#" src="~assets/images/why-me.png">
        </div>

      </div>
    </section>


  </v-container>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Pages extends Vue {
  activeSlide: number = 0


  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>

