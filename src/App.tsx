import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSetupData } from './hooks';
import ROUTER from './router';
import './App.css';

function App() {
  useSetupData();
  return (
    <div className="app">
      <Router>
        <Routes>
          {ROUTER.map((route, idx) => (
            <Route {...route} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
