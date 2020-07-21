import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'


function App() {
  return (
    <div className="App">
      <Message />
      {/* <Greet name="Sri" heroName="Hindu">
        <p>This is children props</p></Greet>
      <Greet name="Ram" heroName="Lord" />
      <button>Action</button>
      <Greet name="Sreejith" heroName="Comman Man" />
      <Welcome name="Sri" heroName="Hindu" />
      <Welcome name="Sri" heroName="Hindu" />
      <Welcome name="Sri" heroName="Hindu" /> */}
      {/* <Greet /> */}
      {/* <Welcome /> */}
      {/* <Hello /> */}
    </div>
  );
}

export default App;
