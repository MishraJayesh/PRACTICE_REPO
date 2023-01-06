import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
// import About from './Components/Pages/About/About';
import Footer from './Components/Footer/Footer';
// import Routing from './Routes/index';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Home />
        {/* <Routing /> */}
        {/* <About /> */}
      </div>

      <div className="navbar navbar-expand navbar-dark bg-info fixed-bottom">
        <Footer />
      </div>
    </>
  );
}

export default App;
