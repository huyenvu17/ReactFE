import React, { Component } from 'react'

export default class SelectedProduct extends Component {
  render() {
    return (
      <div className="row">
            <div className="col-sm-5">
              <img className="img-fluid" src={this.props.productSelected.hinhAnh} alt="img" />
            </div>
            <div className="col-sm-7">
              <h3>Thông số kỹ thuật</h3>
              <table className="table">
                <tbody>
                  <tr>
                    <td>Màn hình</td>
                    <td>{this.props.productSelected.manHinh}</td>
                  </tr>
                  <tr>
                    <td>Hệ điều hành</td>
                    <td>{this.props.productSelected.heDieuHanh}</td>
                  </tr>
                  <tr>
                    <td>Camera trước</td>
                    <td>{this.props.productSelected.cameraTruoc}</td>
                  </tr>
                  <tr>
                    <td>Camera sau</td>
                    <td>{this.props.productSelected.cameraSau}</td>
                  </tr>
                  <tr>
                    <td>RAM</td>
                    <td>{this.props.productSelected.ram}</td>
                  </tr>
                  <tr>
                    <td>ROM</td>
                    <td>{this.props.productSelected.rom}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        
    )
  }
}
