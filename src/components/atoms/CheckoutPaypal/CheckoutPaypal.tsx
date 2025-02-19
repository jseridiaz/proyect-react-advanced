import styled from "styled-components"
import React, { useEffect, useRef } from "react"
import {
   DISPATCH_ACTION,
   PayPalButtons,
   usePayPalScriptReducer,
} from "@paypal/react-paypal-js"
import { onCreateOrder } from "../../../utils/paypal/onCreateOrder"

const CheckoutPaypal = ({ cart, total }) => {
   const [{ options, isPending }, dispatch] = usePayPalScriptReducer()
   const selectCurrency = useRef(null)
   const onApproveOrder = (data, actions) => {
      return actions.order.capture().then(details => {
         //  throw new Error("This is a payment proob")
         const name = details.payer.name.given_name
         alert(`Transaction completed by ${name}`)
      })
   }
   const onChange = () => {
      dispatch({
         type: DISPATCH_ACTION.RESET_OPTIONS,
         value: { ...options, currency: selectCurrency.current?.["value"] },
      })
   }

   return (
      <>
         {/* <button onClick={()=>{onCreateOrder()}}>Button proof</button> */}
         <DivPaypal id='container-paypal'>
            <fieldset>
               <select
                  name='currency'
                  defaultValue={"EUR"}
                  onChange={onChange}
                  ref={selectCurrency}
               >
                  <option value='EUR'>Eur €</option>
                  <option value='USD'>Dollar $</option>
               </select>
            </fieldset>
            {isPending ? (
               <p>is Loading...</p>
            ) : (
               <PayPalButtons
                  disabled
                  // createOrder={(data, actions) =>
                  //    onCreateOrder(data, actions, total, options)
                  // }
                  //     onApprove={(data, actions) => onApproveOrder(data, actions)}
               />
            )}
         </DivPaypal>
      </>
   )
}

export default CheckoutPaypal

const DivPaypal = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 30%;
   padding: 4px;
   > div {
      width: 100%;
   }
   fieldset {
      border: none;
      margin-bottom: 0.4rem;
      padding: 4px;
   }
   select {
      height: 2rem;
   }
   select,
   fieldset {
      width: 100%;
      cursor: pointer;
   }
   select:focus {
      border: inherit;
   }
`
