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
            chat:[{id: '1', message: 'how r u?',end:true}]
        };
    }
    
    componentDidMount() {
        console.log('component did mount',this.props)
        this.props.getUserList();
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
    }
    btnTapped(userId,userName,image){ 
       this.props.history.push('/chat-history/'+userId+'/'+userName+'/'+image)
    }
    render() {
        const { users } = this.props; console.log('users data',users);
        return (
                <div>
                    <h2>Random User</h2>
                    {users.length > 0 && (
                        users.map(user => {
                            const { name, age, location, id,profile } = user;
                            return (
                                <div onClick={(e)=>this.btnTapped(id,name,profile,e)} key={name}>
                                    <p>{name}</p>
                                    <p>{age}</p>
                                    <p>{location}</p>
                                    <hr />
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
        users: users
    }
}

const mapDispatchToProps = dispatch => {
    return {
    
        getUserList: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
