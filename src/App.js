import React, {Component } from 'react'
import MenuCapsion from './components/menuCapsion'
import Messages from "./components/message";


class App extends Component {

  render() {
    

    return (
      <div>
        {/* <div>Header</div> */}
        <MenuCapsion />
        {/* <div>Footer</div> */}
      </div>
    )
  }
}

export default App;
