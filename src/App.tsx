import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSetupData } from './hooks';
import ROUTER from './router';
import './App.css';

function App() {
  useSetupData();
  return (
    <div className="app">
      <Router>
        <Switch>
          {ROUTER.map((route, idx) => (
            <Route {...route} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
