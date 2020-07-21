import React, { Component } from 'react'
import CardItem from './CardItem'

export default class Card extends Component {
    renderCardItem = () => {
    return this.props.cardList.map((carditem, index)=>{
      return <CardItem carditem={carditem} key={index} index={index} handleDeleteProduct={this.props.handleDeleteProduct} />
    })
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
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>32300000</td>
              </tr>
            </tfoot>
          </table>
        </div>
    )
  }
}
