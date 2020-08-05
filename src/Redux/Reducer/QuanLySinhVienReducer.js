import { THEM_NGUOI_DUNG } from "../contants/QuanLySinhVienConst";

const initialState = {
  mangNguoiDung: [
    {taiKhoan: 'user01', matKhau: '123', email: 'user1@gmail.com', soDt: '01235', hoTen: 'Nguyen Van A', maNhom: 'GP01'}
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
  case THEM_NGUOI_DUNG: {
    let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
    console.log('mangNguoiDungUpdate', mangNguoiDungUpdate);
    // let index = mangNguoiDungUpdate.findIndex(x => x.taiKhoan === action.taiKhoan);
    // if(index !== -1){
    //   alert('tai khoan da ton tai')
    //   return
    // }
    return {...state, mangNguoiDung: mangNguoiDungUpdate}
  }

  default:
    return state
  }
}
