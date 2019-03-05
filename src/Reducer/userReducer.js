import { FETCH_USERS_LIST } from '../Action/actionType';


const initialState = {
    users: []
};

export default function userReducer(state = initialState, action) {
    console.log(action)
    switch(action.type) {
      case FETCH_USERS_LIST:
      console.log({
        ...state,
       users:action.users
    
      })
        return {
          ...state,
         users:{...action.users}
      
        };
        default:
        return {...state}
    }
}  


