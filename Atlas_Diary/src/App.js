import React from 'react';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
