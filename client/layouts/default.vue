<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-card class="d-flex flex-column" elevation="0" height="100%" color="#fef6f2">
          <header-desktop/>

          <div style="flex: 1 1 auto;">
            <v-fade-transition>
              <nuxt/>
            </v-fade-transition>
          </div>

          <v-fab-transition>
            <v-btn class="custom-rounded"
                   fixed dark bottom right
                   elevation="0" color="#26ae60"
                   width="60px" height="60px"
                   @click="cartDialog = !cartDialog">
              <v-icon>mdi-cart-variant</v-icon>
            </v-btn>
          </v-fab-transition>

          <v-overlay v-model="cartDialog" :dark="false">
            <v-card class="d-flex justify-end align-end"
                    color="transparent" width="100vw" height="100vh">
              <v-card class="mb-4 mr-7" width="500px" height="auto" light>
                <v-card-title class="pa-2">Корзина</v-card-title>
                <v-divider></v-divider>

                <div class="ma-2">корзина</div>

                <v-card-actions class="pa-0">
                  <v-btn width="88%" height="60px" class="rounded-0" color="#26ae60" dark
                         @click="cartDialog = false">
                    Оформить заказ
                  </v-btn>
                  <v-btn color="primary" text icon
                         @click="cartDialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-card>
          </v-overlay>

          <main-footer/>
        </v-card>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"
@Component
export default class Default extends Vue {
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
