<template>
  <section>
    <v-container>

      <div class="d-flex flex-row mt-5 mb-10" style="position:relative; left: -10px;">
        <v-btn style="border-radius: 8px"
               width="44px" height="44px" min-width="0"
               color="#26ae60" elevation="0" dark>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-card-title class="ml-3">Контакты</v-card-title>
      </div>

      <v-row class="mb-5">
        <v-col class="ma-0 pa-0" cols="auto">
          <iframe :src="getMapURL"
                  frameborder="0"
                  border-radius="8px"
                  allowfullscreen="true"
                  width="860" height="345"
                  style="position: relative;">
          </iframe>
        </v-col>
        <v-col class="ma-0 pa-0" cols="3">
          <div class="pl-9">
            <v-card-title class="mb-1" style="font-size: 18px;">До встречи в наших магазинах</v-card-title>
            <v-chip-group v-model="mapping" active-class="white--text" column>
              <v-chip style="font-size: 13px; height: 28px"
                      v-for="(item, i) in mapPoints"
                      :key="i" :value="item.value"
                      :color="mapping === item.value ? '#37a164' : '#e0e0e0'">
                {{ item.text }}
              </v-chip>
            </v-chip-group>
          </div>
        </v-col>
      </v-row>

    </v-container>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Contacts extends Vue {
  mapping: any = "goryachiy-klyuch"

  mapPoints: any = [
    {
      text: 'Горячий Ключ',
      value: 'goryachiy-klyuch',
      map: 'https://yandex.ru/map-widget/v1/?from=tabbar&ll=39.100062%2C44.629602&mode=search&oid=112646265113&ol=biz&sll=39.100062%2C44.629600&source=serp_navig&text=%D0%BB%D0%B0%D0%B2%D0%BA%D0%B0%20%D0%BF%D0%B0%D1%81%D0%B5%D1%87%D0%BD%D0%B8%D0%BA%D0%B0&z=14',
      address: 'Краснодарский край, городской округ Горячий Ключ, М-4 Дон, 1390-й километр, 1',
      img: [
        {
          src: ''
        },
        {
          src: ''
        },
        {
          src: ''
        },
      ]
    },
    {
      text: 'Ростов-на-Дону',
      value: 'rostov-on-don',
      map: 'https://yandex.ru/map-widget/v1/?from=tabbar&ll=39.734367%2C47.221876&mode=search&oid=43527846651&ol=biz&sctx=ZAAAAAgBEAAaKAoSCSmXxi%2B8jENAEYO%2FX8yWUEZAEhIJkUPEzalkvD8RO%2BKQDaSLrT8iBgABAgMEBSgKOABAh80GSAFqAnJ1nQHNzEw9oAEAqAEAvQH415k%2FwgEG%2B%2FXYk6IB6gEA8gEA%2BAEAggIq0LvQsNCy0LrQsCDQv9Cw0YHQtdGH0L3QuNC60LAg0YDQvtGB0YLQvtCyigIAkgIFMTA4MziaAgxkZXNrdG9wLW1hcHM%3D&sll=39.734367%2C47.221876&source=serp_navig&sspn=0.134668%2C0.066846&text=%D0%BB%D0%B0%D0%B2%D0%BA%D0%B0%20%D0%BF%D0%B0%D1%81%D0%B5%D1%87%D0%BD%D0%B8%D0%BA%D0%B0%20%D1%80%D0%BE%D1%81%D1%82%D0%BE%D0%B2&z=13.39',
      address: 'Ростов-на-Дону, Большая Садовая ул, 188А',
      img: [
        {
          src: ''
        },
        {
          src: ''
        },
        {
          src: ''
        },
      ]
    },
    {
      text: 'Архипо-Осиповка',
      value: 'arkhipo-osipovka',
      map: 'https://yandex.ru/map-widget/v1/?from=tabbar&ll=38.530217%2C44.358538&mode=search&sll=38.528401%2C44.358383&source=serp_navig&text=44.358383%2C38.528401&z=17.44',
      address: 'Архипо-Осиповка',
      img: [
        {
          src: ''
        },
      ]
    }
  ]

  get getMapURL () {
    return this.mapPoints.filter((item: any) => item.value === this.mapping)[0]?.map
  }

  get getAddress () {
    return this.mapPoints.filter((item: any) => item.value === this.mapping)[0]?.address
  }

}
</script>
