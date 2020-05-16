import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Public/Person';
import './App.css';

 const app= props  => {

  const [personState,setPersonState] = useState({
    persons:[
      {name:'shubham',age:22},
      {name:'Nency',age:15}
    ]
  });

 const checkbtn=()=>{
  
    setPersonState({
      persons:[
        {name:'shubh',age:22},
        {name:'Nena',age:14}
      ]
    });
  };

 
    return (
      <div className="App">
        <h1>Hello This is my first React App Yeyyyy.</h1>
        <button onClick={checkbtn} >Switch names</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies is - Coding </Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/>
      </div>
    );
    
  
}

export default app;
