import {
   AddressElement,
   PaymentElement,
   useElements,
   useStripe,
} from "@stripe/react-stripe-js"
import React, { useState } from "react"
import styled from "styled-components"

export default function CheckoutForm() {
   const stripe = useStripe()
   const elements = useElements()

   const [message, setMessage] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const handleSubmit = async e => {
      e.preventDefault()
      console.log(message)

      if (!stripe || !elements) {
         // Stripe.js hasn't yet loaded.
         // Make sure to disable form submission until Stripe.js has loaded.
         return
      }

      setIsLoading(true)

      const { error } = await stripe.confirmPayment({
         elements,
         confirmParams: {
            return_url: "http://localhost:5173/complete",
         },
      })

      if (error.type === "card_error" || error.type === "validation_error") {
         setMessage(error.message)
      } else {
         setMessage("An unexpected error occurred.")
      }

      setIsLoading(false)
   }

   const paymentElementOptions = {
      layout: "tabs",
   }

   return (
      <ContainerForm>
         <form id='payment-form' onSubmit={handleSubmit}>
            <AddressElement id='adresse-element' options={{ mode: "billing" }} />
            <PaymentElement id='payment-element' options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id='submit'>
               <span id='button-text'>
                  {isLoading ? (
                     <div className='spinner' id='spinner'></div>
                  ) : (
                     "Pay now"
                  )}
               </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id='payment-message'>{message}</div>}
         </form>
      </ContainerForm>
   )
}
const ContainerForm = styled.div`
   min-height: 80svh;
   padding: var(--jd-padding-l) var(--jd-padding-m);
   > form {
      width: 42%;
      padding: var(--jd-padding-m);
      box-shadow: 0px 0px 3px black;
      border-radius: var(--jd-br-card);

      input {
         border: 4px solid black;
      }
   }
   [id="adresse-element"] {
      margin-bottom: 1rem;
   }
   [id="submit"] {
      background-color: #0570de;
      width: 40%;
      min-width: 100px;
      font-size: 18px;
      color: white;
      margin-top: var(--jd-margin-l);
      height: 45px;
      text-shadow: 0px 2px 7px black;
      border-radius: var(--jd-br-li);
      border: none;
      cursor: pointer;
      &:hover {
         box-shadow: 0px 0px 4px 1px #6974db;
         font-weight: 500;
         transition: all 0.4s;
      }
   }
   #Field-nameInput {
      border: 10px solid black;
   }
`
