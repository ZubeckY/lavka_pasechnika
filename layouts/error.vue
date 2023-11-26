<template>
  <v-app>
    <v-main>
      <v-fade-transition>

        <v-card class="d-flex justify-center align-center" elevation="0" height="80vh">
          <v-card class="custom-rounded" width="100%" max-width="660px" elevation="0">

            <div class="d-flex justify-center">
              <div>
                <div class="mt-3 mx-auto" style="width: 160px; height: 160px">
                  <img class="d-block" style="width: 100%; height: 100%;"
                       alt="#" src="~../assets/images/LOGO_ЛАВКА.jpg">
                </div>

              </div>
            </div>

            <div class="px-4 mb-1">
              <div v-if="error.statusCode === 404">
                <h1 style="font-size: 40px" class="text-center">{{ error.statusCode }}</h1>
                <p style="font-size: 20px" class="text-center mb-1">{{ pageNotFound }}</p>
              </div>

              <div v-else>
                <h1 style="font-size: 40px" class="text-center">{{ otherError }}</h1>
                <p>{{ error.message }}</p>
              </div>

              <div class="d-flex justify-center">
                <NuxtLink to="/" class="blue--text">Вернуться на главную</NuxtLink>
              </div>
            </div>

          </v-card>
        </v-card>

      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'EmptyLayout',
  layout: 'default',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'Страница не найдена',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
