import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Tour />
    </React.Fragment>
    
  );
}

export default App;
