const fetchCreateOrders = items => {
   items = items.map(item => ({
      ...item,
      amount: (item.price * item.quantity).toFixed(2),
   }))
   console.log(items)

   return fetch(import.meta.env.VITE_URL_PAYMENTS, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: items }),
   })
}
//! body: JSON.stringify({
// !   items: [{ id: "xl-tshirt", amount: 1000 }],
//! })

export default fetchCreateOrders
