<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <div class="d-flex justify-center align-center" style="width: 100%; height: 100vh;">
          <v-card class="pa-3" elevation="0">

            <div v-if="error.statusCode === 404">
              <h1 style="font-size: 40px" class="text-center">{{ error.statusCode }}</h1>
              <p style="font-size: 20px" class="text-center mb-1">{{ pageNotFound }}</p>
            </div>

            <div v-else>
              <h1 style="font-size: 40px" class="text-center">{{ otherError }}</h1>
              <p>{{error.message}}</p>
            </div>

            <div class="d-flex justify-center">
              <NuxtLink to="/">Вернуться на главную</NuxtLink>
            </div>

          </v-card>
        </div>
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
  data () {
    return {
      pageNotFound: 'Страница не найдена',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
