import React, { Component } from 'react'
import './chathistory.css'

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
    }
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
        msg.push({ type: 'receiver', data: 'Hello, how are you Doing'})
        this.setState({ msgs: msg,text:'' })
    }
    render() {
        const { match: { params } } = this.props;
        const {msgs} =this.state
        const data= msgs.map((obj)=>{
            if(obj.type=='sender')
            return <li style={{float:"right",marginTop:"10px",padding:"30px 20px 50px 25px",borderRadius: "12px",width:'200px',backgroundColor:"#4b286d"}} >{obj.data}</li>
            else
            return <li style={{clear:"both",padding:"10px 10px 10px 15px",width:'200px',borderRadius: "12px",marginLeft:'10px',backgroundColor:'#e8e8eb'}}>{obj.data}</li>
         })
        return (
            <div className="Input">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>You are chatting with {params.username}</h1>
                    </div>
                            &nbsp;&nbsp;&nbsp;
                    <div>
                        <ul class="chat" style={{listStyleType:'none'}}>
                            {data}
                        </ul>
                        &nbsp;&nbsp;&nbsp;
                        <input
                            onChange={this.handleChange}
                            value={this.state.text}
                            type="text"
                            placeholder="Ask me something..."
                            autofocus="true"
                            style={{marginTop:'110px',width: '88%', height: '36px',float:'left',borderRadius:'15px'}}
                        />
                        <button className ="myButton" style={{width: '10%',marginTop:'110px',fontSize:'15px',borderRadius:'28px',backgroundColor:'green'}}>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default ChatHistory