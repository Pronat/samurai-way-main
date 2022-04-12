import React from 'react';
import './index.css';
import {addPost, state} from "./redax/state";
import {rerenderEntireTree} from "./render";



rerenderEntireTree(state)