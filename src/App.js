import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    rows: 10,
    columns: 10,
    grid: [],
  };
  

  render (){
    return (
    <div className="App">
      <h1 className="head">Snake</h1>
      <div className="snake-container">
        <div className="grid-box" > </div>
      </div>
    </div>
    );
  }
}

export default App;
