import React, { Component } from 'react';
import './App.css';
import Landing from './components/routes/Landing';
import Login from './components/routes/Login';
import Give from './components/routes/Give';
import Accept from './components/routes/Accept';
import { Route, HashRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/give" component={Give} />
          <Route path="/accept" component={Accept} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
