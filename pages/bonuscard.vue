<template>
  <div>
    <div v-if="user.id">Бонусы</div>
    <div v-else class="d-flex justify-center align-center" style="width: 60vw; max-width: 950px; height: 50vh">
      <gotoauthbutton/>
    </div>
  </div>
</template>
<script lang="ts">
import {Component, Inject, Vue} from "vue-property-decorator"

@Component({
  layout: 'lk'
})
export default class Bonuscard extends Vue {
  @Inject() user!: any;
}
</script>
