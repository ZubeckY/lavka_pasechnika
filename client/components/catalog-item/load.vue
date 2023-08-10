<template>
  <v-card class="product-card rounded-xl mr-3"
          style="box-shadow: 0 0 18px 7px rgba(34, 60, 80, .1)"
          width="180px" height="325px">
    <div class="product-card__container">
      <v-skeleton-loader class="rounded-xl"
                         width="160px"
                         height="160px"
                         type="image"/>

      <v-skeleton-loader class="mt-2"
                         width="160px"
                         height="20px"
                         type="image"/>

      <div class="product-card__variables d-flex flex-row overflow-x-auto my-2">
        <v-card v-for="i in 5" :key="i"
                class="product-card__variables_card d-flex flex-column justify-center align-center rounded-xl mr-2"
                min-width="85px" min-height="56px" elevation="0">
          <v-skeleton-loader class="rounded-xl"
                             width="85px"
                             height="56px"
                             elevation="0"
                             type="image"/>
        </v-card>
      </div>

      <v-skeleton-loader width="160px"
                         height="40px"
                         type="image"
                         style="border-radius: 8px"/>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class CatalogItem extends Vue {}
</script>
