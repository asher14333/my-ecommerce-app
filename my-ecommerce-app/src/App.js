import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authenticator';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';
import Authenticator from './components/AuthenticationChecker';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Products" element={<Authenticator> <Productpage /> </Authenticator>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
