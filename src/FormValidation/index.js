import React, { Component } from 'react'
import {connect} from 'react-redux';
import { THEM_NGUOI_DUNG } from '../Redux/contants/QuanLySinhVienConst';
class FormValidation extends Component {

  state = {
    values: {
      taiKhoan: '',
      matKhau: '',
      soDt: '',
      hoTen: '',
      email: '',
      maNhom: 'GP16'
    },
    errors: {
      taiKhoan: '',
      matKhau: '',
      soDt: '',
      hoTen: '',
      email: '',
      maNhom: ''
    }
  }
  handleChange = (event) => {
    // let value = event.target.value ; // event.target là thẻ (component) xảy ra sự kiện onChange
    // let name = event.target.name;
    let {name, value} = event.target;
    let label = event.target.getAttribute('label');
    let type = event.target.getAttribute('type');
    // tách giá trị values và errors của state ra xử lý riêng
    let newValues = {...this.state.values, [name]: value};
   // console.log(type)
    //xử lý error
    //kiểm tra trống
    let errorMess = '';
    if(value.trim() === ''){
      errorMess = label + ' không được bỏ trống!';
    }
    // kiểm tra nhập số
    if (type === 'phone') {
      let regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value)) {
        errorMess += ` ${label} chỉ được phép nhập số`
      }
    }
    // kiểm tra email
    if( type === 'email'){
      let regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!regexEmail.test(value)){
        errorMess = `${label} không hợp lệ`
      }
    }
    let newErrors = {...this.state.errors, [name]: errorMess};
   // console.log('taiKhoan', value);
   // console.log('name', name);
    this.setState({
      //[name]: value
      values: newValues,
      errors: newErrors
    },
     //() => {console.log('state', this.state)}
     )
    
  }
  handleSubmit = (event) => {
    // ngăn sự kiện reload lại form
    event.preventDefault();
    let {values, errors} = this.state;

    // duyệt các trường values của state
    for(let key in values){
      if(values[key].trim() === ''){
        alert('Dữ liệu không hợp lệ!');
        return;
      }
    }
    // duyệt các trường errors của state
    for(let key in errors){
      if(errors[key].trim() !== ''){
        alert('Dữ liệu không hợp lệ!');
        return;
      }
    }
    // submit lên reducer thêm người dùng vào mảng
    this.props.dispatch({
      type: THEM_NGUOI_DUNG,
      nguoiDung: this.state.values
    })
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="card text-white bg-light text-dark mt-3">
          <div className="card-header font-weight-bold bg-dark text-light">Form Đăng Ký</div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="col-6">
                  <div className="form-group">
                    <p>Tài khoản</p>
                    <input label="Tài khoản" className="form-control" name="taiKhoan" onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.taiKhoan}</p>
                  </div>
                  <div className="form-group">
                    <p>Mật khẩu</p>
                    <input label="Mật khẩu" type="password" className="form-control" name="matKhau" onChange={this.handleChange}/>
                    <p className="text text-danger">{this.state.errors.matKhau}</p>
                  </div>
                  <div className="form-group">
                    <p>Số điện thoại</p>
                    <input label="Số điện thoại" type="phone" className="form-control" name="soDt" onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.soDt}</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-group">
                    <p>Họ tên</p>
                    <input label="Họ tên" className="form-control" name="hoTen" onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.hoTen}</p>
                  </div>
                  <div className="form-group">
                    <p>Email</p>
                    <input label="Email" type="email" className="form-control" name="email" onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.email}</p>
                  </div>
                  <div className="form-group">
                    <p>Mã nhóm</p>
                    <input label="Mã Nhóm" className="form-control" name="maNhom" onChange={this.handleChange} />
                    <p className="text text-danger">{this.state.errors.maNhom}</p>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-dark">Đăng ký</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default connect(null)(FormValidation);
