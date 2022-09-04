import { ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { THEME } from './theme'
import ROUTER from './router';


function App() {
  return (
    <div className="app">
      <ThemeProvider theme={THEME}>
        <Router>
          <Routes>
            {ROUTER.map((route, idx) => (
              <Route path={route.path} element={<route.Component />} />
              ))}
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
