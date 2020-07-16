import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
  state = {
    productList: [
      {
        image: "./img/sp_iphoneX.png",
        name: "iPhone X",
      },
      {
        image: "./img/sp_note7.png",
        name: "Note 7",
      },
      {
        image: "./img/sp_blackberry.png",
        name: "Blackberry",
      },
      {
        image: "./img/sp_vivo850.png",
        name: "Vivo850",
      },
    ]
  }
  renderProductItem = () => {
    return this.state.productList.map((product, index) => {
      return (
        <BTProductItem productItem={product} key={index} />
      )
    })
  }
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {this.renderProductItem()}
          {/* <BTProductItem />
          <BTProductItem />
          <BTProductItem />
          <BTProductItem /> */}
        </div>
      </section>

    )
  }
}
