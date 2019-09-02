import React from 'react';
import Profile from './Profile';
import Image from './Image.jpg';

const person ={
  photo:Image,
  name: {firstName:"Asma", lastName:"Ayed"},
  facebook: {face:"facebook", link:()=>{window.location="https://www.facebook.com/asma.ayed.5"} }
}

function App() {
  return (
    <Profile 
Src={person.photo} 
    Name={person.name.firstName + " " + person.name.lastName} 
    onClick1={person.facebook.link} 
    Facebook={person.facebook.face}
    
    
    />
    
  );
}

export default App;
