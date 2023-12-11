<template>
  <footer class="footer">
    <div class="footer-container container">
      <div class="footerBody">
        <div class="footerBody-group">
          <logo class="footerLogo"/>
          <article class="footerContacts">
            <div class="footerContacts-container">
              <div class="footerContacts-schedule__wrapper">
                <div class="footerContacts-title">Контакты</div>
                <div class="footerContacts-subTitle">Мы работаем</div>

                <div class="footerContacts-schedule">
                  <div class="footerContacts-schedule__line"></div>
                  <div class="footerContacts-schedule__daysWeek">
                    <div>пн-пт 8:00—21:00</div>
                    <div>сб-вс 8:00—21:00</div>
                  </div>
                </div>
              </div>
              <div>
                <div class="footerContacts-phone">
                  <a href="tel:+78002000564">+7 (800) 200-05-64</a>
                </div>
                <a class="footerContacts-askWe">Задать вопрос</a>
                <div class="footerContacts-askWe__second">
                  <pulse-animation/>
                  <div class="footerContacts-askWe__second-title">Задайте нам
                    вопрос напрямую:
                  </div>
                </div>
                <div class="footerContacts-socialList d-flex flex-row mt-1">
                  <a class="footerContacts-socialList__item" href="">
                    <img src="/img/vk.svg" alt="#">
                  </a>
                  <a class="footerContacts-socialList__item" href="">
                    <img src="/img/instagram.svg" alt="#">
                  </a>
                  <a class="footerContacts-socialList__item" href="">
                    <img src="/img/whatsapp.svg" alt="#">
                  </a>
                  <a class="footerContacts-socialList__item" href="">
                    <img src="/img/telegram.svg" alt="#">
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
        <locations/>
        <article class="footerMenu">
          <div class="footerMenu-container">
            <div class="footerMenu-title">Меню</div>
            <ul class="footerMenu-list">
              <li class="footerMenu-list__item" v-for="(link, i) in links" :key="'footer-links-'+i">
                <nuxt-link class="footerMenu-list__item-link" :to="link.href">
                  {{ link.value }}
                </nuxt-link>
                <a href="#"></a>
              </li>
            </ul>
          </div>
        </article>
        <article class="footerDownload">
          <div class="footerDownload-container">
            <div class="footerDownload-title">Приложение
              Лавка-пасечника.РФ
            </div>

            <img class="footerDownload-qr" src="https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Flavkapasechnika.ru%2F&chs=180x180&choe=UTF-8&chld=L|2"
                 rel="nofollow" alt="qr code">

            <div class="footerDownload-text">Нажмите и скачайте бесплатное
              приложение Лавка-Пасечника.РФ
            </div>

            <div class="footerDownload-platform">
              <div class="footerDownload-platform__card">
                <img class="footerDownload-platform__card-icon" src="#" alt="#">
                <div class="footerDownload-platform__card-downloadIn">
                  <div class="footerDownload-platform__card-downloadIn-SubTitle">Загрузите в</div>
                  <div class="footerDownload-platform__card-downloadIn-Title">App Store</div>
                </div>
              </div>

              <div class="footerDownload-platform__card">
                <img class="footerDownload-platform__card-icon" src="#" alt="#">
                <div class="footerDownload-platform__card-downloadIn">
                  <div class="footerDownload-platform__card-downloadIn-SubTitle">Загрузите в</div>
                  <div class="footerDownload-platform__card-downloadIn-Title">Google Play</div>
                </div>
              </div>

            </div>
          </div>
        </article>
      </div>
      <article class="footerMazur">
        <div class="footerMazur-container general-container">
          <div class="footerMazur-copyright">ⒸЛАВКА ПАСЕЧНИКА | {{ getTodayYear }}</div>
          <a class="footerMazur-privacyPolicy">Политика конфиденциальности</a>
          <div class="footerMazur-madeByMazurGroup">
            <span>Разработано в </span>
            <a href="https://mazurgroup.ru/" target="_blank">mazurgroup.ru</a>
          </div>
        </div>
      </article>
    </div>
  </footer>
</template>
<script>
import Logo from "../logo.vue";
import PulseAnimation from "../pulse-animation.vue";

export default {
  name: "FooterDesktop",
  components: {PulseAnimation, Logo},
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
        href: '',
        value: 'Мои заказы',
      },
      {
        href: '',
        value: 'Мои заказы',
      },
      {
        href: '',
        value: 'Бонусная карта',
      },
      {
        href: '',
        value: 'Условия доставки и оплаты',
      }
    ]
  }),
  computed: {
    getTodayYear() {
      return new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.footer {
  margin-top: 80px;
}

.footerBody {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.footerContacts {
  margin-top: 10px;
}

.footerContacts-title {
  font-size: 19px;
  font-weight: bold;
}

.footerContacts-schedule {
  display: flex;
  height: 35px;
  flex-wrap: wrap;
  line-height: 18px;
  color: var(--honey-grey-card-dark);
}

.footerContacts-schedule__line {
  width: 1px;
  height: 100%;
  margin-top: 3px;
  background: var(--honey-grey-card-dark)
}

.footerContacts-schedule__daysWeek {
  height: 100%;
  margin-top: 4px;
  margin-left: 8px;
}

.footerContacts-subTitle {
  font-size: 16px;
  color: var(--honey-grey-card-dark);
}

.footerContacts-phone {
  margin-top: 12px;
}

.footerContacts-phone * {
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  letter-spacing: -1px;
  text-decoration: none;
  color: black !important;
}

.footerContacts-askWe {
  display: flex;
  width: 214px;
  height: 40px;
  padding: 0;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  align-items: center;
  border-radius: 20px;
  letter-spacing: .1px;
  text-decoration: none;
  justify-content: center;
  background: var(--honey-primary);
}

.footerContacts-askWe__second {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.footerContacts-askWe__second-title {
  margin: 10px;
  font-size: 16px;
  font-weight: bold;
  line-height: 16px;
  white-space: pre-line;
  color: var(--honey-secondary);
}

.footerContacts-socialList__item {
  width: 35px;
  height: 35px;
  margin-right: 8px;
}

.footerContacts-socialList__item img {
  display: block;
  width: 100%;
  height: 100%;
}

.footerMenu-list {
  display: block;
  margin: 0;
  padding: 0;
}

.footerMenu-title {
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}

.footerMenu-list__item,
.footerMenu-list__item * {
  display: block;
  font-size: 16px;
  color: var(--honey-secondary) !important;
  text-decoration: none !important;
}

.footerMenu-list__item * {
  margin-bottom: 8px;
}

.footerDownload {
  display: block;
  width: 254px;
  height: 345px;
  border-radius: 12px;
  background: url("/img/pattern.webp") center no-repeat;
}

.footerDownload-title {
  width: 100%;
  color: white;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  white-space: pre-line;
}

.footerDownload-text {
  width: 100%;
  color: white;
  font-size: 12px;
  line-height: 1.2;
  text-align: center;
  white-space: pre-line;
}

.footerDownload-platform {
  display: flex;
  justify-content: center;
}

.footerDownload-platform__card {
  display: flex;
  background: white;
  border-radius: 13px;
  align-items: center;
}

.footerDownload-platform__card-downloadIn-SubTitle {
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: var(--honey-secondary);
}

.footerDownload-platform__card-downloadIn-Title {
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: var(--honey-secondary);
}

.footerMazur {
  margin-top: 60px;
  padding-bottom: 30px;
}

.footerMazur-container {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: space-between;
}

.footerMazur-copyright,
.footerMazur-privacyPolicy,
.footerMazur-madeByMazurGroup {
  margin-top: 12px;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  color: var(--honey-secondary);
  text-decoration: none !important;
}

@media (max-width: 790px) {
  .footerBody {
    flex-direction: column;
    align-items: center;
  }

  .footerMenu {
    margin-bottom: 20px;
  }

  .footerMazur-container {
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
