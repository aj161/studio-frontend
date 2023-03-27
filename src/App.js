import './App.css';
import ReactGA from 'react-ga'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_3 from './components/Home_3';
import Header2 from './components/Header2';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Basket from './components/Basket';
import HeaderFinal from './components/HeaderFinal';

function App() {

  const TRACKING_ID = "G-HT8WJQ9FZ3";
ReactGA.initialize(TRACKING_ID);

  return (


    <div className="App">
      <BrowserRouter>
      {/* <Header_overlayed/> */}
        {/* <Header2 /> */}
        <HeaderFinal />
      <div id="overlaying">
        <Routes>
          <Route exact path="/" element={<Home_3/>}/>
          {/* <Route exact path="/products" element={<OurProducts/>}/>
          <Route exact path="/recipes" element={<RecipeOfTheDay/>}/> */}
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/basket" element={<Basket/>}/>
        </Routes>
        <ScrollToTopButton/>
        <Footer /> 
          </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
