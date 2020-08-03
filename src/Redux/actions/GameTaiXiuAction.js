import * as actionConst from '../contants/GameTaiXiuConst';
export function chonTaiXiu(taiXiu) {
  return {
    type: actionConst.CHON_TAI_XIU,
    taiXiu
  }
}

export function choiGame() {
  return {
    type: actionConst.CHOI_GAME_XI_NGAU,
  }
}
