import {getUserList} from '../api'
export const FETCH_USERS_LIST   = 'FETCH_USERS_LIST';

export const fetchUserList = (userList) => ({
    type: FETCH_USERS_LIST,
    users: userList
  });


  
  