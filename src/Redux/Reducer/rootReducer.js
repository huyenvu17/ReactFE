import {combineReducers} from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer';
import GameBauCuaReducer from './GameBauCuaReducer';

// stroe tổng của ứng dụng chứa tất cả các state của ứng dụng
const rootReducer = combineReducers({
  // nơi khai báo các state theo từng nghiệp vụ
  stateBaiTapGioHang: BaiTapGioHangReducer,
  stateGameBauCuaReducer: GameBauCuaReducer
});

export default rootReducer;
