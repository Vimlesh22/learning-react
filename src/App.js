import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    persons: [{ name: "Vimlesh", age: "29" }, { name: "Vikram", age: "30" }, { name: "Siddhesh", age: "28" }],
    username: "Vikram",
    showPerson: false
  }

  // switchNameHandler = () => {
  //   this.setState({
  //     persons: [{name:"Vimlesh",age:"29"},{name:"Raja",age:"30"},{name:"Siddhesh",age:"28"}]
  //   });  
  // }

  // changeNameHandler = (event) => {
  //   console.log(event)
  //   this.setState({
  //     persons: [{name:"Vimlesh",age:"29"},{name:"Vikram",age:"30"},{name:"Siddhesh",age:"28"}]
  //   });  
  // }

  // changeUserNameHandler = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  togglePerson = () => {
    this.setState({
      showPerson: !this.state.showPerson
    });
  }

  deleteUserHandler = (perosnIndex) => {
    let persons = [...this.state.persons];
    persons.splice(perosnIndex, 1);
    this.setState({
      persons
    });
  }



  render() {

    let persons = null;
    const style = {
      backgroundColor: 'green',
      border: '1px solid blue',
      width: '100px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }
    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    if (this.state.showPerson) {
      const personArray = [...this.state.persons]
      persons = personArray.map((person, index) => {
        return <Person key={index} name={person.name} age={person.age} delete={() => this.deleteUserHandler(index)} />
      });
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: "salmon",
        color: 'black'
      }
    }

    return (
        <div className="App">
          <h1>Hello I'm starting to learn React</h1>
          <p className={classes.join(' ')}>I am running</p>
          <button onClick={this.togglePerson} style={style}>Toggle Person</button>
          {/* {personArrayIterated} */}
          {persons}


          {/* <UserInput change={this.changeUserNameHandler} currentValue={this.state.username}></UserInput>
        <UserOutput username="vimlesh"></UserOutput>
        <UserOutput username={this.state.username} change={this.changeUserNameHandler}></UserOutput>
        <UserOutput></UserOutput> */}
        </div>
    );
  }
}

export default App;
