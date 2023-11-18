<template>
  <section>
    <v-container>
      <div class="d-flex flex-row justify-space-between my-5" style="position:relative; left: -10px;">
        <button-back/>
        <v-card-title class="ml-3">Акции</v-card-title>
        <v-btn icon>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>

      <div v-if="isLoaded" class="d-flex flex-row flex-wrap">
        <div class="d-flex flex-row flex-wrap mb-7" style="width: 100%">
          <v-skeleton-loader v-for="i in 15" :key="i" class="mx-1 mb-2" style="border-radius: 15px" type="image"
                             :width="(i % 3 == 0) ? 85 + 'px' : (i % 5 == 0) ? 120 + 'px' : 70 + 'px'" height="28px"/>
        </div>
        <catalog-item-load v-for="i in limit" :key="i"/>
      </div>

      <div v-else>
        <div class="d-flex flex-row flex-wrap">
          <v-chip-group class="mb-5" v-model="category" active-class="white--text" column mandatory>
            <v-chip v-for="(item, i) in categories" :key="i" :value="item.id"
                    :color="category === item.id ? '#37a164' : 'white'" style="font-size: 12px; height: 28px">
              {{ item.title }}
            </v-chip>
          </v-chip-group>
        </div>

        <div class="d-flex flex-row flex-wrap">
          <catalog-item v-for="(item, i) in items" :item="item" :key="i"/>
        </div>
      </div>

    </v-container>
  </section>
</template>
<script lang="ts">
import {Component, Vue, Watch} from "vue-property-decorator"

@Component
export default class Stockssale extends Vue {
  items: any = []
  limit: number = 100
  isLoaded: boolean = true
  category: number = 0
  categories: any = []

  async created() {
    try {
      await this.getCategories()
      await this.getCollections(null)
    } catch (e) {
      console.log(e)
    } finally {
      this.isLoaded = false
    }
  }

  async getCategories() {
    await this.$axios.get('/api-products/category/')
      .then((data: any) => {
        this.categories.push({id: 0, title: 'Все'})
        this.categories.push(...data.data.results)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  async getCollections(query: string | null) {
    await this.$axios.get(`/api-products/product/${query ? query : ''}`)
      .then((data: any) => {
        this.items = data.data.results
      })
      .catch((e) => {
        console.log(e)
      })
  }

  @Watch('category')
  async filterCategories() {
    await this.getCollections(this.category != 0 ? '?categories=' + this.category : null)
  }
}
</script>
