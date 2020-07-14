import React, { Component } from 'react'

export default class RenderWithMap extends Component {
  productList = [
    {id: 1, name: 'iPhone X', price: 1100},
    {id: 2, name: 'iPhone Xr', price: 1150},
    {id: 3, name: 'iPhone Xs', price: 1200},
    {id: 4, name: 'iPhone 11', price: 1300},
  ]

  renderProductList = () => {
    // cach 3
    return this.productList.map((productItem, index) => {
      return (
        <tr key={index}>
          <td>{productItem.id}</td>
          <td>{productItem.name}</td>
          <td>{productItem.price}</td>
          <td><button className="btn btn-danger">Delete</button></td>
        </tr>
      )
    });

    // cach 2
    // let arrProductListJSX = [];
    // arrProductListJSX = this.productList.map((productItem, index) => {
    //   return (
    //     <tr key={index}>
    //       <td>{productItem.id}</td>
    //       <td>{productItem.name}</td>
    //       <td>{productItem.price}</td>
    //       <td><button className="btn btn-danger">Delete</button></td>
    //     </tr>
    //   )
    // })
    // return arrProductListJSX;


    //cách 1
    // for(let i=0; i< this.productList.length; i++){
    //   // duyệt qua mảng lấy ra từng phần tử
    //   let product = this.productList[i];
    //   // từ trProduct tạo ra thẻ tr
    //   let trProduct = <tr key={i}>
    //     <td>{product.id}</td>
    //     <td>{product.name}</td>
    //     <td>{product.price}</td>
    //     <td><button className="btn btn-danger">Delete</button></td>
    //   </tr>
    //   arrProductListJSX.push(trProduct);
    // }
    // return arrProductListJSX;
  }
  render() {
    return (
      <div className="container">
        {/* {
          [<div>123</div>, <div>345</div>]
        } */}
        <h3>Phone List</h3>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderProductList()}
          </tbody>
        </table>
      </div>
    )
  }
}
