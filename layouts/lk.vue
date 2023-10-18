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
                <v-card-title class="ml-3">Личный кабинет — {{whatIsPape }} </v-card-title>
              </div>

              <div class="d-flex flex-row">
                <v-card class="d-flex align-center custom-rounded"
                        elevation="0" width="200px" height="295px">

                  <v-list width="inherit" dense rounded>
                    <v-list-item-group v-model="model" mandatory
                                       active-class="my-green-color white--text">

                      <v-list-item v-for="(item, i) in items"
                                   :key="i" router
                                   :to="item.link">
                        <v-list-item-icon class="mr-2">
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content style="font-size: 14px; line-height: 14px"
                                             class="font-weight-medium" v-text="item.text"/>
                      </v-list-item>

                    </v-list-item-group>
                  </v-list>
                </v-card>

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
import getBusketFromLocalStorage from "~/assets/scripts/getBusketFromLocalStorage";
@Component
export default class Lk extends Vue {
  model: number = 0
  items: any = [
    {
      icon: 'mdi-chart-donut',
      title: 'Главная',
      text: 'Главная',
      link: '/lk'
    },
    {
      icon: 'mdi-history',
      title: 'Мои заказы',
      text: 'Мои заказы',
      link: '/myorders'
    },
    {
      icon: 'mdi-cart-outline',
      title: 'Моя корзина',
      text: 'Моя корзина',
      link: '/mybusket'
    },
    {
      icon: 'mdi-star-outline',
      title: 'Бонусные баллы',
      text: 'Бонусные баллы',
      link: '/bonuscard'
    },
    {
      icon: 'mdi-moped-outline',
      title: 'Адрес доставки',
      text: 'Адрес доставки и личные данные',
      link: '/adress-delivery'
    },
    {
      icon: 'mdi-exit-to-app',
      title: 'Выход',
      text: 'Выход',
      link: '/?logout=true'
    },
  ]

  created () {
    this.getBusket ()
    // console.log(this.$cookies.get('auth'))
  }

  getBusket () {
    let data = getBusketFromLocalStorage()
    this.$store.dispatch ('busket/initList', data)
  }

  @Watch('$route')
  changeScrollTo () {
    window.scrollTo ({
      top: 0,
      left: 0
    })
  }

  get whatIsPape () {
    return this.items[this.model]['title']
  }
}
</script>
