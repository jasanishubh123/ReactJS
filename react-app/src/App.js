import React, { useState } from 'react';
import logo from './logo.svg';
import Person from './Public/Person';
import './App.css';

 const app= props  => {

  const [personState,setPersonState] = useState({
    persons:[
      {name:'shubham',age:22},
      {name:'Nency',age:15}
    ],
    showPerson:false
  });

 const checkbtn=()=>{
  
    setPersonState({
      persons:[
        {name:'shubh',age:22},
        {name:'Nena',age:14}
      ],
      showPerson:false
    });
  };

  const checkchangebtn= (event) =>{
    setPersonState({
      persons:[
        {name:event.target.value,age:22},
        {name:"Nena",age:14}
      ],
      showPerson:true
    })
  }
  const togglepara=()=>{
      const mystate=personState.showPerson;
      setPersonState({
        persons:[
          {name:"Shubham",age:22},
          {name:"Nena",age:14}
        ],
        showPerson:!mystate 
      })

  }
  

  const getper = ()=>{
    
    if(personState.showPerson){
     return(
        <div>
        {/* <Person change={checkchangebtn} name={personState.persons[0].name} age={personState.persons[0].age}>My Hobbies is - Coding </Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}/> */}
          {
            personState.persons.map(p=>{
              return (
                <Person name={p.name} age={p.age} />
              );
            })
          }
      </div>
     ) 
    }
    

  }
 
    return (

      <div className="App">
        <h1>Hello This is my first React App Yeyyyy.</h1>
        <button onClick={togglepara} >Toggle Persons</button>
        {getper()}
        
      </div>
    );
    
  
}

export default app;
