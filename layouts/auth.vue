<template>
  <v-app>
    <v-main>
      <v-fade-transition>

        <v-card class="d-flex justify-center align-center" elevation="0" height="90vh">
          <v-card class="custom-rounded" width="100%" max-width="360px" elevation="5">

            <div class="d-flex justify-center">
              <div class="mt-3 mx-auto" style="width: 160px; height: 160px">
                <img class="d-block" style="width: 100%; height: 100%;"
                     alt="#" src="~../assets/images/LOGO_ЛАВКА.jpg">
              </div>
            </div>

            <div class="px-4 mt-4 mb-1">
              <v-fade-transition>
                <nuxt/>
              </v-fade-transition>
            </div>

          </v-card>
        </v-card>

      </v-fade-transition>

    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Vue, Component, Watch} from 'vue-property-decorator'

@Component
export default class Auth extends Vue {
}
</script>
