import {
   AddressElement,
   Elements,
   PaymentElement,
   useElements,
   useStripe,
} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useContext, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"

import CardClothing from "../../components/molecules/CardClothing/CardClothing"
import ShowTotalAmount from "../../components/molecules/ShowTotalAmount/ShowTotalAmount"
import {
   appearance,
   loader,
} from "../../utils/stripe/apareanceAndLogin/appareanceAndLogin"
import { CartContext } from "../../utils/useContext/useContextCart"
const stripePromise = loadStripe(import.meta.env.VITE_PUBLICKEY_STRIPE)

export default function CheckoutForm() {
   // const stripe = useStripe()
   // const elements = useElements()

   const location = useLocation()
   const { cart } = useContext(CartContext)

   // const handleSubmit = async e => {
   //    e.preventDefault()

   //    if (!stripe || !elements) {
   //       console.error("Stripe.js aún no se ha cargado completamente.")
   //       return
   //    }

   //    setIsLoading(true)

   //    const { error } = await stripe.confirmPayment({
   //       elements,
   //       confirmParams: { return_url: "http://localhost:5173/complete" },
   //    })

   //    if (error) {
   //       setMessage(error.message || "An unexpected error occurred.")
   //    }

   //    setIsLoading(false)
   // }
   return (
      location.state["clientSecret"] && (
         <Elements
            options={{
               clientSecret: location.state["clientSecret"],
               appearance: appearance,
               loader: loader,
            }}
            stripe={stripePromise}
         >
            <CheckoutComponent cart={cart} />
         </Elements>
      )
   )
}

function CheckoutComponent({ cart }) {
   const { setCart } = useContext(CartContext)
   const stripe = useStripe()
   const elements = useElements()
   const [message, setMessage] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const handleSubmit = async e => {
      e.preventDefault()
      alert("The functionality to make payments is limited")
      return
      // if (!stripe || !elements) {
      //    console.error("Stripe.js aún no se ha cargado completamente.")
      //    return
      // }

      // setIsLoading(true)

      // const { error } = await stripe.confirmPayment({
      //    elements,
      //    confirmParams: { return_url: "http://localhost:5173/complete" },
      // })

      // if (error) {
      //    setMessage(error.message || "An unexpected error occurred.")
      // } else {
      //    setCart([])
      // }
      // setIsLoading(false)
   }

   return (
      <ContainerForm className='flex'>
         <form id='payment-form' onSubmit={handleSubmit}>
            <AddressElement id='adresse-element' options={{ mode: "billing" }} />
            <PaymentElement id='payment-element' options={{ layout: "tabs" }} />
            <button
               disabled
               // ={isLoading || !stripe || !elements || cart.length === 0}
               onMouseOver={() => {
                  setMessage(
                     "The button for confirm the payment is disabled because this payment method was created to lern the creation process for apply to a real case",
                  )
               }}
               onMouseLeave={() => {
                  setMessage()
               }}
               id='submit'
            >
               <span id='button-text'>{isLoading ? "Loading..." : "Pay now"}</span>
            </button>
            <p id='message-error-form'>{message}</p>
         </form>
         {cart.length > 0 && (
            <article className='products'>
               {cart.map(el => (
                  <CardClothing el={el} key={el.id} modify={false} />
               ))}
               <ShowTotalAmount cart={cart} />
            </article>
         )}
      </ContainerForm>
   )
}

const ContainerForm = styled.div`
   min-height: 80vh;
   padding: 2rem;
   justify-content: space-around;
   gap: 2rem;

   > form {
      width: 46%;
      padding: 2rem;
      box-shadow: 0px 0px 3px black;
      border-radius: 10px;
      max-height: fit-content;
   }
   [id="submit"] {
      background-color: #0570de;
      width: 40%;
      font-size: 18px;
      color: white;
      margin-top: 1rem;
      height: 45px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
      &:disabled {
         opacity: 0.4;
      }
   }

   #message-error-form {
      text-align: center;
      color: crimson;
      font-weight: 500;
      padding: 5px;
      margin-top: 5px;
   }
   @media (max-width: 985px) {
      #payment-form {
         width: 100%;
         #submit {
            min-width: 194px;
         }
      }
      .products {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         > div {
            width: 100%;
            min-width: 100px;
            overflow: hidden;
         }
         > div:last-child {
            width: 80%;
         }
      }
   }
   @media (max-width: 405px) {
      padding: var(--jd-padding-l) var(--jd-padding-s);
      #payment-form {
         padding: var(--jd-padding-l) var(--jd-padding-m);
      }
      .products {
         width: 100%;
         display: flex;
         flex-direction: column;
         align-items: center;
         > div {
            width: 100%;
            min-width: 100px;
            overflow: hidden;
            > div:nth-of-type(1) {
               padding: 0;
               > img {
                  border-radius: 0px;
               }
            }
         }
      }
   }
`
