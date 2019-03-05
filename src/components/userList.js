import React, {Component } from 'react'

// import {fetchUserList} from '../Action/actionType'
import {connect} from 'react-redux'
import {getUserList} from '../api'

class UserList extends Component {
    constructor(props){
    super(props);
        this.state = {
            users: [],
            isLoading: true,
            errors: null
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
        console.log(this.props)
        this.props.getUserList();
    }
    render() {
    const {users } = this.props;
    console.log("I have",Array.isArray(users))
      return (
        <React.Fragment>
            <h2>Random User</h2>
            <div>
            {Array.isArray(users) && users.length>0 && (
                users.map(user => {
                    const {  name, age, location} = user;
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
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    console.log("Map to state props",state)
    const {users}  = state.userReducer
    return {
        users: users
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        getUserList :()=>dispatch(getUserList())
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(UserList);
