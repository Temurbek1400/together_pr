import React, { useState } from "react";
import styled from "styled-components";
import BranchItem from "./branch-item";

const BranchItems = (props) => {
   return (
      <BranchItemsStyled>
         {props.items.map((item) => (
            <BranchItem
               {...item}
               handleSelect={props.handleSelect}
               key={item.id}
            />
         ))}
      </BranchItemsStyled>
   );
};

const BranchItemsStyled = styled.div`
   width: 50vw;
   display: grid;
   grid-template-columns: 1fr 1fr;
   justify-content: space-between;
   margin: 30px auto;
   align-items: center;
   &:hover {
      cursor: pointer;
   }
   @media screen and (max-width: 988px) {
      width: 100vw;
      height: 300px;
      overflow-y: auto;
      margin: auto;
      grid-template-columns: 1fr;
      justify-content: space-between;
      align-items: center;
   }
`;

export default BranchItems;
