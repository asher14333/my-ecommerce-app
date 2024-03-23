import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<Productpage />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;

