<template>
  <div>
    <footer-desktop/>
    <footer-mobile/>
  </div>
</template>
<script>
import FooterDesktop from "./desktop.vue";
import FooterMobile from "./mobile.vue";
export default {
  name: "FooterMain",
  components: {FooterMobile, FooterDesktop}
}
</script>
