import React, { Component } from 'react';
import Data from './data.json';
//import Product from './Product';
import ProductList from './ProductList';
import Card from './Card';
import SelectedProduct from './SelectedProduct';
export default class ExampleCard extends Component {
  state = {
    productList: Data,
    productSelected: null,
    cardList: [],
  }
  handleProductSelected = (prod) => {
    this.setState({productSelected: prod})
  }
  handleBuyProduct = (card) => {
    // tạo cardList mới
    let cardListUpdate = [...this.state.cardList];
    //let cardListUpdate = this.state.cardList.push(card);

    // tìm vị trí của phần tử trong mảng
    let index = cardListUpdate.findIndex((item)=> item.maSP === card.maSP)
    if(index >= 0){
      // tìm thấy
      cardListUpdate[index].soLuong +=1;
    }
    else{
      // khong tim thay
      card.soLuong = 1;
      cardListUpdate = [...cardListUpdate, card]
    }
    // setState
    this.setState({cardList: cardListUpdate})
  }
  handleDeleteProduct = (card) => {
    /**
     * 1/ tim vi tri
     * 2/ cat ra khoi mang
     * 3/ setState
     */
    console.log("delete")
    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((item)=> item.maSP === card.maSP);
    if(index >= 0){
      cardListUpdate.splice(index, 1);
      this.setState({cardList: cardListUpdate})
    }
  }
  render() {
    return (
      <div className="container">
        <Card cardList={this.state.cardList} handleDeleteProduct={this.handleDeleteProduct} />
        <ProductList productList={this.state.productList} handleProductSelected={this.handleProductSelected} handleBuyProduct={this.handleBuyProduct} />
        {this.state.productSelected ? <SelectedProduct productSelected={this.state.productSelected} /> : null}
        </div>
    );
  }
}
