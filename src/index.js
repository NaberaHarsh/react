import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Counter from './App';
import Project from './project';
// import AppRouter from './router';  
// import Data from './dataquery'
// import External from './external'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css'


ReactDOM.render(<Project item={[]} />, document.getElementById('root'));

// ReactDOM.render(<AppRouter />, document.getElementById('root'));
// ReactDOM.render(<Data />, document.getElementById('root'));
// ReactDOM.render(<External />, document.getElementById('root'));


// ReactDOM.render(<Todo item={[]}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
