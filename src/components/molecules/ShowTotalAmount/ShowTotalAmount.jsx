import React from "react"
import styled from "styled-components"

import { calcTotal } from "../../../utils/functions/calcTotal/calcTotal"

const ShowTotalAmount = ({ cart }) => {
   return (
      <DivTotal>
         <span> Total:</span>
         <span>{calcTotal(cart)}€</span>
      </DivTotal>
   )
}

export default ShowTotalAmount

const DivTotal = styled.div`
   margin-top: var(--jd-margin-m);
   padding: var(--jd-padding-s);
   border-radius: var(--jd-br-s);
   font-weight: 600;

   box-shadow: 0px 0px 4px 1px black;
   span:last-child {
      margin-left: 10px;
   }
`
