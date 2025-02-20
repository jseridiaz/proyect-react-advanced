import React, { memo } from "react"
import styled from "styled-components"

import { arraySectionCollection } from "../../../../data/HomeDatas/arraySectionCollection"
import H2 from "../../../atoms/H2/H2"
import ImgHero from "../../../atoms/Img/ImgHero"
import Li from "../../../atoms/Li/Li"
import Description from "../../../molecules/Description/Description"
const SectionCollection = () => {
   return (
      <>
         <SectionGrid>
            <H2 id='title-section-colection'>
               Explore our Latest Collections for you
            </H2>
            {arraySectionCollection.map((el, index) => (
               <ImgHero
                  key={el.id}
                  idNameContainer={`container-picture-${index}`}
                  img={el.img}
                  className='grid-pictures'
                  alt={el.img
                     .split("/")
                     .at(-1)
                     .split(".")[0]
                     .split("-")
                     .splice(0, 5)
                     .join("-")}
               >
                  <Description
                     id={`container-parraf-${el.id.split("-").at(-1)}`}
                     h3={el.h3}
                     p={el.parraf}
                     btn={el.btn}
                     className='info-pictures'
                  />
                  {index == 0 ? (
                     <Li to='/shop'>
                        <ImgHero
                           className='arrow-navigate'
                           img='https://res.cloudinary.com/ddybbosdk/image/upload/v1721985013/Proyect%2012%20react/Resources/arrow_naqybt.svg'
                           alt='icon-arrow-to-visit-shop'
                        />
                     </Li>
                  ) : null}
               </ImgHero>
            ))}
         </SectionGrid>
      </>
   )
}

export default memo(SectionCollection)

export const SectionGrid = styled.section`
   padding: calc(var(--jd-padding-xxl) * 2) calc(var(--jd-padding-xxl) * 2.1);
   display: grid;
   justify-items: center;
   grid-template-columns: 0.8fr 0.8fr minmax(461px, 1fr);
   gap: calc(var(--jd-gap-m) + 5px);
   background-color: var(--jd-bgcolor-primary);

   [id="container-picture-1"] > div > a {
      background-color: var(--jd-btn-primary);
      border: 3px solid white;
   }
   @media (max-width: 1254px) {
      padding: var(--jd-padding-m);
      grid-template-columns: 1fr 1fr;
      [id="container-picture-1"] {
         height: 600px;
         img {
            object-fit: cover;
            object-position: 50% 5%;
         }
      }
   }
   @media (width<471px) {
      grid-template-rows: auto 400px auto auto auto;
   }
   @media (width<384px) {
      grid-template-rows: auto 300px auto auto auto;
   }
`
