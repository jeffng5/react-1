
import React, {useState} from 'react'
import './App.css';
import {MyForm} from './Forms.js'
import {Madlibs} from './Madlibs.js'

function App() {
  const INITIAL_STATE = []
 
  const [formData, setFormData] = useState(INITIAL_STATE)
  const makeMadlib = (noun, noun1, adjective, color) => {setFormData(formData => [...formData, {noun, noun1, adjective, color}])}
  return (
    <>
    <div className="App">
      <h1> Welcome to MadLibs Game </h1>
      <MyForm makeMadlib= {makeMadlib}/>
      </div>
      <div> {formData.map(({noun, noun1, adjective, color}) => <Madlibs noun= {noun} noun1={noun1} adjective={adjective} color={color}/>)}
    </div>
    </>
  );
}

export default App;
