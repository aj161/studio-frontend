import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_3 from './components/Home_3';
import Header2 from './components/Header2';
// import Header_overlayed from "./components/Header_overlayed";
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Basket from './components/Basket';
import HeaderFinal from './components/HeaderFinal';

function App() {
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
        <Footer /> 
          </div>
      </BrowserRouter>
    </div>


  );
}

export default App;
