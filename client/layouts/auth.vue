<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-container>
          <div style="width: 60px; height: 60px">
            <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~../assets/images/LOGO_ЛАВКА.jpg">
          </div>

          <v-btn-toggle v-model="authMode" color="black"
                        dense tile group mandatory>
            <v-btn class="auth-button text-none" value="autentification">Войти</v-btn>
            <v-btn class="auth-button text-none" value="registration">Регистрация</v-btn>
          </v-btn-toggle>

          <div>
            <v-fade-transition>
              <nuxt/>
            </v-fade-transition>
          </div>

        </v-container>
      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'
@Component
export default class Auth extends Vue {
  authMode: string = "login"

  @Watch ("authMode")
  changeAuthLocation (value: string) {
    this.$router.push(value)
  }
}
</script>
<style>
.auth-button.v-btn::before {
  background-color: transparent !important;
}
</style>
