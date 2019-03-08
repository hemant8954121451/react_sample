import {Component} from "react";
import React from "react";


class Input extends Component {

  // define state
  state = {
    text: ""
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({text: ""});
    this.props.onSendMessage(this.state.text);
  }

  //on change set state
  onChange(e) {
    this.setState({text: e.target.value});
  }
  render() {
    alert('asaa')
    return (
      <div className="Input">
        <form >
          <input
            
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

export default Input;