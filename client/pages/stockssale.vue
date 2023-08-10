<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="$router.push('/')"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-card-title class="ml-3">Акции</v-card-title>

        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>

      <div v-if="isLoaded" class="d-flex flex-row flex-wrap">

        <div class="d-flex flex-row mb-7" style="width: 100%">
          <v-skeleton-loader class="mx-1" type="chip" v-for="i in 7" :key="i"/>
        </div>

        <catalog-item-load v-for="i in 12" :key="i"/>
      </div>

      <div v-else class="d-flex flex-row flex-wrap">
        <v-chip-group class="mb-5" v-model="category" active-class="white--text" column>
          <v-chip style="font-size: 13px; height: 28px"
                  v-for="(item, i) in categories"
                  :key="i" :value="item.value"
                  :color="category === item.value ? '#37a164' : 'transparent'">
            {{ item.text }}
          </v-chip>
        </v-chip-group>

        <catalog-item v-for="i in 6" :key="i"></catalog-item>
      </div>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Stockssale extends Vue {
  isLoaded: boolean = true
  category: string = "all"
  categories: any = [
    {
      text: 'Настои',
      value: 'infusions'
    },
    {
      text: 'Все',
      value: 'all'
    },
    {
      text: 'Шампуни',
      value: 'shampoo'
    },
    {
      text: 'Классический мёд',
      value: 'classic'
    },
    {
      text: 'Зубная паста',
      value: 'toothpaste'
    },
    {
      text: 'Крем-мёд',
      value: 'cream'
    },
    {
      text: 'Бальзамы',
      value: 'balsam'
    },
    {
      text: 'Мёд с добавками',
      value: 'withAdditives'
    },
    {
      text: 'Джаре',
      value: 'dragee'
    },
    {
      text: 'Сиропы',
      value: 'syrup'
    },
    {
      text: 'Чай',
      value: 'tea'
    },
    {
      text: 'Травы',
      value: 'herbs'
    },
    {
      text: 'Масла',
      value: 'oils'
    },
    {
      text: 'Мёд с орехами',
      value: 'withNuts'
    },
    {
      text: 'Кисели',
      value: 'kissels'
    },
  ]

  created () {
    setTimeout(() => {
      this.isLoaded = false
    }, 1000)
  }
}
</script>
