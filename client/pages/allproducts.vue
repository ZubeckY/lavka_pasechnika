<template>
  <section>
    <v-container>

      <div class="d-flex flex-row justify-space-between my-5" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px" @click="$router.push('/')"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-card-title class="ml-3">Все товары</v-card-title>

        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>

      <div v-if="isLoaded" class="d-flex flex-row flex-wrap">

        <div class="d-flex flex-row mb-7" style="width: 100%">
          <v-skeleton-loader class="mx-1" type="chip" v-for="i in 7" :key="i"/>
        </div>

        <catalog-item-load v-for="i in limit" :key="i"/>
      </div>

      <div v-else class="d-flex flex-row flex-wrap">
        <v-chip-group class="mb-5" v-model="category" active-class="white--text" column>
          <v-chip style="font-size: 12px; height: 28px"
                  v-for="(item, i) in categories"
                  :key="i" :value="item.value"
                  :color="category === item.value ? '#37a164' : 'white'">
            {{ item.text }}
          </v-chip>
        </v-chip-group>

        <catalog-item v-for="(item, i) in items" :item="item" :key="i"/>
      </div>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Allproducts extends Vue {
  items: any = []
  limit: number = 100
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

  async created () {
    return this.getCollections()
  }

  getCollections () {
    try {
      let count = 3
      let interval: any = setInterval (async () => {

        if (count <= 0 || this.items.length > 0) {
          this.isLoaded = false
          return clearInterval(interval)
        }

        count --
        return this.items = await this.$store.dispatch
        (
          'mainproducts/loadProducts',
          {
            store: this.$store,
            limitVal: this.limit
          }
        )
      }, 750)
    } catch (e: any) {
      console.log(e)
    }
  }
}
</script>
