import React, { Component } from 'react'
import BTLaptopItem from './BTLaptopItem'

export default class BTLaptopList extends Component {
  render() {
    return (
      <section id="laptop" className="container-fluid pt-5 pb-5 bg-light text-dark">
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">
            <BTLaptopItem />
            <BTLaptopItem />
            <BTLaptopItem />
            <BTLaptopItem />
        </div>
      </section>
    )
  }
}
