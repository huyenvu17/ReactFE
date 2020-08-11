import {layDanhSachFilm} from '../contants/QuanLyFilmConst';

const initialState = {
  danhSachFilm: []
}

export default (state = initialState, action) => {
  switch (action.type) {

  case layDanhSachFilm:
    state.danhSachFilm = action.danhSachFilm
    return { ...state }

  default:
    return state
  }
}
