import React, { useState } from "react";
import styled from "styled-components";
import londonLoc from "./../../../assets/branch-menu/london_location.png";
import locOrange from "./../../../assets/branch-menu/locationOrange.png";
import locWhite from "./../../../assets/branch-menu/locationWhite.png";

const BranchItem = (props) => {
   return (
      <BranchItemStyle onClick={() => props.handleSelect(props.id)} selected={props.selected}>
         <LocationImgWrap>
            <LocationImg selected={props.selected} src={props.selected ? locWhite : locOrange} className="image-fluid" />
         </LocationImgWrap>
         <ItemInfo>
            <ItemCity>{props.city}</ItemCity>
            <ItemAddress>{props.address}</ItemAddress>
         </ItemInfo>
      </BranchItemStyle>
   );
};

const BranchItemStyle = styled.div`
   background-color: ${(props) => props.selected ? "#FFC339" : "#fff"};
   border: 1px solid ${(props) => props.selected ?"no" : "#656565"};
   border-radius: 1rem;
   width: 270px;
   padding: 17px 30px;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   margin-bottom: 1rem;
   transition: all 0.3s ease-in-out;
   /* @media screen and (max-width: 768px) {
      height: 600px;
      overflow-y: hidden;
   } */
   &:hover {
      box-sizing: border-box;
      border: 1px solid #FFC339;
      transform: scale(1.1);
   }
`;
const LocationImgWrap = styled.div`
`;
const LocationImg = styled.img`
`;
const ItemInfo = styled.div`
   margin-left: 20px;
   text-align: left;
`;

const ItemCity = styled.h3``;
const ItemAddress = styled.p``;

export default BranchItem;
