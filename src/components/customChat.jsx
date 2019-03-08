import React, {Component } from 'react'

class CustomChat extends Component {
    render() {
        return (
          <div className="Input">
            <form onSubmit={e => this.onSubmit(e)}>
              <input
                onChange={e => this.onChange(e)}
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
export default CustomChat