import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AuthenticatedRoute from './AuthenticatedRoute';
import GuardedRoute from './GuardedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth/*" element={<AuthenticatedRoute />} >
        </Route>
        <Route path="admin/*" element={<GuardedRoute />}>
        </Route>
        <Route path="candidate/*" element={<GuardedRoute />}>
        </Route>
        <Route path="*" element={<Navigate to="auth/login" replace={true}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
