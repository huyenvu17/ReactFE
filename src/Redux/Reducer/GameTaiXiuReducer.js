import { getRandomInt } from "../../utils/randomInt";

const danhSachXucXac = [
  {ma: "one", classes: "fa fa-dice-one", so: 1},
  {ma: "two", classes: "fa fa-dice-two", so: 2},
  {ma: "three", classes: "fa fa-dice-three", so: 3},
  {ma: "four", classes: "fa fa-dice-four", so: 4},
  {ma: "five", classes: "fa fa-dice-five", so: 5},
  {ma: "six", classes: "fa fa-dice-six", so: 6},
]

const initialState = {
  xucXac: [
    {ma: "one", classes: "fa fa-dice-one", so: 1},
    {ma: "two", classes: "fa fa-dice-two", so: 2},
    {ma: "three", classes: "fa fa-dice-three", so: 3},
  ],
  taiXiu: false, //false la xiu, true la tai
  soBanThang: 0,
  soBanChoi: 0
}
const GameTaiXiuReducer = (state = initialState, actions) => {
  switch(actions.type){
    case 'CHON_TAI_XIU': {
      console.log(actions)
      let {taiXiu} = state;
      taiXiu = actions.taiXiu;
      return {...state, taiXiu};
    }
    case 'CHOI_GAME_XI_NGAU': {
      let xucXac = [
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)],
        danhSachXucXac[getRandomInt(6)]
      ]
      let {soBanChoi, soBanThang, taiXiu} = state;
      let tongXucXac = xucXac.reduce((tong, ele) => (tong += ele.so) ,0);
      if(tongXucXac <=3 && tongXucXac >= 10){
        tongXucXac = false;
      }
      else{
        tongXucXac = true;
      }
      if(taiXiu === tongXucXac){
        soBanThang +=1;
      }
      else{

      }
      soBanChoi++;
      return {...state, xucXac, soBanThang, soBanChoi}
    }
    default:
      break;
  }
  return {...state};
}
export default GameTaiXiuReducer;
