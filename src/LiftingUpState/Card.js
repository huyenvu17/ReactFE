import React, { Component } from 'react'
import CardItem from './CardItem'

export default class Card extends Component {
    renderCardItem = () => {
    return this.props.cardList.map((carditem, index)=>{
      return <CardItem tangGiamSoLuong={this.props.tangGiamSoLuong} carditem={carditem} key={index} index={index} handleDeleteProduct={this.props.handleDeleteProduct} />
    })
  }
  tinhTongTien = () => {
    return this.props.cardList.reduce((tongtien, spGH, index) => {
      return tongtien += spGH.soLuong * spGH.giaBan;
    },0).toLocaleString();
  }
  render() {
    return (
      <div>
          <h2>Card</h2>
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>Hình Ảnh</th>
                <th>Tên sảm phẩm</th>
                <th>Giá bán</th>
                <th>số lượng</th>
                <th>thành giá</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.renderCardItem()}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" />
                <td>Tổng tiền</td>
                <td>{this.tinhTongTien()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
    )
  }
}
