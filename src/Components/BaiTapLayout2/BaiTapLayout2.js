import React, { Component } from 'react'
import BT2Header from './BT2Header'
import BT2Banner from './BT2Banner'
import BT2ListItem from './BT2ListItem'
import BT2Footer from './BT2Footer'

export default class BaiTapLayout2 extends Component {
  render() {
    return (
      <div>
        <BT2Header />
        <BT2Banner />
        <BT2ListItem />
        <BT2Footer />
      </div>
    )
  }
}
