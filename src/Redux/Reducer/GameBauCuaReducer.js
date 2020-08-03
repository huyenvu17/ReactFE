import {getRandomInt} from '../../utils/randomInt';
const initialState = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
    { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0 },
    { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0 },
    { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
    { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
    { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
  ],
}
const GameBauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TANG_GIAM': {
      let danhSachCuoc = [...state.danhSachCuoc];
      let index = danhSachCuoc.findIndex(ele => ele.ma === action.ma);
      let { tongTien } = state;
      if (index !== -1) {
        if (action.tangGiam) {
          if (tongTien > 0) {
            danhSachCuoc[index].giaCuoc += 10;
            tongTien -= 10;
          }
        } else {
          if (danhSachCuoc[index].giaCuoc > 0) {
            danhSachCuoc[index].giaCuoc -= 10;
            tongTien += 10;
          }
        }
      }
      //state.danhSachCuoc = danhSachCuoc;
      //state.tongTien = tongTien;
      //return state; // khong bi thay doi địa chỉ => không render lại
      return { ...state, danhSachCuoc, tongTien }; // thay đổi địa chỉ => render lại
    }
    case 'CHOI_GAME': {
      let danhSachCuoc = [...state.danhSachCuoc];
      let {tongTien} = state;
      // tạo xúc sắc ngẫu nhiên
      let xucXac = [
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)],
        danhSachCuoc[getRandomInt(6)]
      ];
      // lấy những con cược
      danhSachCuoc = danhSachCuoc.filter((ele) => ele.giaCuoc > 0 );
      for (let ele of danhSachCuoc) {
        let traLaiTien = xucXac.find((item) => item.ma === ele.ma);
        if(traLaiTien){
          tongTien += ele.giaCuoc;
        }
      }
      // trúng thưởng
      for (let ele of xucXac) {
        let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
        if(trungThuong) {
          tongTien += trungThuong.giaCuoc;
        }
      }
      // xử lý trả lại tiền
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      danhSachCuocUpdate = danhSachCuocUpdate.map((ele) => ({
          ...ele,
          giaCuoc: 0
        }
      ));
      return { ...state, xucXac, tongTien, danhSachCuoc: danhSachCuocUpdate };
    }
    default:
      break;
  }
  return { ...state };
}
export default GameBauCuaReducer;
