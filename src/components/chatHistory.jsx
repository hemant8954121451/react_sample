import React, {Component } from 'react'
import queryString from 'query-string'

class ChatHistory extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",
            msgs:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
      
    }
    handleChange(e){
        this.setState({text:e.target.value})
    }
    onSubmit(e){
          e.preventDefault()
          console.log('on send')
          axios
          .get("")
          .then((result)=>{
                return result.data.users
          })
          .then(user => {
            this.setState({
              users:user
            });
          })
          .catch(error => this.setState({errors :'error caught'}));
          this.setState({msgs:e.target.value})
    }
    render() {
        const { match: { params } } = this.props;
        return (
          <div className="Input">
            <form onSubmit={this.onSubmit}>
                <div>
                    <h1> You are chatting with {params.username}</h1>
                </div>
                <div className='div_prop'></div>
                <input
                    onChange={this.handleChange}
                    value={this.state.text}
                    type="text"
                    placeholder="Enter your message and press ENTER"
                    autofocus="true"
                />
                <button>Send</button>
            </form>
          </div>
        );
    }
}
export default ChatHistory