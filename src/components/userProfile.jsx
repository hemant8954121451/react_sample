import React, { Component } from 'react'
import '../css/chathistory.css'
import { connect } from 'react-redux'
import check from '../images/check.png'
import close from '../images/close.png'

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "",
      msgs: [],
      isLoader: false
    }
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
                  <img alt="like" className="left-image" src={check}/>
                  <img alt="dislike" className="right-image" src={close}/>
                  </div>
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
  return {
    users
  }
}

export default connect(mapStateToProps, null)(UserProfile);
