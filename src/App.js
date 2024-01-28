import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RegistrationForm from './Pages/Registration';
import LoginForm from './Pages/Login';
import Home from './Pages/Home';
import PrivateRoute from './PrivateRoute';
import Daghboard from './Pages/Daghboard';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/" element={<><RegistrationForm /><Home /></>}
          
        />
        <Route
          path="/login" element={<><LoginForm /><Home /></>}
        />
        <PrivateRoute path="/dashboard" component={Daghboard} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
