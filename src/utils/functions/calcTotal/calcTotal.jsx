export const calcTotal = array =>
   array.reduce((acc, el) => el.quantity * el.price + acc, 0).toFixed(2)
