import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redax/state";

let stateFull = state
ReactDOM.render(
    <App state={props.state}/>,
  document.getElementById('root')

);