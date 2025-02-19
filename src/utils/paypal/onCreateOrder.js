export const onCreateOrder = (data, actions, total, options) => {
   return actions.order.create({
      purchase_units: [
         {
            amount: {
               value: total.toString(),
               currency_code: options.currency,
            },
         },
      ],
   })
}
