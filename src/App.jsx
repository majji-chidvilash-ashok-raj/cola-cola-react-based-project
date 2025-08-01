import React, { useState } from 'react';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import Story from './Pages/Story/Story';
import Sustainability from './Pages/Sustainability/Sustainability';

const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginOpen(false);
  };

  const handleShopNow = () => {
    // You can navigate or handle shop logic here
    alert("Redirecting to shop..."); 
  };

  return (
    <div className='App'>
      <Navbar 
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setIsLoginOpen(true)}
        handleShopNow={handleShopNow}
      />

      {isLoginOpen && (
        <Login 
          onClose={() => setIsLoginOpen(false)} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/story' element={<Story />} />
        <Route path='/sustainability' element={<Sustainability />} />
        {/* Add more routes if needed */}
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
