import React, { Component } from 'react';
import './gamebaucua-style.css';
import {connect} from 'react-redux';
import DanhSachCuoc from './DanhSachCuoc';
import XucXac from './XucXac';
import * as actionConst from '../Redux/contants/GameBauCuaConst';

class GameBauCua extends Component {
  render() {
    const {tongtien, choiGame} = this.props;
    return (
      <div className="bau-cua">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <div className="bau-cua__tien font-weight-bold">Tổng Tiền : {tongtien}$</div>
            <h2 className="text-center text-danger">Bầu Cua</h2>
            <div><btn className="btn btn-info" onClick={() => choiGame()}>Chơi Game</btn></div>
          </div>
          <div className="row">
            <div className="col-md-12 col-lg-7">
              <DanhSachCuoc />
            </div>
            <div className="col-md-12 col-lg-5">
              <XucXac />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    // key la props cua component, value la state cua store
    tongtien: state.stateGameBauCuaReducer.tongTien,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    choiGame: () => {
      const action = {
        type: actionConst.CHOI_GAME,
      };
      dispatch(action);
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GameBauCua);
