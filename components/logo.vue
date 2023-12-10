<template>
  <div class="d-flex flex-row align-items-center justify-content-between">
    <a class="logo" href="/">
      <div class="logo-container d-flex flex-row align-items-center">
        <img class="logo-img" src="/img/logo.svg" alt="logo" title="logo"/>
        <div class="logo-delimiter"></div>
        <div class="logo-title">Семейный магазин
          <b>натуральных продуктов</b>
          пчеловодства с доставкой по РФ
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "Logo"
}
</script>
<style scoped>
.logo {
  text-decoration: none;
}

.logo-img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 12px;
}

.logo-delimiter {
  display: block;
  width: 2px;
  height: 50px;
  margin: 0 14px;
  background: var(--honey-light-brown);
}

.footerLogo .logo-delimiter {
  margin: 0 5px;
}

.logo-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: .1px;
  white-space: pre-line;
  color: var(--honey-dark-brown);
}

@media (max-width: 1199px) {
  .header-logo .logo-title {
    display: none;
  }

  .header-logo .logo-delimiter {
    display: none;
  }
}
</style>
