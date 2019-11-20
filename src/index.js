import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
	BrowserRouter as Router,
	Link,
	Route
} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const {
	Home,
	Register,
	Login,
} = App

ReactDOM.render(<Router>
  <div className="App">
        <Link to="/">首页</Link>
        <Link to="/Register">一个页面</Link>
        <Link to="/Login">另一个页面</Link>
        <Route exact path="/" component={ Home } />
        <Route path="/Register" component={ Register } />
        <Route path="/Login" component={ Login } />
    </div>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();