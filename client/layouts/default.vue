<template>
  <v-app>
    <v-main>
      <v-fade-transition>
        <v-card class="d-flex flex-column" elevation="0" height="100%" color="#fef6f2">
          <main-header/>

          <div style="flex: 1 1 auto;">
            <v-fade-transition>
              <nuxt/>
            </v-fade-transition>
          </div>

          <main-footer/>
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
