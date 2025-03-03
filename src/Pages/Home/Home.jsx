import styled from "styled-components"

import H2 from "../../components/atoms/H2/H2"
import ImgHero from "../../components/atoms/Img/ImgHero"
import Li from "../../components/atoms/Li/Li"
import Hero from "../../components/organisms/Hero/Hero"
import SectionCategories from "../../components/organisms/Home/SectionCategories/SectionCategories"
import SectionCollection from "../../components/organisms/Home/SectionCollection/SectionCollection"
import SectionFeatures from "../../components/organisms/Home/SectionFeatures/SectionFeatures"
import Seo from "../../components/organisms/Seo/Seo"
import { arrayPicturesHero } from "../../data/arrayPicturesHero/arrayPicturesHero"

const Home = () => {
   return (
      <>
         <Seo
            title='Fashion Store - Clothes and complements'
            description='Fashion Store shop is the new fashion store 
          to find out all modern trendy clothes of the current and the next season.'
            img='https://res.cloudinary.com/ddybbosdk/image/upload/v1722546207/Proyect%2012%20react/images/zara-model_1_rzgbw0.avif'
         />
         <main>
            <Hero>
               <div className='hero-container'>
                  <p>Experience fashion like never before</p>
                  <H2>
                     Elevate Your Style With Fashion Store: Where Fashion Meets
                     Passion
                  </H2>

                  <p id='description-hero'>
                     Discover a world of fashion-forward trends, curated collections,
                     and timeless pieces that inspire. Unleash your inner fashionista
                     and embark on a journey of confidence, elegance and impeccable
                     style.
                  </p>

                  <Li id='btn-main-cta' to='/home'>
                     Start <Space /> Shopping
                  </Li>
               </div>
               <Article id='article-hero-pictures'>
                  {arrayPicturesHero.map((el, index) => (
                     <ImgHero
                        key={`${el.id}-${index}`}
                        idName={el.id}
                        img={el.src}
                        alt={el.alt}
                     />
                  ))}
               </Article>
               <div id='effect-rounded'></div>
            </Hero>
            <SectionCollection />
            <SectionCategories />
         </main>
         <SectionFeatures />
      </>
   )
}

export default Home

const Space = styled.span`
   margin-left: 12px;
`

const Article = styled.article`
   display: flex;
   max-width: 100svw;
   width: 100%;
   justify-content: space-around;
   gap: var(--jd-gap-m);
   flex-wrap: wrap;
   padding: var(--jd-padding-m);
   > div {
      > img {
         width: 100%;
      }
   }
`
