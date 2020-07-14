import React, { Component } from 'react';
import StyleDanLayout from './BT3DanLayout.module.css';
import BT3ProductItem from './BT3ProductItem';

export default class BT3ProductList extends Component {
  render() {
    return (
      <div className="row">
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
        <div className={`${StyleDanLayout.itemMarginVertical} col-lg-4`}>
          <BT3ProductItem />
        </div>
      </div>
    )
  }
}
