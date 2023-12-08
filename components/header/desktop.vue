<template>
  <header class="header header-desktop">
    <v-container class="header-container container">

      <div class="header-wrapper d-flex flex-row align-center justify-space-between">
        <a class="logo" href="/">
          <div class="logo-container d-flex flex-row align-center">
            <img class="logo-img" src="/img/logo.svg" alt="logo" title="logo"/>
            <div class="logo-delimiter"></div>
            <div class="logo-title">Семейный магазин
              <b>натуральных продуктов</b>
              пчеловодства с доставкой по РФ
            </div>
          </div>
        </a>

        <article class="menu">
          <div class="menu-container">
            <button class="menu-btn">
              <span class="menu-btn-container">
                <span class="menu-btn-lines">
                  <span class="menu-btn-line" v-for="i in 3" :key="'menu-line-'+i"></span>
                </span>
                <span class="menu-btn-title">Меню</span>
              </span>
            </button>
          </div>
        </article>

        <article class="rating">
          <div class="rating-container d-flex">
            <img class="rating-flag" src="/img/rating_flag.svg" alt="rating flag" title="rating flag"/>
            <div class="rating-info">
              <div class="rating-stars d-flex">
                <img v-for="i in 5" :key="'rating-star'-+i" class="rating-star"
                     src="/img/rating_star.svg" alt="rating-star" title="rating-star"/>
              </div>
              <div class="rating-title">Рейтинг в Яндекс и 2Гис
                на основе более 1000 отзывов
              </div>
            </div>
          </div>
        </article>

        <article class="downloadNow">
          <div class="downloadNow-container">
            <div class="downloadNow-title">Скачать приложение</div>
            <div class="downloadNow-icons">
              <a class="downloadNow-icon-link" href="#">
                <img class="downloadNow-icon" src="/img/app_store.svg" alt="app-store" title="app-store">
              </a>
              <a class="downloadNow-icon-link" href="#">
                <img class="downloadNow-icon" src="/img/google_play.svg" alt="google-play" title="google-play">
              </a>
            </div>
          </div>
        </article>

        <article class="sendMessageUs">
          <div class="sendMessageUs-container">
            <div class="sendMessageUs-title">Написать на прямую:</div>
            <div class="sendMessageUs-icons">
              <a class="sendMessageUs-icon-link" href="">
                <img class="sendMessageUs-icon" src="/img/vk.svg" alt="vk" title="vk">
              </a>
              <a class="sendMessageUs-icon-link" href="">
                <img class="sendMessageUs-icon" src="/img/instagram.svg" alt="instagram" title="instagram">
              </a>
              <a class="sendMessageUs-icon-link" href="">
                <img class="sendMessageUs-icon" src="/img/whatsapp.svg" alt="whatsapp" title="whatsapp">
              </a>
            </div>
          </div>
        </article>

        <article class="lk">
          <div class="lk-container">
            <button class="lk-btn">
              <span class="lk-btn-container">
                <img class="lk-btn-logo" src="/img/personal.svg" alt="#" title="#">
                <span>Личный кабинет</span>
              </span>
            </button>
          </div>
        </article>

        <article class="call">
          <div class="call-container">
            <div class="call-word-days d-flex align-center">
              <video class="call-word-animation" height="20px" autoplay muted loop>
                <source src="/img/call_dot.webm">
              </video>
              <div class="call-word-days__days">Пн-Вск 7:00 - 21:00</div>
            </div>
            <div class="call-phone">
              <a class="text-decoration-none" href="tel:+7 (800) 200-05-64">+7 (800) 200-05-64</a>
            </div>
          </div>
        </article>
      </div>

      <nav class="nav mt-0">
        <div class="d-flex flex-row justify-space-between navbar-nav">
          <nuxt-link class="nav-link-styles nav-link" :to="link.href" v-for="(link, i) in links"
                     :key="'header-links-'+i">
            {{ link.value }}
          </nuxt-link>
        </div>
      </nav>

    </v-container>
  </header>
</template>
<script>
export default {
  name: "HeaderDesktop",
  data: () => ({
    links: [
      {
        href: '/',
        value: 'Главная',
      },
      {
        href: '/catalog',
        value: 'Каталог',
      },
      {
        href: '',
        value: 'Условия доставки и оплаты',
      },
      {
        href: '/stockssale',
        value: 'Акции',
      },
      {
        href: '',
        value: 'О магазине',
      },
      {
        href: '',
        value: 'Отзывы',
      },
      {
        href: '/contacts',
        value: 'Контакты и адреса',
      }
    ]
  })
}
</script>
<style scoped>
.header-container {
  padding-bottom: 5px;
  border-bottom: 1px solid #E0E3E7;
}

.header-wrapper {
  height: 100px;
}

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

.logo-title {
  font-size: 12px;
  font-weight: 500;
  line-height: 13px;
  letter-spacing: .1px;
  white-space: pre-line;
  color: var(--honey-dark-brown);
}

.menu-btn-lines {
  display: block;
}

.menu-btn-line {
  display: block;
  width: 35px;
  height: 4px;
  border-radius: 2px;
  background: var(--honey-dark-brown);
}

.menu-btn-line + .menu-btn-line {
  margin-top: 4px;
}

.menu-btn-title {
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--honey-dark-brown);
}

.rating {
  position: relative;
  bottom: 20px;
}

.rating-info {
  display: flex;
  height: 65px;
  margin-left: 15px;
  flex-direction: column;
  justify-content: flex-end;
}

.rating-star {
  display: block;
  width: 18px;
  height: 18px;
}

.rating-star + .rating-star {
  margin-left: 5px;
}

.rating-flag {
  display: block;
  width: 45px;
  height: 65px;
}

.rating-title {
  font-size: 10px;
  margin-top: 1px;
  font-weight: 400;
  line-height: 10px;
  white-space: pre-line;
  color: var(--honey-secondary);
}

.downloadNow-title {
  position: relative;
  font-size: 10px;
  font-weight: 400;
  color: var(--honey-secondary);
}

.downloadNow-title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 1px;
  border-bottom: 2.4px dashed var(--honey-golden);
}

.downloadNow-icons {
  display: flex;
  padding-top: 5px;
  flex-direction: row;
  justify-content: center;
}

.downloadNow-icon {
  display: block;
  width: 27px;
  height: 27px;
}

.downloadNow-icon-link + .downloadNow-icon-link {
  margin-left: 10px;
}

.sendMessageUs-title {
  font-size: 10px;
  font-weight: 400;
  color: var(--honey-secondary);
}

.sendMessageUs-icon {
  width: 27px;
  height: 27px;
  margin-top: 3px;
}

.lk-btn {
  padding: 0;
  width: 150px;
  height: 30px;
  color: white;
  font-size: 12px;
  border-radius: 8px;
  background: var(--honey-primary);
}

.lk-btn-container {
  display: flex;
  width: 78%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}

.lk-btn-logo {
  width: 13px;
  height: 13px;
  filter: invert(1);
}

.nav-link-styles {
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  color: var(--honey-secondary);
}

.call-word-days {
  justify-content: flex-end;
}

.call-word-days__days {
  font-size: 10px;
  font-weight: 400;
  color: var(--honey-secondary);
}

.call-phone, .call-phone * {
  font-size: 16px;
  font-weight: bold;
  color: var(--honey-secondary);
}

@media (max-width: 1199px) {
  .logo-title,
  .logo-delimiter {
    display: none;
  }
}

@media (max-width: 1024px) {
  .header-desktop {
    display: none !important;
  }
}

</style>
