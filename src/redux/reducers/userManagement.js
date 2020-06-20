import * as ActionType from "./../constants/ActionType";
let initialState = {
    userList: [
        {
          id: 1,
          name: "Dinh Phuc Nguyen",
          username: "dpnguyen",
          email: "dpnguyen@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 2,
          name: "Nguyen Dinh Phuc",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        },
        {
          id: 3,
          name: "Bao",
          username: "nguyendp",
          email: "nguyendp@gmail.com",
          phoneNumber: "1123123213",
          type: "VIP"
        }
      ],
      userEdit: null,
      keyWord: "",
    
}
const userManagement = (state = initialState, action) => {
  // console.log(action);
      
  switch (action.type) {
    case ActionType.DELETE:
     
      // cập nhật mảng
      let userListCapNhat = [...state.userList];
      // tìm vị trí 
      let index = userListCapNhat.findIndex((user)=>{
        return user.id === action.data.id; 
      })
      console.log(index);
      
      userListCapNhat.splice(index, 1);
      // cập nhật lại he
      state.userList = userListCapNhat;
      return {...state}
      case  ActionType.SUBMIT:
        if (action.data.id) {
          // edit
          // tìm vị trí 
          let index = state.userList.findIndex(user => user.id === action.data.id);
          console.log(index);
          if (index !== -1) {
             let userListCapNhat = [...state.userList];
             userListCapNhat[index] = action.data;
             state.userList = userListCapNhat
          }
        }else{
          // add
           const userAdd = { ...action.data };
           userAdd.id = Math.floor(Math.random() * 7) + 3;
          //  console.log(userAdd.id);
           state.userList = [...state.userList, userAdd];
        }
        return {...state}
        case ActionType.EDIT:
          console.log(action);
          state.userEdit = action.data;
          return {...state}
        case ActionType.SEARCH:
           state.keyWord = action.data;
          return {...state}
    default:
       break;
  }
  return {...state}
   
}
export default userManagement;
