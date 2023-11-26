import axios from "axios";

export default async function () {
  const cart_uuid = localStorage.getItem('cart_uuid')
  return await axios.get(`/api-products/cart-item/?cart_uuid=${cart_uuid ? cart_uuid : ''}`)
}
