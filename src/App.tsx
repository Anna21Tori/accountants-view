import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Suspense, lazy } from 'react';
import { CircularProgress } from '@mui/material';

const Home = lazy(() => import('./pages/home/home.page'));
const Accountants = lazy(() => import('./pages/accountants/accountants.page'));

function App() {
  return (
    <Suspense fallback={<CircularProgress className="main-spinner" size="40px"/>}>
      <Routes>
          <Route path="/" element={<Home />} errorElement={<p>Nie odnaleziono strony</p>}> 
            <Route path="ksiegowi" element={<Accountants />}/>
          </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
