import { memo } from "react"
import styled from "styled-components"

import Li from "../Li/Li"
export const colours = ["#0000ff", "#00ff26", "#ee2e2e"]
const Button = ({
   id,
   text = null,
   children = null,
   bgColor,
   fontColor,
   goTo = false,
   action,
   title,
   className,
   $boolean,
   label,
}) => (
   <>
      {goTo ? (
         <Li id={id} className='link-button' to={goTo} onClick={console.log("ok")}>
            {text}
            {children}
         </Li>
      ) : (
         <StyledButton
            className={className}
            title={title}
            $boolean={$boolean}
            onClick={action}
            id={id}
            $primary={bgColor}
            $color={fontColor}
            aria-label={label}
         >
            {text}
            {children}
         </StyledButton>
      )}
   </>
)

const StyledButton = styled.button`
   background-color: ${({ $primary }) => ($primary ? $primary : "transparent")};
   width: fit-content;
   height: fit-content;
   color: ${({ $color }) => $color || "black"};
   cursor: pointer;
   align-content: center;
   border-radius: 4px;
   transition: all 0.5s ease;
   font-weight: 500;
   border: none;

   &[id="btn-main-cta"] {
      display: flex;
      justify-content: center;
      width: 232px;
      border-radius: calc(var(--jd-br-s) * 2);
      height: 63px;
      text-align: center;
      align-items: center;
      a {
         color: white;
      }
   }
   &:hover {
      transform: scale(1.05);
   }

   &[id="left-arrow"],
   &[id="rigth-arrow"] {
      position: absolute;
      z-index: 2;
      width: 60px;
      cursor: pointer;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      img {
         width: 100%;
         height: 100%;
      }
   }
   &[id="rigth-arrow"] {
      transform: rotate(180deg);
      left: 100%;
   }

   /* &[id="btn-main-cta"]{
      ba
   } */
`
export default memo(Button)
