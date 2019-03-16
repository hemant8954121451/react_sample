import axios from 'axios';
import {fetchUserList, requestData , iconData} from './Action/actionType'
export function getUserList(){
    return dispatch => {
       dispatch(requestData());
        return axios.get("http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2")
          .then(res => {
             return  dispatch(fetchUserList(res.data.users))
          }).catch(e=> console.log('error in fetching data',e));
      };
}

export function likeDislike(userObj){
  
 return dispatch=> dispatch(iconData(userObj))
}
