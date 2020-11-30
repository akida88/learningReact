//    function person() {
//       return <h2>
//    }

// creating a variable - var person = function()

// using js6 for react and creating a variable with const
// const = arrow function sintax for react
import React from 'react';

import './Person.css';

const person = ( {click,name,age,children,changed} ) => {
   return (
      <div className="Person">
         <p onClick={click}>I'm {name} and I am {age} years old!</p>
         <p>{children}</p>
         <input type="text" onChange={changed}  value={name} />
      </div>
    )
};

// to call this element we need to import React from the react package/ look the import line

export default person;
