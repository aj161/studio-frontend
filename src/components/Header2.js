import logo from "../img/logo_2.png";
import style from "./styles/Header2.css";
import { MDBIcon } from 'mdb-react-ui-kit';


function Header2() {

  return (
    <>
      <header>
      <nav class="main-nav">
        <input type="checkbox" id="check" />
        <label for="check" class="menu-btn">
          <i class="fas fa-bars"></i>
        </label>
        <a href="/" class="logo"><img
              src={logo}
              alt="Logo"
              class="logo"
            /></a>
        <ul class="navlinks">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Our products</a></li>
          <li><a href="/basket" class="contact"><MDBIcon fas icon="shopping-cart" /></a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header2;