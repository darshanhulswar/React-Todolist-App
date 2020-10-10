import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: true
      },
      {
        id: 2,
        title: 'Dinner with friends',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with Boss',
        completed: true
      },
      {
        id: 4,
        title: 'Chatting for a while with Developers Community on Discord',
        completed: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <Todos />
      </div>
    );
  }
}

export default App;
