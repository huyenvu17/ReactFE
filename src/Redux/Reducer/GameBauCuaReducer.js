
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
    case 'TANG_GIAM':
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
    default:
      break;
  }
  return { ...state };
}
export default GameBauCuaReducer;
