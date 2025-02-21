import "./index.css"

import React from "react"
import ReactDOM from "react-dom/client"
import { HelmetProvider } from "react-helmet-async"
import { BrowserRouter } from "react-router-dom"

import App from "./App.jsx"
import CreateClientSecret from "./utils/useContext/useClientSecret.jsx"
import CartContextProvider from "./utils/useContext/useContextCart.jsx"
import FavoriteContextProvider from "./utils/useContext/useContextFavourites.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
   <CreateClientSecret>
      <CartContextProvider>
         <FavoriteContextProvider>
            <BrowserRouter basename='/'>
               <HelmetProvider>
                  <App />
               </HelmetProvider>
            </BrowserRouter>
         </FavoriteContextProvider>
      </CartContextProvider>
   </CreateClientSecret>,
)
