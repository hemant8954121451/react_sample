import axios from 'axios';
import {fetchUserList} from './Action/actionType'
export function getUserList(){
    return dispatch => {
        dispatch(fetchUserList());
        return axios.get("http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2")
          .then(res => {
              console.log('1111',res)
             return  dispatch(fetchUserList(res.data.users))
          }).catch(e=> console.log(e));
          
          
      };
}