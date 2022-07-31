import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ROUTER from './router';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          {ROUTER.map((route, idx) => (
            <Route path={route.path} element={<route.Component />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
