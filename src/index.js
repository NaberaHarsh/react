import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Todo from './App';
import Project from './project';  
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<Project item={[]}/>, document.getElementById('root'));

// ReactDOM.render(<Todo item={[]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
