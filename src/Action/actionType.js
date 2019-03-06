import {getUserList} from '../api'
export const FETCH_USERS_LIST   = 'FETCH_USERS_LIST';
export const REQUEST_DATA = 'REQUEST_DATA';

export const fetchUserList = (userList) => //alert(userList) 
  ({type: FETCH_USERS_LIST,
    users: userList
  });

  export const requestData = () => ({
    type: REQUEST_DATA
  });


  
  