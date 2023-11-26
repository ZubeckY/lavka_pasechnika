export default [
  {
    icon: 'mdi-history',
    title: 'Мои заказы',
    text: 'Мои заказы',
    link: '/my-orders'
  },
  {
    icon: 'mdi-cart-outline',
    title: 'Моя корзина',
    text: 'Моя корзина',
    link: '/my-cart'
  },
  {
    icon: 'mdi-chart-donut',
    title: 'Админ панель',
    text: 'Админ панель',
    link: '',
    href: process.env.API_ADMIN_LINK,
    target: '_blank',
    role: 'admin',
  },
  {
    icon: 'mdi-star-outline',
    title: 'Бонусные баллы',
    text: 'Бонусные баллы',
    link: '/bonus-card'
  },
  {
    icon: 'mdi-moped-outline',
    title: 'Адрес доставки',
    text: 'Адрес доставки и личные данные',
    link: '/profile-info'
  },
  {
    icon: 'mdi-exit-to-app',
    title: 'Выход',
    text: 'Выход',
    link: '/?logout=true',
    role: 'is_login'
  },
]
