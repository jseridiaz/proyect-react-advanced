import React, { memo } from "react"
import styled from "styled-components"

import IconArrowCard from "../../../../data/iconArrowCard/IconArrowCard"
import H2 from "../../../atoms/H2/H2"
import ImgHero from "../../../atoms/Img/ImgHero"
import Description from "../../../molecules/Description/Description"

const SectionFeatures = () => {
   return (
      <SectionBlock>
         <H2>Featured and Special Offers</H2>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722029615/street-style-tyler-joe-1-1674752623-1_z16ji3.webp'
            alt='picture-collection-bottega-venega'
         >
            <Description
               h3='Bottega veneta Women Exclusive Series'
               className='description-collection'
               btn='Shop now'
            >
               <IconArrowCard />
            </Description>
         </ImgHero>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722029615/ww-brands-anyday-v2-010923-1_c8gp7y.webp'
            alt='picture-collection-john-lewis'
         >
            <Description
               h3='John Lewis : Any Day Collections'
               className='description-collection'
               btn='Shop now'
            >
               <IconArrowCard />
            </Description>
         </ImgHero>
         <ImgHero
            className='features-picture-container'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722760776/Proyect%2012%20react/images/model-nike_1_zyxzfv.avif'
            alt='picture-with-special-50%-summer-offer'
         >
            <Description
               id='offer-wrp-season'
               h3='Save 50% this Holiday season'
               p='It’s  time to revamp your fashion game without breaking the bank! Dive into our exclusive 50% off sale and discover unbearable deals on the most coveted styles.'
               className='description-collection'
               btn='Visit it here'
            />
         </ImgHero>
      </SectionBlock>
   )
}

export default memo(SectionFeatures)

const SectionBlock = styled.section`
   display: flex;
   flex-wrap: wrap;
   padding: calc(var(--jd-padding-xxl) * 2.1);
   justify-content: space-around;
   column-gap: var(--jd-gap-m);
   row-gap: var(--jd-gap-xxl);
   background-color: var(--jd-bgcolor-primary);
   h2 {
      border-radius: var(--jd-br-li);
   }

   .features-picture-container:not(:last-child) {
      width: 49%;
      > div {
         > a {
            width: 40%;
            height: 48px;
            background-color: var(--jd-btn-primary);
            border-radius: var(--jd-br-s);
            outline: 3px solid white;
            border: none;

            > svg {
               margin-left: var(--jd-margin-xs);
            }
         }
      }
   }
   .features-picture-container:last-child {
      overflow: hidden;
      background-color: var(--jd-bg-quaternary);
      > img {
         object-fit: cover;
         object-position: 50% 30%;
         width: 37%;
      }
      > div {
         > a {
            background-color: var(--jd-btn-primary);
            border-radius: var(--jd-br-s);
            outline: 3px solid white;
         }
      }
   }
   @media (width<1241px) {
      .features-picture-container:not(:last-child) {
         width: 100%;
      }
   }
   @media (width<844px) {
      .features-picture-container:not(:last-child) {
         > div {
            width: 90%;
         }
      }
      .features-picture-container:last-child {
         min-height: 800px;
         width: 100%;
         flex-wrap: wrap;
         > img {
            object-fit: cover;
            object-position: 50% 27%;
            width: 100%;
            height: 44%;
         }
         > div {
            height: 59%;
            width: 100%;
            > a {
               position: relative;
               left: 50%;
               transform: translate(-50%);
            }
         }
      }
   }

   @media (width<716px) {
      .features-picture-container:not(:last-child) {
         height: 550px;
         > img {
            border-radius: 20px;
            object-fit: cover;
         }
         > div {
            a.link-button {
               width: 70%;
            }
         }
      }
   }
   @media (width<556px) {
      padding: var(--jd-padding-m);
      .features-picture-container:not(:last-child) {
         > img {
            object-position: 37%;
         }
         > div {
            width: 100%;
            padding: var(--jd-padding-xs);
            > h3 {
               font-size: 29px;
               padding: var(--jd-padding-s);
            }

            a.link-button {
               width: 70%;
               margin-left: 50%;
               transform: translate(-50%);
               height: 50px;
               margin-bottom: var(--jd-margin-l);
            }
         }
      }
   }
   h2 {
      padding: var(--jd-padding-l);
      font-size: 37.9px;
      width: 100%;
   }
   .features-picture-container:last-child {
      background-color: aliceblue;
      border: 1px solid black;
      > div {
         h3,
         p {
            color: black;
         }
         h3 {
            text-align: center;
         }
         > a {
            width: 60%;
            height: 58px;
         }
      }
   }
`
