import React, { Component } from 'react';
import StyleDanLayout from './BT3DanLayout.module.css';
import BT3Header from './BT3Header';
import BT3SideBar from './BT3SideBar';
import BT3Content from './BT3Content';
import BT3Footer from './BT3Footer';
export default class BT3DanLayout extends Component {
  render() {
    return (
      <div className={`${StyleDanLayout.pageMarginTop}`}>
        <BT3Header />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <BT3SideBar />
            </div>
            <div className="col-lg-9">
              <BT3Content />
            </div>
          </div>
        </div>
        <BT3Footer />
      </div>
    )
  }
}
