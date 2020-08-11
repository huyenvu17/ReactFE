import { THEM_NGUOI_DUNG } from "../contants/QuanLySinhVienConst";

const initialState = {
  mangNguoiDung: [
    {taiKhoan: 'user01', matKhau: '123', email: 'user1@gmail.com', soDt: '01235', hoTen: 'Nguyen Van A', maNhom: 'GP01'},
    {taiKhoan: 'user02', matKhau: '123', email: 'user2@gmail.com', soDt: '01235', hoTen: 'Nguyen Van B', maNhom: 'GP02'}
  ],
  //nguoiDungEdit: {taiKhoan: '', matKhau: '', email: '', soDt: '', hoTen: '', maNhom: '', edit: false}
  nguoiDungEdit: {taiKhoan: '', matKhau: '', email: '', soDt: '', hoTen: '', maNhom: ''}
}

export default (state = initialState, action) => {
  switch (action.type) {
  case THEM_NGUOI_DUNG: {
    //let mangNguoiDungUpdate = [...state.mangNguoiDung, {...action.nguoiDung, edit: false}];
    let mangNguoiDungUpdate = [...state.mangNguoiDung, action.nguoiDung];
    console.log('mangNguoiDungUpdate', mangNguoiDungUpdate);
    
    return {...state, mangNguoiDung: mangNguoiDungUpdate}
  }
  case 'CHINH_SUA':{
    // lay nguoi dung edit gan vao nguoi dung duoc click
    //state.nguoiDungEdit = {...action.item, edit: true};
    state.nguoiDungEdit = {...action.item};
    return {...state}
  }
case 'CAP_NHAT':{
  let mangNguoiDungUpdate = [...state.mangNguoiDung];
  // mỖi lần click cập nhật sẽ đưa giá trị người dùng nhập vào qua acion.nguoiDung
  let index = mangNguoiDungUpdate.findIndex(nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
  // nếu tìm thấy vị trí người dùng đó trong mảng
  if(index !== -1){
    // gắn giá trị người dùng trong mảng = người dùng gửi lên
    mangNguoiDungUpdate[index] = {...action.nguoiDung}
  }
  //gán mảng người dùng hiện tại = mảng người dùng cập nhật
  state.mangNguoiDung = mangNguoiDungUpdate;
  return {...state};
}
case 'XOA_ND':{
  let mangNguoiDungUpdate = [...state.mangNguoiDung];
  let index = mangNguoiDungUpdate.findIndex(nd => nd.taiKhoan === action.taiKhoan);
  if(index !== -1){
    mangNguoiDungUpdate.splice(index, 1);
  }
  state.mangNguoiDung = mangNguoiDungUpdate;
  return{...state}
}
  default:
    return state
  }
}
