import React, {Component } from 'react'

class UserList extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            isLoading: true,
            users: [],
            error: null
        }
    }
    componentDidMount() {
        fetch('http://www.json-generator.com/api/json/get/cfMwRiaZgy?indent=2')
          .then(response => response.json())
          .then(data => this.setState({ data })
          .catch());
      }
    render() {
        
        return (
        <div>
        User List 
        </div>
        )
    } 
}

export default UserList;
