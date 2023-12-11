<template>
  <header class="header header-mobile">
    <div class="header-container container">

      <a class="header-logo text-decoration-none" href="/">
        <img class="header-logo-img" src="/img/logo_mobile.svg" alt="logo mobile" title="logo mobile">
        <div class="header-logo-title">Лавка
          Пасечника
        </div>
      </a>

      <article class="headerUtility">
        <div class="headerUtility-container">
          <a class="headerUtility-notifications-link" href="#">
            <img class="headerUtility-notifications" src="/img/notifications.svg" alt="notifications" title="notifications">
          </a>
          <a class="headerUtility-personal-link" href="/profile-info">
            <img class="headerUtility-personal" src="/img/personal_mobile.svg" alt="personal" title="personal">
          </a>
        </div>
      </article>

      <div class="header-rounded"></div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderMobile"
}
</script>
<style scoped>
.header-mobile {
  display: none;
  background: url("/img/pattern.webp") center repeat;
}

.header-container {
  position: relative;
  display: flex;
  height: 140px;
  align-items: center;
  justify-content: space-between;
}

.header-rounded {
  position: absolute;
  left: 0;
  bottom: -20px;
  width: 100%;
  height: 40px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  background: var(--honey-background);
}


.header-logo {
  display: flex;
  align-items: center;
}


.header-logo-title {
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  white-space: pre-line;
  margin-left: 10px;
  text-transform: uppercase;
}

.headerUtility-container {
  display: flex;
}

.header-logo-img,
.headerUtility-personal,
.headerUtility-notifications {
  display: block;
  width: 47px;
  height: 47px;
}

.headerUtility-notifications {
  margin-right: 10px;
}

@media (max-width: 1024px) {
  .header-mobile {
    display: block;
  }
}
</style>
