<template>
  <v-card color="transparent" elevation="0" min-height="60px" style="width: 50%">
    <div class="d-flex">
      <div class="mx-2" style="width: 50px; height: 50px">
        <img class="d-block" width="100%" height="100%" :src="advantage['icon']" alt="#">
      </div>

      <div class="d-flex align-center font-weight-light" style="height: inherit; width: calc(100% - 80px); font-size: 14px; line-height: 14px">
        <div>{{ advantage['title'] }}</div>
      </div>
    </div>
  </v-card>
</template>
<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator"
@Component
export default class AdvantageCard extends Vue {
  @Prop () advantage!: any
}
</script>

