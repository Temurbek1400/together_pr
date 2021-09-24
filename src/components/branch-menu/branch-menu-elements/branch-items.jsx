import React, { useState } from "react";
import styled from "styled-components";
import BranchItem from "./branch-item";


const BranchItems = (props) => {
   return (
      <BranchItemsStyled>
         {
            props.items.map(item =>
               <BranchItem {...item} handleSelect={props.handleSelect} key={item.id}/>
            )
         }
      </BranchItemsStyled>
   );
};

const BranchItemsStyled = styled.div`
   width: 50%;
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: flex-start;
   &:hover {
      cursor: pointer;
   }
`;

export default BranchItems;
