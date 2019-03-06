import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserList } from '../api'
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
//import {ChatBot} from 'react-simple-chatbot';

class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            errors: null,
            chat:[{id: '1', message: 'how r u?',end:true}]
        };
    }
    // getUsers() {
    //     axios
    //       .get("")
    //       .then((result)=>{
    //             return result.data.users
    //       })
    //       .then(user => {
    //         this.setState({
    //           users:user
    //         });
    //       })
    //       .catch(error => this.setState({errors :'error caught'}));
    // }
    componentDidMount() {
        console.log('component did mountsss',this.props)
        this.props.getUserList();
        addResponseMessage("Welcome to this awesome chat!");
    }
    handleNewUserMessage = (newMessage) => {
        console.log(`New message incomig! ${newMessage}`);
        addResponseMessage("hi how");
      }
    render() {
        const { users } = this.props;
       return (
            <div>
                <h2>Random User</h2>
                <Widget
          handleNewUserMessage={this.handleNewUserMessage}/>
                {users.length > 0 && (
                    users.map(user => {
                        const { name, age, location } = user;
                        return (
                            <div key={name}>
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
