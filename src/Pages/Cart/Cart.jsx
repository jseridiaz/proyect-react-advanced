import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import Button from "../../components/atoms/button/button"
import H2 from "../../components/atoms/H2/H2"
import ImgHero from "../../components/atoms/Img/ImgHero"
import Parraf from "../../components/atoms/Parraf/Parraf"
import CardClothing from "../../components/molecules/CardClothing/CardClothing"
import ShowTotalAmount from "../../components/molecules/ShowTotalAmount/ShowTotalAmount"
import Seo from "../../components/organisms/Seo/Seo"
import { fetchCreateOrders } from "../../utils/stripe/fetchCreateOrders/fetchCreateOrders"
import { CreateClient } from "../../utils/useContext/useClientSecret"
import { CartContext } from "../../utils/useContext/useContextCart"
const Cart = () => {
   const navigate = useNavigate()
   const { cart, setCart } = useContext(CartContext)
   const { setClientSecret } = useContext(CreateClient)
   const handlesubmit = () => {
      fetchCreateOrders(cart)
         .then(res => res.json())
         .then(res => {
            setClientSecret(res.clientSecret)
            navigate(`/cart/payment/${crypto.randomUUID()}`, {
               state: { clientSecret: res.clientSecret },
            })
         })
   }
   return (
      <>
         <Seo
            title={"Shopping cart- Fashion Store"}
            description='Handle your shopping cart and buy your articles'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722546207/Proyect%2012%20react/images/zara-model_1_rzgbw0.avif'
         />

         <main>
            <H2 id='title-cart-section'>My shopping cart</H2>
            <ShopSection
               id='cart-section-page'
               className={cart.length > 0 && "width-reduced"}
            >
               {cart.length == 0 ? (
                  <ImgHero
                     idNameContainer='empty-cart-container'
                     img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722439506/Proyect%2012%20react/images/empty-Cart_zoztgh.webp'
                     alt='icon-no-items-cart'
                  >
                     <Parraf id='description-empty-cart'>Your cart ist empty</Parraf>
                  </ImgHero>
               ) : (
                  <>
                     <div id='articles-wrp'>
                        {cart.length > 0 &&
                           cart.map(el => (
                              <CardClothing el={el} key={el.id}></CardClothing>
                           ))}
                        <div id='total'>
                           <Button action={() => setCart([])}> Clear Cart</Button>
                           <ShowTotalAmount cart={cart} />
                        </div>

                        <Button id='buy-btn' action={handlesubmit}>
                           Buy now
                        </Button>
                     </div>
                  </>
               )}
            </ShopSection>
         </main>
      </>
   )
}

export default Cart

export const ShopSection = styled.section`
   min-height: 85svh;
   display: flex;
   flex-direction: column;
   padding: var(--jd-padding-s);
   width: 45%;
   align-items: center;
   margin-inline: auto;
   gap: var(--jd-gap-m);

   [id="articles-wrp"] {
      width: 100%;
      align-items: center;
      display: flex;
      flex-direction: column;
      gap: var(--jd-gap-m);
   }
   &.width-reduced {
      width: 100%;
      margin-inline: 0px;
   }
   * {
      color: black;
   }
   > [id="empty-cart-container"] {
      display: flex;
      margin-inline: auto;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 300px;
      > p {
         text-align: center;
         font-weight: 600;
         position: relative;
         bottom: 70px;
         width: 100%;
      }
      > img {
         width: 150%;
         object-fit: cover;
      }
   }
   [id="buy-btn"] {
      background-color: #9980ac;
      width: 325px;
      font-size: 18px;
      color: white;
      margin-top: var(--jd-margin-l);
      height: 45px;
      text-shadow: 0px 2px 7px black;
      border-radius: var(--jd-br-li);
   }
   [id="total"] {
      font-weight: 600;
      padding: var(--jd-padding-s);
      div:last-child {
         margin-top: var(--jd-margin-m);
         padding: var(--jd-padding-s);
         border-radius: var(--jd-br-s);

         box-shadow: 0px 0px 4px 1px black;
         span:last-child {
            margin-left: 10px;
         }
      }
   }
   @media (width<531px) {
      width: 100%;
   }
   @media (width<405px) {
      [id="buy-btn"] {
         width: 70%;
      }
   }
`
