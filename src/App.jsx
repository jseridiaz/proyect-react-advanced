import "./App.css"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import styled from "styled-components"

import FooterComponent from "./components/organisms/Footer/Footer"
import Header1 from "./components/organisms/Header/Header"
import Cart from "./Pages/Cart/Cart"
import CheckoutForm from "./Pages/CheckoutForm/CheckoutForm"
import Favourites from "./Pages/Favourites/Favourites"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFounded from "./Pages/NotFounded/NotFounded"
import selectLanguage from "./utils/stripe/selectLanguage/selectLanguage"

const stripePromise = loadStripe(import.meta.env.VITE_PUBLICKEY_STRIPE)

const App = () => {
   const [clientSecret, setClientSecret] = useState()

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch(import.meta.env.VITE_URL_PAYMENTS, {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify({ items: [{ id: "xl-tshirt", amount: 1000 }] }),
      })
         .then(res => res.json())
         .then(data => setClientSecret(data.clientSecret))
   }, [])
   const appearance = {
      theme: "stripe",
      variables: {
         colorPrimary: "#0570de",
         colorBackground: "#dadada3e",
         colorText: "#30313d",
         colorDanger: "#df1b41",
         fontFamily: "Ideal Sans, system-ui, sans-serif",
         spacingUnit: "3px",
         borderRadius: "4px",
         fontSizeBase: "1.15rem",
         fontWeightLight: "300", // Texto ligero
         fontWeightNormal: "600", // Texto normal
         fontWeightMedium: "500", // Texto medio
         fontWeightBold: "700",

         // See all possible variables below
      },
   }
   // Enable the skeleton loader UI for optimal loading.
   const loader = "auto"
   return (
      <>
         <Header1 />
         {clientSecret && (
            <Elements
               options={{
                  clientSecret,
                  appearance,
                  loader,
                  locale: selectLanguage(),
               }}
               stripe={stripePromise}
            >
               <Routes>
                  <Route path='/' index element={<Home />} />
                  <Route path='/home' element={<Home />} />
                  <Route path='/cart' element={<Cart />} />
                  <Route path='/cart/payment/:id' element={<CheckoutForm />} />
                  <Route path='/favourites' element={<Favourites />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='*' element={<NotFounded />} />
                  {/* /* <Route path="/complete" element={<CompletePage />} /> */}
               </Routes>
            </Elements>
         )}
         <FooterComponent />
      </>
   )
}

export default App
export const DisplayFlex = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   [id="toast-container"] {
      position: fixed;
      top: 0;
   }
`
