import "./App.css"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { useContext } from "react"
import { Outlet, Route, Routes } from "react-router-dom"
import styled from "styled-components"

import FooterComponent from "./components/organisms/Footer/Footer"
import Header1 from "./components/organisms/Header/Header"
import Cart from "./Pages/Cart/Cart"
import CheckoutForm from "./Pages/CheckoutForm/CheckoutForm"
import CompletePage from "./Pages/CompletePage/CompletePage"
import Favourites from "./Pages/Favourites/Favourites"
import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import NotFounded from "./Pages/NotFounded/NotFounded"
import {
   appearance,
   loader,
} from "./utils/stripe/apareanceAndLogin/appareanceAndLogin"
import { productionMode } from "./utils/stripe/productionMode/productionMode"
import selectLanguage from "./utils/stripe/selectLanguage/selectLanguage"
import { CreateClient } from "./utils/useContext/useClientSecret"

const stripePromise = loadStripe(
   productionMode
      ? import.meta.env.VITE_PUBLICKEY_STRIPE_PRODUCTION
      : import.meta.env.VITE_PUBLICKEY_STRIPE,
)

const App = () => {
   return (
      <>
         <Header1 />
         {/* <Elements
            options={{
               clientSecret,
               appearance: appearance,
               loader: loader,
               locale: selectLanguage(),
            }}
            stripe={stripePromise}
         > */}
         <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cart/payment/:id' element={<CheckoutForm />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/login' element={<Login />} />
            <Route path='/complete' element={<CompletePage />} />
            <Route path='*' element={<NotFounded />} />
         </Routes>
         <Outlet />
         {/* </Elements> */}
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
