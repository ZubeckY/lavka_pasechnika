<template>
  <v-card class="product-card rounded-xl mr-3"
          style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)"
          width="180px" height="325px">
    <div class="product-card__container">
      <v-img class="rounded-xl" width="160px" height="160px"
             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI2kCrO5vzXnkiGZyI4hLoBY-FaUYe-iQRPg&usqp=CAU" alt="#"></v-img>

      <v-card-title class="product-card__title mt-3">Мёд золотарник</v-card-title>

      <div class="product-card__variables d-flex flex-row overflow-x-auto my-2">
        <v-card v-for="i in 5" :key="i"
                class="product-card__variables_card d-flex flex-column justify-center align-center rounded-xl mr-2"
                min-width="85px" min-height="56px" elevation="0">
          <v-card-subtitle class="text-center font-weight-bold" style="color:#000;">
            <span>130</span>
            <span>мл.</span>
          </v-card-subtitle>

          <v-card-text class="text-center ml-2" style="font-size: 13px">
            <span>180</span>
            <v-icon style="position:relative; left: -5px;" class="ma-0 pa-0" x-small>mdi-currency-rub</v-icon>
          </v-card-text>
        </v-card>
      </div>

      <v-btn class="text-none font-weight-bold" height="40px"
             style="border-radius: 8px" color="white" elevation="0" block>
        Выбрать
      </v-btn>

    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class CatalogItem extends Vue {

}
</script>
