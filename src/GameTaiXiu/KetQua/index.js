import React, { Component } from 'react'
import {connect} from 'react-redux';
export class KetQua extends Component {
  render() {
  const {taiXiu, soBanThang, soBanChoi} = this.props;
  const taiXiuChon = taiXiu ? "Tài" : "Xỉu";
    return (
      <div className="xi-ngau__ket-qua text-center mt-4" style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
        <p>
          Bạn Chọn : <span style={{ color: '#f5cc74', fontSize: 35 }}>{taiXiuChon}</span>
        </p>
        <p>
          Số Bàn Thắng : <span style={{ color: '#f5cc74', fontSize: 35 }}>{soBanThang}</span>
        </p>
        <p>
          Tổng Số Bàn Chơi :
      <span style={{ color: '#f5cc74', fontSize: 35 }}>{soBanChoi}</span>
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    taiXiu: state.stateGameTaiXiuReducer.taiXiu,
    soBanThang: state.stateGameTaiXiuReducer.soBanThang,
    soBanChoi: state.stateGameTaiXiuReducer.soBanChoi,
  }
}
export default connect(mapStateToProps, null)(KetQua);
