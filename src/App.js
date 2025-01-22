
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
      <Sidebar />
    </Router>
  );
}

export default App;
