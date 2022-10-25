import Profile from '../src/Profile/Profile';
import './App.css';
import React from 'react';


function App() {

  return (
    <div className="App">
    <span>
    <Profile fullName="Jihed Ounis" bio="a 20 years old web development student " profession="Graphic designer" src="./photo.jpg"/>
    </span>  
    </div>
  );
}

export default App;