const cart_uuid = localStorage.getItem('cart_uuid')
export default process.env.MAIN_LINK + `my-orders?cart_uuid=${cart_uuid ? cart_uuid : ''}`
