import { FETCH_USERS_LIST, REQUEST_DATA } from '../Action/actionType';


const initialState = {
    users: []
};

export default function userReducer(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case FETCH_USERS_LIST:
            return {
                ...state,
                users: action.users
            };
        case REQUEST_DATA:
            return {
                ...state
            }
        default:
            return { ...state }
    }
}


