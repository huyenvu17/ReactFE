import React, { Component } from 'react'
import BTProductItem from './BTProductItem'

export default class BTProductList extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <BTProductItem />
          <BTProductItem />
          <BTProductItem />
          <BTProductItem />
        </div>
      </section>

    )
  }
}
