import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import HelloC from './HelloC';
//import { HelloCC } from './HelloCC';
//import { Hello1 } from './HelloC';
import {NumberCounter2} from './NumberCounter';

//let a=React.createElement("h1",null,"Hello", React.createElement("span",null,"World"));
let  container=document.getElementById("root");

ReactDOM.render( 
<div>
  {
  }
  <NumberCounter2/>
</div>,
container
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
