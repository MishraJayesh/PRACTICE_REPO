import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home/Home';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;
