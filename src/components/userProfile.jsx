import React, { Component } from 'react'
import '../css/chathistory.css'
import { connect } from 'react-redux'


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
            <div style={{display:'block',padding:'10px 4px'}}>
              <div  className="user_style" >
                <img width="280px" height="100px" padding="10px" src= {user.profile} />
                  <div style={{fontWeight:'bold'}}>Location: {user.location}</div>
                  <div style={{fontWeight:'bold',float:'right',marginTop:'-15px'}}>Age:{user.age}</div>
              </div>
              <a href="#" class="close"></a>
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
