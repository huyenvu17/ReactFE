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
  // xử lý tăng giảm số lượng
  changeQuantity = (maSP, tangGiam) => { //tăng là true, giảm là false
    // tìm ra sản phẩm chứa maSP = với maSP tăng giảm số lượng click
    console.log('ma sp', maSP)
    console.log('tang giam', tangGiam)

    let cardListUpdate = [...this.state.cardList];
    let index = cardListUpdate.findIndex((spGiohang) => spGiohang.maSP === maSP);
    if(index !== -1){
      if(tangGiam){
        cardListUpdate[index].soLuong += 1;
      }
      else{
        if(cardListUpdate[index].soLuong > 1){
          cardListUpdate[index].soLuong -= 1;
        }
        else{
          alert("so luong tối thiểu phải lớn hơn 1")
        }
      }
    }
    this.setState({cardList: cardListUpdate})
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
        <Card tangGiamSoLuong={this.changeQuantity} cardList={this.state.cardList} handleDeleteProduct={this.handleDeleteProduct} />
        <ProductList productList={this.state.productList} handleProductSelected={this.handleProductSelected} handleBuyProduct={this.handleBuyProduct} />
        {this.state.productSelected ? <SelectedProduct productSelected={this.state.productSelected} /> : null}
        </div>
    );
  }
}
