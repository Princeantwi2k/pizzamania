import logo from './logo.svg';
import './App.css';
import Nav from './Component/Nav.jsx'
import Carousel from './Component/Carousel'
import About from './Component/About';
import Pizzatype from './Component/Pizzatype';
import Footer from './Component/Footer'


function App() {
  return (
    <>
      <Nav />
      <Carousel />
      <About />
      <Pizzatype />
      <Footer />

    </>
  );
}

export default App;
