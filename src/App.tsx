import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSetupData } from './hooks';
import ROUTER from './router';

function App() {
  useSetupData();
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
