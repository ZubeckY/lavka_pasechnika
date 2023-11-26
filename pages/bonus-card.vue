<template>
  <div>
    <div v-if="isUser">Бонусы</div>
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
export default class BonusCard extends Vue {
  @Inject() user!: any;

  get isUser () {
    return this.user?.id
  }
}
</script>
