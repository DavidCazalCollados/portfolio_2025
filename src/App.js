
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';

import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <Navbar />
          <AnimatedRoutes />
          <Sidebar />
        </div>
      )}
    </Router>
  );
}

export default App;
