import './App.css'

import React, {Component} from 'react'
import ColorSelectControl from './components/ColorSelectControl'
import CompleteTodoDisplay from './components/CompleteTodoDisplay';
import IncompleteTodoDisplay from './components/IncompleteTodoDisplay';

class App extends Component {
  render() {
    return <div className="App" style={{ display: "inline" }}>
      <ColorSelectControl />
      <IncompleteTodoDisplay />
      <CompleteTodoDisplay />
    </div>
  }
}

export default App;
