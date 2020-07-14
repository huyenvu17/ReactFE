import React, { Component } from 'react'
import styleDataBinding from './DataBinding.module.css'
export default class DataBinding extends Component {
  // thuộc tính
  sanPham = {
    ma: 1,
    tenSP: 'iPhone X',
    gia: 1000,
    hinhAnh: "https://picsum.photos/200/200"
  }
  //phương thức
  renderThongTin = () => {
    return(
      <div className="w-25">
          <div className="card">
          <img className="card-img-top" src={this.sanPham.hinhAnh} />
          <div className="card-body">
            <h4 className={`${styleDataBinding.header} card-title`}>{this.sanPham.tenSP}</h4>
            <p className="card-text">{this.sanPham.gia}</p>
          </div>
          </div>
        </div>
    )
  }
  // render là phương thức có sẵn của component để hiển thị giao diện
  render() {
    // binding dữ liệu là biến
    let title = "Cybersoft";
    let stringImg = "https://picsum.photos/200/200";
    let hocVien = {
      ma: 1,
      ten: 'Nguyen Van A'
    }
    // binding dữ liệu là hàm, nội dung hàm phải trả về 1 số, chuỗi  hoặc thẻ html hoăc component có duy nhát 1 thẻ bao phủ
    const renderImg = () => {
      // return về component
      return (
        <div><img src={stringImg} /></div>
      )
    }
    return (
      <div className="text-center">
        {this.renderThongTin()}
        <h1 id="title" className="titleDemo">{title}</h1>
        <img src={stringImg} alt={stringImg} />
        <div className="card w-25">
          <img className="card-img-top" src={stringImg} />
          <div className="card-body">
            <h4 className="card-title">{hocVien.ma}</h4>
            <p className="card-text">{hocVien.ten}</p>
          </div>
        </div>
        <div className="text-center">
            {renderImg()}
          </div>
      </div>
    )
  }
}
