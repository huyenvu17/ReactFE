import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { layDanhSachFilmAjax } from '../Redux/actions/QuanLyFilmAction';
class DanhSachFilm extends Component {
  // state chứa danh sách Film
  // state = {
  //   danhSachFilm: []
  // }
//   biDanh: "phim-khong-ten"
// danhGia: 10
// hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/phim-khong-ten_gp01.jpg"
// maNhom: "GP01"
// maPhim: 1314
// moTa: "AngryBird Cosplay"
// ngayKhoiChieu: "2020-02-06T00:00:00"
// tenPhim: "Phim Không tên"
// trailer: "AngryBird Cosplay"
  renderFilm = () =>{
    console.log('Danh Sach Film');
    return this.props.danhSachFilm.map((film, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left">
          <img className="card-img-top img-fluid" src={film.hinhAnh} alt={film.biDanh} style={{height: 348, objectFit: 'cover'}}/>
          <div className="card-body">
            <p className="card-text">Mã phim: {film.maPhim}</p>
            <h4 className="card-title">{film.tenPhim}</h4>
            <p className="card-text">Ngày Khởi Chiếu: {film.ngayKhoiChieu}</p>
            <p>Đánh Giá: {film.danhGia}</p>
            <p>Trailer: {film.trailer}</p>
            <div>
              <div className="font-weight-bold">Giới Thiệu</div>
              <p className="card-text">{film.moTa}</p>
            </div>
          </div>
        </div>
        </div>
      );
    })
  }
  layDanhSachFilm = () => {
    // xử lý gọi về server
    // var promise = axios({
    //   method: 'GET',
    //   url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
    // });
    // promise.then((result)=>{
    //   console.log('danh sach phim', result.data);
    //   this.setState({
    //     danhSachFilm: result.data
    //   })
    // }).catch((error)=>{
    //   console.log(error.response.data);
    // })
    this.props.dispatch(layDanhSachFilmAjax())
  }
  // lifecycle componentDidMount tự động chạy khi component được load (sau khi render)
  componentDidMount(){
    this.layDanhSachFilm();
  }
  render() {
    return (
      <div className="container">
        <button className="btn btn-success mt-4" onClick={() => this.layDanhSachFilm()}>Lấy danh sách Film</button>
        <h3 className="display-4">Danh Sách Film</h3>
        <div className="row">
          {this.renderFilm()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  danhSachFilm: state.QuanLyFilmReducer.danhSachFilm
})
export default connect(mapStateToProps)(DanhSachFilm);
