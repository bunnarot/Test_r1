import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Components/calculator.component';
class App extends Component {
  constructor(){
    super();
    this.age=21;
    this.name="sutthipong";
    this.state = {name:"sutthipong",
                 age:20};
  }
  getVal(){
    return "getVal";
  }
  onClick(){
    this.setState({name:"BoB"});
  }
  setAge(e){
    const age = e.target.value;
    this.setState({'age':age});
  }
  render() {


    return (
      <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <Calculator />
      </div>


      </div>
    );
  }
}

export default App;
