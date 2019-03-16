import { ICON_DATA } from '../Action/actionType';

const initialState = {
    userObj: [],
};

export default function iconReducer(state = initialState, action) {
    switch (action.type) {
        case ICON_DATA:
            return {
                ...state,
                userObj: action.payload
            };
        default:
            return { ...state }
    }
}


