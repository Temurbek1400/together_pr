import React from "react";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const BranchItemInfo = ({ selectedItem }) => {
   console.log(selectedItem);
   return (
      <BranchItemInfoWrap>
         <BranchItem>
            <ItemImgWrap>
               <ItemImg src={selectedItem.imgLink} className="img-fluid" />
            </ItemImgWrap>
            <ItemInfo>
               <ItemProp>Address:</ItemProp>
               <ItemAddress>{selectedItem.city} {selectedItem.address}</ItemAddress>
            </ItemInfo>
            <ItemInfo>
               <ItemProp>Call:</ItemProp>
               <ItemAddress>{selectedItem.number}</ItemAddress>
            </ItemInfo>
         </BranchItem>
      </BranchItemInfoWrap>
   );
};
const BranchItemInfoWrap = styled.div`
   background-color: #eee;
   border: #aaa 1px solid;
   border-radius: 1.5rem;
   max-width: 400px;
   margin: auto;
   padding: 2rem;
   @media screen and (max-width: 900px) {
      width: 80vw;
      margin-top: 20px;
   }
   @media screen and (max-width: 540px) {
      width: 80vw;
   }
`;
const BranchItem = styled.div`
   padding: 1rem;
`;
const ItemImgWrap = styled.div``;
const ItemImg = styled.img`
   border-radius: 1rem;
   width: 400px;
`;
const ItemInfo = styled.div`
   text-align: left;
   margin-top: 2rem;
`;
const ItemProp = styled.div`
   color: #999;
`;

const ItemAddress = styled.h3``;
export default BranchItemInfo;
