export default function (list: any): number {
  let total_price = 0
  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    total_price += item.count * item['sub_product'].price;
  }
  return total_price
}


