import React, { Component } from 'react'
import FormValidation from '.'
import {connect} from 'react-redux';

class QuanLySinhVien extends Component {
  renderTable = () => {
    return this.props.mangNguoiDung.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.taiKhoan}</td>
          <td>{item.matKhau}</td>
          <td>{item.hoTen}</td>
          <td>{item.email}</td>
          <td>{item.soDt}</td>
          <td>{item.maNhom}</td>
          <td>
            <button className="btn btn-success mr-2" 
            onClick={() => this.props.dispatch({type: 'CHINH_SUA',item})}>Edit</button>
            <button className="btn btn-danger" type="button"
              onClick={()=> this.props.dispatch({
                type: 'XOA_ND',
                taiKhoan: item.taiKhoan
              })}
            >Delete</button>
          </td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="container">
        <FormValidation />
        <table className="table">
          <thead>
            <tr>
              <th>Tài khoản</th>
              <th>Mật Khẩu</th>
              <th>Họ Tên</th>
              <th>Email</th>
              <th>Số Điện Thoại</th>
              <th>Mã Nhóm</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    mangNguoiDung: state.stateQuanLySinhVienReducer.mangNguoiDung,
    
  }
}

export default connect(mapStateToProps, null)(QuanLySinhVien);
