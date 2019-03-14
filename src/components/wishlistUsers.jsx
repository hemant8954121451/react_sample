import React, { Component } from 'react'
import '../css/chathistory.css'
import { connect } from 'react-redux'
import check from '../images/check.png'
import close from '../images/close.png'
import { likeDislike } from '../api'

class WishlistUser extends Component {
    constructor(props){
        super(props)
        this.getMatch = this.getMatch.bind(this)
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
    getMatch(users, userObj) {
        var userWhishlist=[];
        for ( var i = 0; i < users.length; i++ ) {
            for ( var e = 0; e < userObj.length; e++ ) { 
               if ( users[i].id === userObj[e].id && userObj[e].like==0 ){
                userWhishlist.push(users[i])
               } 
            }
        }
        return userWhishlist;
    }
    render() {
        console.log('========================================')
        const {users} = this.props;
        const {userObj} = this.props;
        const whislistUsers=  this.getMatch(users,userObj)
        return (
            <div className="content">
            {Array.isArray(whislistUsers)  && whislistUsers.map((user) => {
                return (
                    <div  className="user_style" >
                      <img width="280px" height="100px" padding="10px" src= {user.profile} />
                      <span style={{display:'block', color:'black'}}>Name: {user.name}</span>
                        <span className="left-user-location">Location: {user.location}</span>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        <span className="right-user-location">Age:{user.age}</span>
                        <div class="check-close-div"> 
                            <img id={"unlike_"+user.id} onClick={(e)=>this.OnPressLikeIcon (0,user.id)} alt="dislike" className="right-image" value="dislike" title="dislike" src={close}/>
                        </div>
                    </div> 
                )
              })
            } 
           </div> 
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
      storeIconInfo: (userNewArray) => dispatch(likeDislike(userNewArray))
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

export default connect(mapStateToProps, mapDispatchToProps)(WishlistUser);

