import React from 'react';
import './App.css';

import NavbarDarkExample from "../src/components/Header" ;
import Containerheader from "./components/Containerheader";
import BasicExample from './components/Card';



let App= ()=> {
  
return (
  <>
    <NavbarDarkExample />
    <Containerheader />
    <div className='middle'>
      <h3>MUSIC</h3>
      <BasicExample />
      <BasicExample />
      <BasicExample />
      <BasicExample />
    </div>
  </>
);
}

export default App;
