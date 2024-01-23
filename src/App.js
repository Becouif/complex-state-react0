// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {
  // const [fName, setfName] = useState("");
  // const [lName, setlName] = useState("");

  // function firstName(event){
  //   setfName(event.target.value);
  // }
  // function lastName(event){
  //   setlName(event.target.value);
  // }
// ANOTHER WAY TO IMPLEMENT THIS WITHOUT USING LOT OF CODE
  const [fullName, setfullName] = useState({
    fName: "",
    lName:"",
    email:""
  })
  // this function handle change in both inputs 
  function handleChange(event){
    // to get the name of the input that trigger the event 
    // const newName = event.target.name;
    // const newValue = event.target.value;
    const {value, name} = event.target;
    // setState in react can also take in a function 
    // USING SPREAD OPERATOR TO HANDLE OBJ IN JS 
    setfullName(prevValue => {
      return {
        // this is d spread operator 
        ...prevValue,
        // without the array the name will be treated like string 
        [name] :value
      }
    })

    // THE DIRECT WAY TO DO IT 
    // NOTE: DONT EVER USE event.target in STATE DIRECTLY 
    // setfullName(prevValue =>{
    //   if(name === "fName") {
    //     return {
    //       fName: value,
    //       lName:prevValue.lName,
    //       email: prevValue.email
    //     }
    //   } else if (name === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email:prevValue.email
    //     }
    //   } else if (name === "email"){
    //     return {
    //       fName: prevValue.fName,
    //       lName: prevValue.lName,
    //       email: value
    //     }
    //   }
    // });
  }
  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <p>{fullName.email}</p>
      <form>
        <input
         onChange={handleChange}
         name="fName" 
         placeholder="First Name" 
         value={fullName.fName} 
         />
        <input
         onChange={handleChange} 
         name="lName" 
         placeholder="Last Name" 
         value={fullName.lName} 
         />
        <input
         onChange={handleChange} 
         name="email" 
         placeholder="email" 
         value={fullName.email} 
         />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
