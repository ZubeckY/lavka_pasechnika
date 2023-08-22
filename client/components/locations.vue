<template>
  <div style="max-width: 290px">
    <div>
      <v-card-title class="mb-1" style="font-size: 18px;">До встречи в наших магазинах</v-card-title>
      <v-chip-group v-model="localMapping" active-class="white--text" column>
        <v-chip style="font-size: 13px; height: 28px"
                v-for="(item, i) in mapPoints"
                :key="i" :value="item.value"
                :color="localMapping === item.value ? '#37a164' : '#e0e0e0'">
          {{ item.text }}
        </v-chip>
      </v-chip-group>
    </div>

    <div class="mt-3" style="width: 280px">
      <v-carousel v-model="activeSlide" class="custom-rounded"
                  style="width: inherit"
                  height="210px"
                  hide-delimiters>
        <v-carousel-item v-for="(i) in countSlide" :key="i"
                         style="background: #e4e4e4">
        </v-carousel-item>
      </v-carousel>

      <div class="d-flex flex-column"
           style="position: relative; width: inherit; top: -60px">

        <!-- Слайды поменьше -->
        <small-slides :activeSlide="activeSlide"
                      :countSlide="countSlide"/>

        <!-- Адреса -->
        <v-card class="custom-rounded px-2 py-1 mx-auto"
                width="250px"
                height="60px"
                elevation="0"
                :img="require(`~/assets/images/bgmainhoneypattern.jpg`)">
          <v-card-subtitle style="font-size: 13px; line-height: 15px; letter-spacing: .1px; width: calc(100% - 20px); height: calc(100%)"
                           class="d-flex justify-center align-center font-weight-medium text-center white--text mx-auto">
            <div>{{ getAddress }}</div>
          </v-card-subtitle>
        </v-card>
      </div>

    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue, Prop, Watch} from "vue-property-decorator"
@Component
export default class Locations extends Vue {
  @Prop () mapping: any
  @Prop () mapPoints: any

  localMapping: any = ''
  activeSlide: number = 0
  countSlide: number = 3

  created () {
    this.localMapping = this.mapping
  }

  @Watch ('localMapping')
  changer () {
    this.$emit('changeMapping', this.localMapping)
  }

  get getAddress () {
    return this.mapPoints.filter((item: any) => item.value === this.localMapping)[0]?.address
  }

}
</script>
