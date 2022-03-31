import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
ReactDOM.render(
    <BrowserRouter>
       <Switch>
       <Route exact path="/" component={Login}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/home" component={Home}/>
      </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);