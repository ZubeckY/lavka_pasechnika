<template>
  <v-card color="transparent"
          elevation="0"
          min-height="60px"
          style="width: 50%">
    <div class="d-flex">

      <v-skeleton-loader class="mx-2" type="avatar" width="50px" height="50px"></v-skeleton-loader>
      <v-skeleton-loader class="mt-2" type="paragraph" width="calc(100% - 80px)" height="30px"></v-skeleton-loader>

    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
@Component
export default class Load extends Vue {}
</script>

