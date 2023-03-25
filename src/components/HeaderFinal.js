import logo from "../img/logo_2.png";
import { MDBIcon } from 'mdb-react-ui-kit';
import style from './styles/HeaderFinal.css'

function HeaderFinal() {
  return(
    <>
      <header>
        <nav>
        <input type="checkbox" id="menuToggler"/>
        <label for="menuToggler" id="menuTogglerButton">
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </label>
        <a href="/"><img src={logo} alt="Logo" className="logoTop"/></a>
        <ul className="navLinks">
          <li><a href="/"><img src={logo} alt="Logo" className="logoNav"/></a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Our products</a></li>
          <li><a href="/basket" id="basketButton"><MDBIcon fas icon="shopping-cart" /></a></li>
        </ul>
        </nav>
      </header>
    </>
  );
}

export default HeaderFinal;