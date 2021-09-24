import React, { Component } from "react";
import styled from "styled-components";
import BranchItems from "./branch-menu-elements/branch-items";
import BranchItemInfo from "./branch-menu-elements/branch-item-info";
import items_data from "./data";

class BranchMenu extends Component {
   state = {
      items: [], // data is available
      selectedItem: {
         id: null,
         selected: null,
         city: null,
         address: null,
         number: null,
         imgLink: null
      }
   };
   setData = () => {
      let items = [];
      items_data.forEach((item) => {
         items = [...items, { ...item }];
      });
      this.setState({ items: items });
   }
   componentDidMount() {
      this.setData();
   }
   getItem = (id) => {
      return this.state.items.find((item) => item.id === id);
   }
   handleSelect = (id) => {
      let items = [];
      this.state.items.forEach((item) => {
         items = [...items, {...item}];
      });
      items.forEach((item) => {
         item.selected = false;
         if (item.id === id) {
            item.selected = !item.selected;
         }
      });
      setTimeout(() => {
         this.setSelectedItem(id);
      }, 10);
      this.setState({items: items});
   }
   setSelectedItem(id) {
      this.setState({selectedItem: this.getItem(id)});
   }

   render() {
      
      return (
         <BranchMenuBlock>
            <BranchItems items={this.state.items} handleSelect={this.handleSelect} />
            <BranchItemInfo selectedItem={this.state.selectedItem} />
         </BranchMenuBlock>
      );
   }
}

const BranchMenuBlock = styled.div`
   display: flex;
   justify-content: center;
`;

export default BranchMenu;
