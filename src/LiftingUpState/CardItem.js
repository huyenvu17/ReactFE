import React, { Component } from 'react'

export default class CardItem extends Component {
  render() {
    let {carditem, index} = this.props
    return (
      <tr key={index}>
        <td>{carditem.maSP}</td>
        <td>
          <img
            src={carditem.hinhAnh}
            alt={carditem.hinhAnh}
            style={{ width: 100 }}
          />
        </td>
        <td>{carditem.tenSP}</td>
        <td>{carditem.giaBan}</td>
        <td>
          <button className="btn btn-info">-</button>
          <span className="mx-2">{carditem.soLuong}</span>
          <button className="btn btn-info">+</button>
        </td>
        <td>{carditem.giaBan * carditem.soLuong}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.props.handleDeleteProduct(carditem)}>xóa</button>
        </td>
      </tr>
    );
  }
}
