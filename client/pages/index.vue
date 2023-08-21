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
          <v-carousel-item v-for="i in countSlide" :key="i">
            <v-sheet color="#69696969" height="100%"></v-sheet>
          </v-carousel-item>
        </v-carousel>

        <!-- Слайды поменьше -->
        <small-slides :activeSlide="activeSlide"
                      :countSlide="countSlide"/>

      </v-container>
    </section>

    <section class="mt-2">
      <v-container>
        <v-card-title>Категории</v-card-title>
        <v-card-text>Более 10 категорий и подкатегорий натуральной продукции</v-card-text>

        <div class="d-flex flex-row flex-wrap mt-2">
          <v-card class="custom-rounded ma-1 pa-3" elevation="1" color="#765337" @click="routing('/allproducts')"
                  width="480px" height="120px" dark :img="require(`~/assets/images/cards/honey.jpg`)">
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Мёд: <br> классический, <br> с добавками, <br> с орехами
            </v-card-title>
          </v-card>
          <v-card class="custom-rounded ma-1 pa-3" elevation="1" color="#786e24" @click="routing('/allproducts')"
                  width="190px" height="120px" dark :img="require(`~/assets/images/cards/chai.jpg`)">
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Чай и травы
            </v-card-title>
          </v-card>
          <v-card class="custom-rounded ma-1 pa-3" elevation="1" color="#ae794b" @click="routing('/allproducts')"
                  width="480px" height="120px" dark :img="require(`~/assets/images/cards/cosmetics.png`)">
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Натуральная <br> косметика
            </v-card-title>
          </v-card>
          <v-card class="custom-rounded ma-1 pa-3" elevation="1" color="#cf8e0e" @click="routing('/allproducts')"
                  width="480px" height="120px" dark :img="require(`~/assets/images/cards/beeproduct.png`)">
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Пчелопродукция: <br> соты, перга, пыльца <br> забрус и т.д.
            </v-card-title>
          </v-card>
          <v-card class="custom-rounded ma-1 pa-3" elevation="1" color="#98806d" @click="routing('/allproducts')"
                  width="480px" height="120px" dark :img="require(`~/assets/images/cards/balzams.png`)">
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Бальзам, сиропы <br> масла
            </v-card-title>
          </v-card>

          <v-card class="custom-rounded ma-1 pa-3" elevation="1" @click="routing('/allproducts')"
                  style="background: linear-gradient(#1f3738, #5c6d6e)" width="190px" height="120px" dark >
            <v-card-title class="font-weight-medium" style="font-size: 16px">
              Смотреть <br> ещё товары
            </v-card-title>
          </v-card>
        </div>
      </v-container>
    </section>

    <section class="mt-5">
      <v-container>
        <v-card-title>Популярные товары</v-card-title>

        <!-- <pre v-text="items[0]['NameMainProduct']"></pre> -->
        <!-- <pre v-text="items[0]['ImageMainProduct']"></pre> -->
        <!-- <pre v-text="items[0]['Description']"></pre> -->
        <!-- <pre v-text="items[0]['weightproducts']"></pre> -->
        <!-- <pre v-text="items[0]['TittleMainCategory']"></pre> -->
        <!-- <pre v-text="items[0]['UniqueMainProductid']"></pre> -->
        <!-- <pre v-text="items[0]['Sostav']"></pre> -->
        <!-- <pre v-text="items[0]['Calories']"></pre> -->

        <div class="d-flex flex-row mt-4" v-if="isLoaded">
          <catalog-item-load v-for="i in limit" :key="i"/>
        </div>

        <div class="d-flex flex-row mt-4" v-else>
          <catalog-item v-for="(item, i) in items" :item="item" :key="i"/>
        </div>

      </v-container>
    </section>

    <section style="margin-top: 110px;">
      <v-container>
        <div class="d-flex flex-row">

          <div>

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


          <div style="width: 500px; height: 330px; position: relative; top: -40px;">
            <img class="d-block" style="width: 100%; height: 100%" alt="#" src="~assets/images/company.png">
          </div>

        </div>
      </v-container>
    </section>

    <section class="mt-6">
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
  items: any = []

  limit: number = 6
  activeSlide: number = 0
  countSlide: number = 2
  isLoaded: boolean = true

  async created () {
    return this.getCollections()
  }

  getCollections () {
    try {
      let count = 3
      let interval: any = setInterval (async () => {

        if (count <= 0 || this.items.length > 0) {
          this.isLoaded = false
          return clearInterval(interval)
        }

        count --
        return this.items = await this.$store.dispatch
        (
          'mainproducts/loadProducts',
          {
            store: this.$store,
            limitVal: this.limit
          }
        )
      }, 750)
    } catch (e: any) {
      console.log(e)
    }

    // return this.$store.getters['mainproducts/mainProducts'];
  }

  routing (link: string) {
    return this.$router.push(link)
  }
}
</script>

