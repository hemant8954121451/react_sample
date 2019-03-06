import axios from 'axios';
import {fetchUserList, requestData} from './Action/actionType'
export function getUserList(){
    return dispatch => {
       dispatch(requestData());
        return axios.get("http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2")
          .then(res => {
             // alert('api response')
             return  dispatch(fetchUserList(res.data.users))
          }).catch(e=> console.log('error in fetching data',e));
          
          
      };
}