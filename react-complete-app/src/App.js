import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [persons, setPersons] = useState([
      { name: 'Max', age: 28 },
      { name: 'Matu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ]);

 // sining a function to a property
  const switchNameHandler = (newName) => {
    const newPersons = [...persons];
    newPersons[0].name = newName;
    setPersons(newPersons);
  };

 const nameChangedHandler = (event,index) => {
    debugger;
    const newPersons = [...persons];
    newPersons[index].name =  event.target.value;
    setPersons(newPersons);
  };

  const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
  };
  return (
    <div className="App">
      <h1>Hi, I'm React App.</h1>
      <p>This is really working!</p>
      <button
      style={style} // adding a style property
      onClick={()=>switchNameHandler('Maximilian')}>Switch Name
      </button>
      {persons.map((person,index) =>  <Person
       name={person.name}
       age={person.age}
       key={`${person.name}${index}`}
       click={()=> switchNameHandler(`${person.name}`)}
       changed={e=>nameChangedHandler(e,index)} >
       My Hobbies: Dancing
       </Person>)}
    </div>
  );
}

export default App;