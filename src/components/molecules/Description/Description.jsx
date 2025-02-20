import styled from "styled-components"

import Button from "../../atoms/button/button"
import H3 from "../../atoms/H3/H3"
import ImgHero from "../../atoms/Img/ImgHero"
import Parraf from "../../atoms/Parraf/Parraf"

const Description = ({ h3, p, btn, img, arrow, children, className, id }) => {
   return (
      <DivColumn id={id} className={className}>
         {h3 && <H3>{h3}</H3>}
         {p && <Parraf>{p}</Parraf>}
         {btn && (
            <Button goTo='/shop' id={id}>
               {btn}
               {arrow && (
                  <ImgHero
                     img='https://res.cloudinary.com/ddybbosdk/image/upload/v1721973582/Proyect%2012%20react/Resources/Vector_ixjxhk.png'
                     alt='icon-arrow-visit-shop'
                  />
               )}
               {children}
            </Button>
         )}

         {img && <ImgHero />}
      </DivColumn>
   )
}

export default Description
const DivColumn = styled.div`
   display: flex;
   position: absolute;
   bottom: 0;
   width: 95%;
   flex-direction: column;
   position: absolute;
   padding-inline: var(--jd-padding-l);
   @media (width<1254px) {
      padding: var(--jd-padding-l) var(--jd-padding-xxl);
   }
`
