<template>
  <v-app>
    <v-main>
      <v-fade-transition>

        <v-card elevation="0" height="100%" color="#fef6f2">
          <main-header/>

          <v-fade-transition>
            <nuxt/>
          </v-fade-transition>
        </v-card>

      </v-fade-transition>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Default extends Vue {
}
</script>
