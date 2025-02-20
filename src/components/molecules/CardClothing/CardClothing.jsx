import React, { useContext } from "react"

import { DivCart } from "../../../Pages/Cart/Cart"
import { CartContext } from "../../../utils/useContext/useContextCart"
import Button from "../../atoms/button/button"
import H3 from "../../atoms/H3/H3"
import ImgHero from "../../atoms/Img/ImgHero"
import Parraf from "../../atoms/Parraf/Parraf"

const CardClothing = ({ el }) => {
   const { cart, setCart } = useContext(CartContext)
   const handleDelete = el => {
      setCart(cart.filter(item => item.id != el.id))
   }
   const sumQuantity = el =>
      setCart(prevState =>
         prevState.map(item =>
            item.id == el.id ? { ...item, quantity: item.quantity + 1 } : item,
         ),
      )

   const resQuantity = el =>
      setCart(prevState =>
         prevState.map(item =>
            item.id == el.id && el.quantity > 1
               ? { ...item, quantity: item.quantity - 1 }
               : item,
         ),
      )
   return (
      <DivCart $info={el.title} key={el.id}>
         <ImgHero img={el.img} alt={`picture-appareal-${el.title}`} />
         <div className='info-article-cart'>
            <H3>{el.title}</H3>
            <Parraf id='description-appareal'>{el.description}</Parraf>
            <Parraf>{el.price}€</Parraf>
            <Button
               action={() => {
                  handleDelete(el)
               }}
            >
               X
            </Button>
            <div id='counter-container'>
               <div>
                  <Button action={() => resQuantity(el)}>-</Button>
                  <Button action={() => sumQuantity(el)}>+</Button>
               </div>
               <span>Quantity: {el.quantity}</span>
            </div>
         </div>
      </DivCart>
   )
}

export default CardClothing
