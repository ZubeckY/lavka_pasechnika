<template>
  <!-- Слайды поменьше -->
  <v-sheet class="d-flex justify-center" color="transparent">
    <v-slide-group v-model="activeSlide" center-active show-arrows>
      <v-slide-item v-for="i in countSlide" :key="i" v-slot="{ active, toggle }">

        <!-- Картинки -->
        <v-card class="custom-rounded ml-0 mt-2 ma-3"
                elevation="0"
                height="4px" @click="toggle"
                :color="active ? '#26ae60' : '#9e9e9e'"
                :width="active ? '34px' : '18px'">
        </v-card>

      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>
<script lang="ts">
import {Component, Vue, Prop} from "vue-property-decorator"
@Component
export default class SmallSlides extends Vue {
  @Prop () activeSlide: any
  @Prop () countSlide: any
}
</script>
