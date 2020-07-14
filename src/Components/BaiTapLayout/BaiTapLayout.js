import React, { Component } from 'react'
import BTHeader from './BTHeader';
import BTSlider from './BTSlider';
import BTProductList from './ProductList/BTProductList';
import BTLaptopList from './BTLaptopList/BTLaptopList';
import BTPromotion from './BTPromotion';

export default class BaiTapLayout extends Component {
  // class có thuộc tính và phương thức
  // nội dung giao diện React class component chứa trong phương thức render
  render() {
    return (
      <div className="bg-dark">
        <BTHeader />
        <BTSlider />
        <BTProductList />
        <BTLaptopList />
        <BTPromotion />
      </div>
    )
  }
}
