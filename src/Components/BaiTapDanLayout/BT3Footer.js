import React, { Component } from 'react'
import StyleDanLayout from './BT3DanLayout.module.css';

export default class BT3Footer extends Component {
  render() {
    return (
      <footer className={`${StyleDanLayout.footerMarginTop} py-5 bg-dark`}>
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2020</p>
        </div>
      </footer>
    )
  }
}
