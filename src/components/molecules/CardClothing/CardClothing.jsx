import React, { useContext } from "react"
import styled from "styled-components"

import { CartContext } from "../../../utils/useContext/useContextCart"
import Button from "../../atoms/button/button"
import H3 from "../../atoms/H3/H3"
import ImgHero from "../../atoms/Img/ImgHero"
import Parraf from "../../atoms/Parraf/Parraf"

const CardClothing = ({ el, modify = true }) => {
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
      <DivCart $info={el.title} key={el.id} $center={modify}>
         <ImgHero img={el.img} alt={`picture-appareal-${el.title}`} />
         <div className='info-article-cart'>
            <H3>{el.title}</H3>
            <Parraf id='description-appareal'>{el.description}</Parraf>
            <Parraf>{el.price}€</Parraf>
            {modify && (
               <Button
                  action={() => {
                     handleDelete(el)
                  }}
               >
                  X
               </Button>
            )}
            {modify ? (
               <div id='counter-container'>
                  <div>
                     <Button action={() => resQuantity(el)}>-</Button>
                     <Button action={() => sumQuantity(el)}>+</Button>
                  </div>
                  <span>Quantity: {el.quantity}</span>
               </div>
            ) : (
               <div id='counter-container'>
                  <span>Quantity: {el.quantity}</span>
               </div>
            )}
         </div>
      </DivCart>
   )
}

export default CardClothing

export const DivCart = styled.div`
   display: flex;
   width: 460px;
   height: 200px;
   align-items: center;
   border-radius: var(--jd-br-li);
   box-shadow: 0px 1px 4px -1px #9980ac;
   min-width: 310px;

   > div {
      padding: var(--jd-padding-s);
      border-radius: var(--jd-br-li);
      width: 160px;
      height: 100%;
      > img {
         object-position: ${props => props.$info == "Jack & Jones Re" && "0% 78%"};
         object-fit: cover;
         border-radius: 20px;
      }
   }
   .info-article-cart {
      display: flex;
      flex-direction: column;
      width: 62%;
      gap: var(--jd-gap-xs);
      position: relative;
      align-items: center;
      justify-content: center;

      * {
         font-family: "Poppins", sans-serif;
         color: black;
      }

      > h3 {
         font-size: 18px;
         font-weight: 600;
      }
      > [id="description-appareal"],
      p {
         font-size: 16px;
         font-weight: 600;
      }
      [id="counter-container"] {
         position: ${props => (props.$center ? "absolute" : "relative")};
         right: 0px;
         align-items: center;
         bottom: 0px;
         width: 200px;
         display: flex;
         justify-content: space-around;
         > span {
            font-weight: 500;
         }
         > div {
            display: flex;
            width: 60%;
            gap: 2px;

            > button {
               font-size: 22px;
               border: 1px solid black;
               border-radius: 0px;
               width: 100%;
            }
         }
      }
      > button {
         position: absolute;
         top: 2px;
         right: -12px;
         border-radius: 50%;
         border: 1px solid #9980ac;
         align-content: center;
         font-size: 10px;
         width: 24px;
         font-weight: 700;
         height: 24px;
         &:hover {
            transform: scale(1);
            background-color: #f9b7b7;
         }
      }
   }
   @media (width<540px) {
      width: 90%;
      > .info-article-cart {
         width: 70%;

         > h3 {
            font-size: 15px;
            text-align: center;
         }

         > [id="description-appareal"],
         p,
         [id="counter-container"] {
            padding-bottom: var(--jd-padding-s);
            rem > span {
               font-size: 15px;
            }
         }

         > button {
            top: 2px;
            right: 1px;
         }
      }
   }
   @media (width<395px) {
      .info-article-cart {
         [id="counter-container"] {
            /* position: relative; */
            /* left: 10px; */
            justify-content: center;
            gap: var(--jd-gap-xs);
            padding-bottom: var(--jd-padding-xs);

            > div {
               width: 70px;
               gap: 10px;
            }
         }
      }
   }
`
