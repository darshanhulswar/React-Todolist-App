import React, { Component } from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hi I'm React App Learning React</h1>
//     </div>
//   );
// }

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, I'm React App With Extended Class</h1>
    //   </div>
    // )

    return React.createElement('div', { className: 'App' },
      React.createElement('h1', null, "Hello does this work??")
    )
  }
}

export default App;
