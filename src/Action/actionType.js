import {getUserList} from '../api'
import {likeDislike} from '../api'

export const FETCH_USERS_LIST   = 'FETCH_USERS_LIST';
export const REQUEST_DATA = 'REQUEST_DATA';
export const ICON_DATA = 'ICON_DATA';

export const fetchUserList = (userList) => 
  ({type: FETCH_USERS_LIST,
    users: userList
  });

export const requestData = () => ({
  type: REQUEST_DATA
});

export const iconData = (userObj) => ({
  type: ICON_DATA,
  payload:userObj
});


  
  