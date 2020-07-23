import React, { Component } from 'react'
import {connect} from 'react-redux';

export class SanPham extends Component {
  render() {
  let {sanPham} = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" height={350} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button className="btn btn-success" onClick={() => this.props.xemChiTiet(sanPham)} >Xem chi tiết</button>
        </div>
      </div>
    )
  }
}
// hàm lấy giá trị callback từ store về để đưa dữ liệu lên redux
const mapDispatchToProps = (dispatch) => {
  return {
    xemChiTiet: (sanPham) => { //định nghĩa 1 props cho component này là 1 hàm
      // dùng hàm dispatch của redux đưa sản phẩm lên tất cả reducer
      console.log("spDuocClick", sanPham)
      // dùng hàm dispatch từ redux trả ra => đưa dữ liệu lên reducer xử lý
      const action = {
        type: 'XEM_CHI_TIET', // giá trị bắt buộc phải có
        sanPham
      }
      dispatch(action); // gửi lên reducer
    }
  }

}
export default connect(null, mapDispatchToProps)(SanPham);
