<template>
  <div>
    <section v-show="false">
      <v-container>
        <v-card-title>Полезные советы</v-card-title>
        <v-card-text>В формате сторис</v-card-text>
      </v-container>
    </section>

    <!-- width = 991 - спрятать стрелки -->
    <section>
      <v-container>
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
      </v-container>
    </section>

    <section class="mt-3">
      <v-container>
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
      </v-container>
    </section>

    <section class="mt-5">
      <v-container>
        <v-card-title>Популярные товары</v-card-title>
        <div class="d-flex flex-row mt-4">
          <catalog-item v-for="i in 6" :key="i"/>
        </div>
      </v-container>
    </section>

    <section style="margin-top: 140px;">
      <v-container>
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
      </v-container>
    </section>

    <section class="mt-1">
      <v-container>
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

      </v-container>
    </section>

  </div>
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

