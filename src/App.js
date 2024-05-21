import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemList from './ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemList />
      <Footer />
    </div>
  );
}

export default App;
