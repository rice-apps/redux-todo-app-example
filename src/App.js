import './App.css'

import React, {Component} from 'react'
import Selector from './components/Selector';
import ViewSelected from './components/ViewSelected';

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
      <Selector />
      <ViewSelected />
    </div>
  }
}

export default App;
