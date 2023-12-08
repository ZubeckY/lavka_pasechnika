<template>
  <div>
    <header-desktop/>
    <header-mobile/>
  </div>
</template>
<script>
import HeaderDesktop from '~/components/header/desktop.vue'
import HeaderMobile from '~/components/header/mobile.vue'
  export default {
    name: "HeaderMain",
    components: {
      HeaderDesktop,
      HeaderMobile
    }
  }
</script>
