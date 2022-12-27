import Navbar from './components/Navbar';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Cards />
      </div>
      <Footer />
    </>
  );
}

export default App;
