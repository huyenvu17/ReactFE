import {layDanhSachFilm} from '../contants/QuanLyFilmConst';
import axios from 'axios';
//---------action async---------

export const layDanhSachFilmAjax = () => {
  return dispatch => {
    axios({
      url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
      method: 'GET',
    }).then((result)=>{
      // dispatch({
      //   type: layDanhSachFilm,
      //   danhSachFilm: result.data
      // })
      dispatch(layDanhSachFilmAction(result.data))

    }).catch((error) => {
      console.log(error.response.data)
    })
  }
}


//---------action --------------
export const layDanhSachFilmAction = (danhSachFilm) => ({
  type: layDanhSachFilm,
  danhSachFilm
})
