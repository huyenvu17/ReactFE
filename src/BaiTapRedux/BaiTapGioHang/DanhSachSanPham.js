import React, { Component } from 'react'
import SanPham from './SanPham'
import {connect} from 'react-redux';


export class DanhSachSanPham extends Component {

  renderSanPham = () => {
    // lấy props từ compoment cha là mangSanPham render ra các component card
    return this.props.mangSanPham.map((sanPham, index)=>{
      return <div className="col-4" key={index}>
        <SanPham sanPham={sanPham}/>
      </div>
    })
  }
  render() {
    console.log(this.props.spChiTiet)
    return (
      <div>
        <h3>Danh Sách Sản Phẩn</h3>
        <div className="row">
          {this.renderSanPham()}
        </div>
        <h3 style={{marginTop: 20}}>Chi tiết sản phẩm</h3><hr/>
        <div className="row">
          <div className="col-4">
            <img src={this.props.spChiTiet.hinhAnh} height={350} alt={this.props.spChiTiet.hinhAnh} />
          </div>
          <div className="col-8">
          <table className="table">
            <tbody>
            <tr>
              <td>tên SP</td>
              <td>{this.props.spChiTiet.tenSP}</td>
            </tr>
            <tr>
              <td>Màn hình</td>
              <td>{this.props.spChiTiet.manHinh}</td>
            </tr>
            <tr>
              <td>Hệ điều hành</td>
              <td>{this.props.spChiTiet.heDieuHanh}</td>
            </tr>
            <tr>
              <td>Camera trước</td>
              <td>{this.props.spChiTiet.cameraTruoc}</td>
            </tr>
            <tr>
              <td>Camera sau</td>
              <td>{this.props.spChiTiet.cameraSau}</td>
            </tr>
            <tr>
              <td>ram</td>
              <td>{this.props.spChiTiet.ram}</td>
            </tr>
            <tr>
              <td>rom</td>
              <td>{this.props.spChiTiet.rom}</td>
            </tr>
            <tr>
              <td>Giá bán</td>
              <td>{this.props.spChiTiet.giaBan}</td>
            </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}
// đây là hàm lấy state từ redux chuyển thành props của component
const mapStateToProps = state => { //state là rootReducer
  return {
    spChiTiet: state.stateBaiTapGioHang.spChiTiet
  }
}
export default connect(mapStateToProps)(DanhSachSanPham);
