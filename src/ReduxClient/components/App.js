import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Error from './Error';
import HomePage from './HomePage';
import Navigation from './Navigationbar'
import AddEvent from './AddEvent';


const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile/:username" component={HomePage} />
        <Route path="/addEvent" component={AddEvent} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;