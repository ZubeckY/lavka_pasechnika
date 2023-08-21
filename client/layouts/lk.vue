<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-card class="d-flex flex-column" elevation="0" height="100%" color="#fef6f2">
          <header-desktop/>

          <div style="flex: 1 1 auto;">
            <v-container>

              <div class="d-flex flex-row my-5" style="position:relative; left: -10px;">
                <v-btn style="border-radius: 8px" @click="$router.push('/')"
                       width="44px" height="44px" min-width="0"
                       color="#26ae60" elevation="0" dark>
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>

                <v-card-title class="ml-3">Личный кабинет — Главная</v-card-title>
              </div>


              <div class="d-flex flex-row">
                <div>

                  <v-card class="d-flex align-center custom-rounded"
                          width="200px" height="295px">
                    <v-list dense width="inherit">
                      <v-list-item-group v-model="model"
                                         active-class="my-green-color white--text">

                        <v-list-item v-for="(item, i) in items" :key="i">
                          <v-list-item-icon class="mr-2">
                            <v-icon v-text="item.icon"></v-icon>
                          </v-list-item-icon>
                          <v-list-item-content class="font-weight-medium">
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                        <v-list-item>
                          <v-list-item-icon class="mr-2">
                            <v-icon>mdi-exit-to-app</v-icon>
                          </v-list-item-icon>
                          <v-list-item-content class="font-weight-medium">
                            <v-list-item-title>Выход</v-list-item-title>
                          </v-list-item-content>
                        </v-list-item>

                      </v-list-item-group>
                    </v-list>
                  </v-card>
                </div>

                <div class="ml-6 mr-2">
                  <v-fade-transition>
                    <nuxt/>
                  </v-fade-transition>
                </div>

              </div>
            </v-container>
          </div>

          <main-footer/>
        </v-card>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
@Component
export default class Lk extends Vue {
  model: number = 0
  items: any = [
    {
      icon: 'mdi-chart-donut',
      text: 'Главная',
    },
    {
      icon: 'mdi-history',
      text: 'Мои заказы',
    },
    {
      icon: 'mdi-cart-outline',
      text: 'Моя корзина',
    },
    {
      icon: 'mdi-star-outline',
      text: 'Бонусные баллы',
    },
    {
      icon: 'mdi-moped-outline',
      text: 'Адреса доставки и личные данные',
    },
  ]


  @Watch('$route')
  changeScrollTo () {
    window.scrollTo ({
      top: 0,
      left: 0
    })
  }

  cartDialog: boolean = false
}
</script>

<style scoped>
.v-application .my-green-color {
  background-color: #26ae60 !important;
  border-color: #26ae60 !important;
}
</style>
