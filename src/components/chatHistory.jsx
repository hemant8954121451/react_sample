import React, { Component } from 'react'
import './chathistory.css'
//import queryString from 'query-string'
import axios from 'axios'

class ChatHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            body: "Connecting...",
            text: "",
            msgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        const message = { type: 'receiver', data: 'Welcome to Chat Bot' };
    }
    //after rendering the page
    componentDidMount() {
        const msg = this.state.msgs;
        if(msg.length==0){
            msg.push({ type: 'receiver', data: 'Welcome to Chat Bot' })
        }
        this.setState({ msgs: msg })
    }
    handleChange(e) {
        console.log('handle change')
        this.setState({ text: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const msg = this.state.msgs;
        msg.push({ type: 'sender', data: this.state.text})
        msg.push({ type: 'receiver', data: 'Hello how are you'})
        this.setState({ msgs: msg,text:'' })
    }
    render() {
        const { match: { params } } = this.props;
        const {msgs} =this.state
        const data= msgs.map((obj)=>{
            if(obj.type=='sender')
            return <li>{obj.data}</li>
            else
            return <li style={{marginLeft:'20px'}}>{obj.data}</li>
         })
        return (
            <div className="Input">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>You are chatting with {params.username}</h1>
                    </div>
                    <div>Connecting...</div>
                            &nbsp;&nbsp;&nbsp;
                    <div>
                        <ul id="chat" style={{listStyleType:'none'}}>
                           {data}
                            {/* <li className='sender'><div><span className="author">Sender:</span> Hello </div></li>
                            <li className='receiver'><div><span className="author">Receiver:</span> How are you</div></li> */}
                        </ul>
                        &nbsp;&nbsp;&nbsp;
                        <input
                            onChange={this.handleChange}
                            value={this.state.text}
                            type="text"
                            placeholder="Enter your message and press ENTER"
                            autofocus="true"
                            style={{width: '50%', height: '20px'}}
                        />
                        <button style={{}}>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default ChatHistory