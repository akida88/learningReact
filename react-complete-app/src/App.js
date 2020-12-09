import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [persons, setPersons] = useState([
      { name: 'Max', age: 28 },
      { name: 'Matu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]);
  const [showPersons,setShowPersons] = useState(false);
 // sining a function to a property
  const showPersonsHandler = (e) => {
    e.persist();
    const current = e.target.style['background-color'];
    const background = current ==='salmon'? 'green':"red";
    e.target.style.background = background;
    setShowPersons(!showPersons);
  };

 const nameChangedHandler = (event, index) => {
    // debugger;
    const newPersons = [...persons];
    newPersons[index].name = event.target.value;
    setPersons(newPersons);
  };

  const deletePersonHandler = (personIndex) => {
    persons.splice(personIndex, 1);
    setPersons([...persons]);
  }
  
  // render () {
    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        hover: {
          backgroundColor: 'pink',
          color: 'black',
        }
    };

    // style.backgroundColor = 'red';
    // style[':hover']: = {
    //   backgroundColor: 'salmon',
    //   color: 'black'
    // }
  

    // (style.backgroundColor = 'red') {
    //   style[':hover'] = {
    //     backgroundColor: 'salmon',
    //     color: 'black'
    //   };
    //}

    // if (backgroundColor = 'red') {
    //   return (hover: 'salmon')
    // }

    // let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }
   
    const changeBackgroundOnEnter=(e)=> {
      e.persist();
      const current = e.target.style['background-color'];
      const  onHover = current==="green"?"lightgreen":"salmon"
        e.target.style.background = onHover;
    }

    const changeBackgroundOnLeave=(e)=> {
      e.persist();
      const current = e.target.style['background-color'];
      const  onHover = (current==="lightgreen"|| current==="green")?"green":"red"
       //true|false  const x =  ""==="x" ?"x":"y";
       //== === 
      //  const y = 2 == "2"; //true
      //  const x= 2==="2";//false
      //  const z = Object.is(2,"2");
      //  console.log(z);
      //  console.log(y);
      //  console.log(x);
       debugger;
        e.target.style.background = onHover;
    }
    return (
        <div className="App">
          <h1>Hi, I'm React App.</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style} // adding a style property
           onClick={ (e)=>showPersonsHandler(e)}
           onMouseEnter={changeBackgroundOnEnter}
           onMouseLeave={changeBackgroundOnLeave}
           >
             Show persons
          </button>

           {showPersons && persons.map((person, index) =>  <Person
           click={() => deletePersonHandler(index)}
           name={person.name}
           age={person.age}
           key={`${person.name}${index}`}
           changed={nameChangedHandler}
          >
          My Hobbies: Dancing
          </Person>)}
        </div>
    );
  }

export default App;