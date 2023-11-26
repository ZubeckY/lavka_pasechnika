<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-card class="d-flex flex-column" elevation="0" height="100%" color="#fef6f2">
          <header-desktop/>

          <div style="flex: 1 1 auto;">
            <v-container>

              <div class="d-flex flex-row my-5" style="position:relative; left: -10px;">
                <button-back/>
                <v-card-title class="ml-3">Личный кабинет — {{ whatIsPape }}</v-card-title>
              </div>

              <div class="d-flex flex-row">
                <v-card class="d-flex align-center custom-rounded" elevation="0" width="200px" height="100%">
                  <v-list style="border-radius: 15px !important" width="inherit" dense rounded>
                    <v-list-item-group v-model="model" active-class="my-green-color white--text" mandatory>
                      <v-list-item v-for="(item, i) in items" :key="'lk-router-item-'+i" :to="item.link"
                                   v-if="getCondition(item)" :href="item.href" :target="item.target" router>
                        <v-list-item-icon class="mr-2">
                          <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content class="font-weight-medium" style="font-size: 14px; line-height: 14px" v-text="item.text"/>
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
import {Component, Provide, Vue, Watch} from "vue-property-decorator"

@Component
export default class Lk extends Vue {
  @Provide() user: any = {
    // id: 1,
    // isAdmin: true,
    // address: 'Адрес, город, улица, дом, индекс'
  }

  model: number = 0
  items: any = [
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
      icon: 'mdi-chart-donut',
      title: 'Админ панель',
      text: 'Админ панель',
      link: '',
      href: process.env.API_ADMIN_LINK,
      target: '_blank',
      role: 'admin',
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
      link: '/profile-info'
    },
    {
      icon: 'mdi-exit-to-app',
      title: 'Выход',
      text: 'Выход',
      link: '/?logout=true',
      role: 'is_login'
    },
  ]

  getCondition(item: any) {
    switch (item.role){
      case 'admin':
        return this.user.isAdmin
      case 'is_login':
        return this.user.id
      default:
        return true
    }
  }

  @Watch('$route')
  changeScrollTo() {
    window.scrollTo({
      top: 0, left: 0
    })
  }

  get whatIsPape() {
    return this.items[this.model]['title']
  }
}
</script>
