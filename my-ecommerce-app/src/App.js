import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/Authenticator';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Productpage" element={<Productpage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
