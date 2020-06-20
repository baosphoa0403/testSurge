import * as ActionType from "./../constants/ActionType";
let initialState = {
   listMovie: []
}
const movieReducer = (state = initialState, action) => {
   switch (action.type) {
       case ActionType.GET_LIST_MOVIE:
           state.listMovie = action.data
           return {...state};
           break;
   
       default:
           break;
   }
    
    return {...state};
}
export default movieReducer