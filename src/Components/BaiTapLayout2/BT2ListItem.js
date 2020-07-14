import React, { Component } from 'react'
import BT2Item from './BT2Item'

export default class BT2ListItem extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-center">
        <div className="col-lg-3 col-md-6 mb-4">
        <BT2Item />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        <BT2Item />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        <BT2Item />
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
        <BT2Item />
        </div>
      </div>
      </div>

    )
  }
}
