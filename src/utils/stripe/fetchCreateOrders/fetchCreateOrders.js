import { productionMode } from "../productionMode/productionMode"

export const fetchCreateOrders = items => {
   items = items.map(item => ({
      ...item,
      amount: (item.price * item.quantity).toFixed(2),
   }))
   try {
      return fetch(
         productionMode
            ? import.meta.env.VITE_URL_PAYMENTS_PRODUCTION
            : import.meta.env.VITE_URL_PAYMENTS,
         {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: items }),
         },
      )
   } catch (error) {
      console.log(error)
   }
}
