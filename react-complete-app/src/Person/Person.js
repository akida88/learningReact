//    function person() {
//       return <h2>
//    }

// creating a variable - var person = function()

// using js6 for react and creating a variable with const
// const = arrow function sintax for react
import React from 'react';
import styled from 'styled-components';

//import './Person.css';
const StyledDiv = styled.div`
   width: 60%;
   margin: 16px auto;
   border: 1px solid #eee;
   box-shadow: 0 2px 3px #ccc;
   padding: 16px;
   text-align: center;

   @media (min-widthL 500px) {
      width: 450px;
   }
`;

// const person = props => {}
const person = ( {click,name,age,children} ) => {
   const style = {
      '@media (min-width:500px)': {
         width: '450px'
      }
   };
   return (
     // <div className="Person" style={style}>
      <StyledDiv>
         <p onClick={click}>I'm {name} and I am {age} years old!</p>
         <p>{children}</p>
         <input type="text"   defaultValue={name} />
      </StyledDiv>
    );
};

// to call this element we need to import React from the react package/ look the import line

export default person;
