import React, { Component } from 'react'
import Product from './Product'

export default class ProductList extends Component {

  renderProductItem = () => {
    return this.props.productList.map((item, index)=>{
      return (
        <div className="col-sm-4" key={index}>
            <Product product={item} handleProductSelected={this.props.handleProductSelected} handleBuyProduct={this.props.handleBuyProduct}/>
          </div>
      )
    })
  }
  render() {
    return (
      <div className="row">
          {this.renderProductItem()}
      </div>
    )
  }
}
