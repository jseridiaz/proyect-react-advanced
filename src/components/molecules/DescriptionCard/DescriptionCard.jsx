import styled from "styled-components"

import useBoolean from "../../../utils/customHooks/useBoolean/useBoolean"
import Button from "../../atoms/button/button"
import SvgCart, { SvgCartRemove } from "../../atoms/Svg/SvgCart"
import Toast from "../Toast/Toast"

const DescriptionCard = ({
   name,
   infoArticle,
   price,
   click,
   callback,
   booleanState,
   selected,
}) => {
   const [newBoolean, setnewBoolean] = useBoolean(true)

   return (
      <ContainerDescription>
         <div>
            <h4>{name}</h4>
            <p>{infoArticle}</p>
            <p className='price'>{price}€</p>
         </div>
         <Button
            title='Add to cart'
            action={() => {
               click()
               let checking = newBoolean == true && booleanState == true
               // console.log(checking)
               setnewBoolean()

               if (checking) {
                  callback(false)
                  return setTimeout(() => {
                     callback(true)
                  }, 400)
               } else {
                  !newBoolean ? callback(false) : callback(true)
               }
            }}
         >
            {newBoolean ? <SvgCart /> : <SvgCartRemove />}
         </Button>
         {booleanState && (
            <Toast nameItem={selected} onClose={() => callback(false)} />
         )}
      </ContainerDescription>
   )
}

export default DescriptionCard
const ContainerDescription = styled.div`
   position: absolute;
   display: flex;
   bottom: 0;
   background-color: aliceblue;
   width: 100%;
   height: 100px;
   justify-content: space-between;
   align-items: center;
   padding-inline: var(--jd-padding-l);
   border-radius: 0px 0px 20px 20px;
   * {
      font-family: "Inter", sans-serif;
   }
   > div {
      display: flex;
      flex-direction: column;
      justify-content: start;
      gap: var(--jd-gap-s);
   }
   button {
      position: relative;
      top: 10px;
      width: 45px;
      height: 45px;
      align-content: center;

      > svg {
         width: 100%;
         height: 100%;
      }
   }
   @media (width<361px) {
      height: 150px;
   }
`
