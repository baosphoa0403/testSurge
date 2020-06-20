import * as ActionType from "./../constants/ActionType";
import Axios from "axios";

export const getListMovieAPI = () => {
    return (dispatch)=>{
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP04"
        })
        .then((rs)=>{
            // dispatch lên store
          dispatch(getListMovie(rs.data));
        })
        .catch((err)=>{
           console.log(err);
        })
    }
}

export const getListMovie = (listMovie) => {
    return {
        type: ActionType.GET_LIST_MOVIE,
        data: listMovie
    }
}
// chynous
export const actEditUser = (user) => {
    return {
        type: ActionType.EDIT,
        data: user
    }
}
export const actDeteUser = (user) => {
    return {
        type: ActionType.DELETE,
        data: user
    }
}
export const actSubmitUser = (user) => {
    return {
        type: ActionType.SUBMIT,
        data: user
    }
}
export const actGetKeyWord = (keyword) => {
    return {
        type: ActionType.SEARCH,
        data: keyword
    }
}