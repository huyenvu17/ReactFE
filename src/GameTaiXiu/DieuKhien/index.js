import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionfunction from '../../Redux/actions/GameTaiXiuAction';
export class DieuKhien extends Component {
  renderXucXac = (danhSachXucXac) => {
    return danhSachXucXac.map((item, index) => {
      return (
        <span key={index}><i className={item.classes} style={{ color: 'white', fontSize: 150 }} /></span>
      )
    })
  }
  render() {
    const {danhSachXucXac} = this.props;
    return (
      <div className="xi-ngau__control row text-center mt-4">
          <div className="col-4">
            <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}
             onClick={() => this.props.chonTaiXiu(true)}>
              <img src="./img/tai.PNG" alt="tai" />
            </button>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-around">
            {this.renderXucXac(danhSachXucXac)}
          </div>
          <div className="col-4">
            <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }}
            onClick={() => this.props.chonTaiXiu(false)}>
              <img src="./img/xiu.PNG" alt="xiu" />
            </button>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    danhSachXucXac: state.stateGameTaiXiuReducer.xucXac
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    chonTaiXiu: (taiXiu) => {
      dispatch(actionfunction.chonTaiXiu(taiXiu));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DieuKhien);
