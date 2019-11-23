import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css'
import Home from './components/Home.js'
import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.render(<Home />, document.getElementById('root'));
// ReactDOM.render(<LogoDesign />, document.getElementById('logo'));

// ReactDOM.render(<Body/>, document.getElementById('body'));

// ReactDOM.render(<Footer/>, document.getElementById('footer'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
