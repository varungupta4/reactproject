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
    otherState: "Some Other",
    showHidden: false
  }

 deletePersonhandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
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
  toggleChangeHandler = () => {
    const doseShow = this.state.showHidden;
    this.setState({showHidden: !doseShow});
  }

  render() {
    const style = {
      backgroundColor: 'red',
      border: '1px solid #ccc',
      color: '#fff',
      padding: '10px',
    };
    let person = null;
    if(this.state.showHidden){
      person = (<div>
        {
          this.state.persons.map((person, index)=>{
            return <Person 
            click={()=>this.deletePersonhandler(index)}
            name={person.name} 
            age={person.age} />
          })
        }
        </div>);
    } 

    return (
      <div className="App">
        <h1>Welcome To My First Reach Code!</h1>
        <button onClick={this.toggleChangeHandler} style={style}>Switch name</button>
        {person}

      </div>
    );
  }
  // return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Hi This is my custom!!!'));
}

export default App;
