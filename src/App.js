import './App.css'

import React, {Component} from 'react'
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
    </div>
  }
}

export default App;
