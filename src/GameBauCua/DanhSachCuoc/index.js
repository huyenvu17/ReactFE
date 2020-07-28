import React, { Component } from 'react'
import {connect} from 'react-redux';
class DanhSachCuoc extends Component {


  renderDanhSachCuoc = (list) => {
    return list.map((item, index) => {
      return (
        <div className="card col-4" key={index}>
          <img className="card-img-top" src={item.hinhAnh} alt="Card cap" style={{ height: 200 }} />
          <div className="card-body">
            <div className="d-flex justify-content-around align-items-center">
              <button className="btn btn-info" onClick={() => this.props.tangGiamMucCuoc(item.ma, false)} >-</button>
              <span>{item.giaCuoc}$</span>
              <button className="btn btn-info" onClick={() => this.props.tangGiamMucCuoc(item.ma, true)}>+</button>
            </div>
          </div>
        </div>
      )
    })
  }
  render() {
    const {danhSachCuoc} = this.props;
    return (
      <div className="bau-cua__chon">
          <div className="bau-cua__bang row">
            {this.renderDanhSachCuoc(danhSachCuoc)}
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    // key la props cua component, value la state cua store
    danhSachCuoc: state.stateGameBauCuaReducer.danhSachCuoc
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
      // key la props cua component, value la method gửi action đến reducer
      tangGiamMucCuoc: (ma, tangGiam) => {
        const action = {
          type: 'TANG_GIAM',
          ma: ma,
          tangGiam: tangGiam
        }
        dispatch(action);
      }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
