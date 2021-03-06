import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../api'
import 'react-chat-widget/lib/styles.css';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errors: null,
        };
    }
    componentDidMount() {
        console.log('component did mount',this.props)
        this.props.getUserList();
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
    }
    btnTapped(userId,userName,image,age,location){ 
        const userObj ={
            userId,
            userName,
            image,
            age,
            location
        };
        localStorage.setItem("userInfo", JSON.stringify(userObj));

       this.props.history.push('/chat-history/'+userId)
    }
    render() {
        const { users } = this.props; console.log('users data',users);
        return (
                <div>
                    <h2 style={{textAlign:'center'}}>Xavient Chatbot Users</h2><hr />
                    <div className="user-list-header">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Location</p>
                    </div>   
                    {users.length > 0 && (
                        users.map(user => {
                            const { name, age, location, id,profile} = user;
                            return (
                                <div className="my-user-list" onClick={(e)=>this.btnTapped(id,name,profile,age,location,e)} key={name}>
                                
                                   <div> <p >{name}</p></div>
                                    <div><p>{age}</p></div>
                                    <div><p>{location}</p></div>
                                    
                                </div>
                               
                            );
                        })
                    )}
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

const mapDispatchToProps = dispatch => {
    return {
        getUserList: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
