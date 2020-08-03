import {TANG_GIAM} from '../contants/GameBauCuaConst';
// import * as actionConst from '../contants/GameBauCuaConst';
// actionConst.TANG_GIAM
export function tangGiamAction(ma, tangGiam) {
  return {
    type: TANG_GIAM,
    ma: ma,
    tangGiam: tangGiam
  }
}
