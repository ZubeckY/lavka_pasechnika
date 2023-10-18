<template>
  <div @click="$emit('click')" class="d-flex flex-row align-center">
    <div style="width: 60px; height: 60px">
      <img class="d-block" style="width: 100%; height: 100%;" alt="#" src="~../assets/images/LOGO_ЛАВКА.jpg">
    </div>

    <div style="width: 1px; height: 50px; background: #a79185; margin: 0 7px"></div>

    <div class="d-flex flex-column" style="font-size: 12px; line-height: 13px; color: #4e2915 !important">
      <div class="font-weight-medium">Семейный магазин</div>
      <div class="font-weight-bold">натуральных продуктов</div>
      <div class="font-weight-medium">пчеловодства с доставкой по РФ</div>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Vue} from "vue-property-decorator"
@Component
export default class Logo extends Vue {
}
</script>
