import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Cards from './components/Cards/Cards';
import Footer from './components/Footer/Footer';
// import Contact from './components/Contact/Contact';
// import About from './components/About/About';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Header />
        <Cards />
        {/* <About /> */}
        {/* <Contact /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
