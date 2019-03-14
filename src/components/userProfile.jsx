import React, { Component } from 'react'
import '../css/chathistory.css'
import { connect } from 'react-redux'
import check from '../images/check.png'
import close from '../images/close.png'
import { likeDislike } from '../api'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      msgs: [],
      isLoader: false
    }
  }
  
  OnPressLikeIcon(likeflag,user_id){
    const {userObj}  = this.props;
    const userNewArray =  userObj
    if(likeflag==0){
      likeflag=1
    }else{
      likeflag=0;
    }
    const foundIndex = userObj.findIndex(user=>user.id===user_id);
    console.log(foundIndex)
    if(foundIndex!==-1){
      userNewArray[foundIndex].like = likeflag;
      console.log(userNewArray)
    }else{
      userNewArray.push({id:user_id,like:likeflag})
    }
    this.props.storeIconInfo(userNewArray)
  }

  render() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    const { users } = this.props;
    return (
      <div className="content">
        {users.constructor === Array  && users.map((user) => {
          return (
              <div  className="user_style" >
                <img width="280px" height="100px" padding="10px" src= {user.profile} />
                  <span className="left-user-location">Location: {user.location}</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                  <span className="right-user-location">Age:{user.age}</span>
                  <div class="check-close-div">
                  <img id={"like_"+user.id} onClick={(e)=>this.OnPressLikeIcon(1,user.id)}  alt="like" className="left-image" value ="like" title="like" src={check}/>
                  <img id={"unlike_"+user.id} onClick={(e)=>this.OnPressLikeIcon (0,user.id)} alt="dislike" className="right-image" value="dislike" title="dislike" src={close}/></div>
              </div> 
          )
        })
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("Map to state props", state)
  const { users } = state.userReducer
   const {userObj} =  state.iconReducer
  return {
    users,
    userObj
  }
}

const mapDispatchToProps = dispatch => {
  return {
    storeIconInfo: (userNewArray) => dispatch(likeDislike(userNewArray))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
