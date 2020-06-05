import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// function App() {
class App extends Component {
  state = {
    persons: [
      { name: "Jessica", age: 3 },
      { name: "Deepika", age: 30 },
      { name: "Pardeep", age: 30 },
    ],
    otherState: "Some Other"
  }

  switchNameHandler = (newName) => {
    // console.log("Hello Clicked!");
    this.setState({
      persons: [
        { name: newName, age: 3 },
        { name: "Deepika Kumari", age: 30 },
        { name: "Pardeep Sharma", age: 30 },
      ]
    })
  }
  changeHandler = (event) => {
    // console.log("Hello Clicked!");
    this.setState({
      persons: [
        { name: "Jess", age: 3 },
        { name: event.target.value, age: 30 },
        { name: "Pardeep Sharma", age: 30 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome To My First Reach Code!</h1>
        <button onClick={this.switchNameHandler.bind(this, "Hello Buddy!!")}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click= {this.switchNameHandler.bind(this, "Hello!!")}
          change={this.changeHandler}>Bale Bale!!</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>I am Developer!</Person>
      </div>
    );
  }
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi This is my custom!!!'));
}

export default App;
