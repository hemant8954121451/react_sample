import React, { Component } from 'react'
import '../css/chathistory.css'
import  img  from '../images/icon.svg'

class ChatHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            msgs: [],
            isLoader:false
        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentDidMount() {
        const msg = this.state.msgs;
        if(msg.length==0){
            msg.push({ type: 'receiver', data: 'Hi there! Welcome to Chat Bot.' })
        }
        this.setState({ msgs: msg })
    }
    handleChange(e) {
        console.log('handle change')
        this.setState({ text: e.target.value })
    }
    handleDate(){
        var date= new Date()
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime
    }
   
    onSubmit(e) {
        e.preventDefault()
        this.setState({isLoader:true})
        const msg = this.state.msgs;
        msg.push({ type: 'sender', data: this.state.text,time:this.handleDate(new Date())})
        setTimeout(function(){
            let time = this.handleDate(new Date())
            msg.push({ type: 'receiver', data: 'Hello, how are you Doing',time:time})
            this.setState({ msgs: msg,text:'' ,isLoader:false})
        }.bind(this),500)
        
    }
    render() {
        const jsonObj = localStorage.getItem('userInfo')
        let userInfo='';
        if(jsonObj!=null){
            userInfo=   JSON.parse(jsonObj)
            console.log(userInfo)
        }else{
            this.props.history.push('/')  
        }
        const { match: { params } } = this.props;
        const {msgs} =this.state;
        const data= msgs.map((obj)=>{
            if(obj.type=='sender')
            return <li  style={{color:"white",float:"right",marginTop:"10px",padding:"30px 20px 50px 25px",borderRadius: "12px",width:'200px',backgroundColor:"#4b286d"}} >{obj.data}<span style={{display: "block",marginTop: "21px",color: "gray"}}> {obj.time}</span></li>
            else
            return <li style={{clear:"both",padding:"10px 10px 10px 15px",width:'200px',borderRadius: "12px",marginLeft:'10px',backgroundColor:'#e8e8eb'}}>{obj.data} <span style={{display: "block",marginTop: "21px",color: "gray"}}> {obj.time}</span></li>
         })
        return (
            <div className="Input">
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h1>You are chatting with {userInfo.userName} <img width="50px" height="50px" src= {userInfo.image} /></h1>
                        <h2 style={{textAlign:'center'}}>Age: {userInfo.age} , Location: {userInfo.location}</h2>
                    </div>
                            &nbsp;&nbsp;&nbsp;
                    <div>
                        <ul class="chat" style={{listStyleType:'none'}}>
                            {data}
                        </ul>
                        {this.state.isLoader&& <div class="loader"></div>}
                        &nbsp;&nbsp;&nbsp;
                        <input
                            onChange={this.handleChange}
                            value={this.state.text}
                            type="text"
                            placeholder="Ask me something..."
                            autofocus="true"
                            style={{marginTop:'-15px',width: '88%', height: '36px',float:'left',borderRadius:'15px',fontSize:'18px'}}
                        />
                        <button className ="myButton" style={{width: '10%',marginTop:'-15px',fontSize:'15px',borderRadius:'28px',backgroundColor:'green'}}>Send</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default ChatHistory