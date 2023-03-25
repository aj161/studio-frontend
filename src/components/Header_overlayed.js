import logo from "../img/logo_2.png";
import style from "./styles/Header_overlayed.css";
import { MDBIcon } from 'mdb-react-ui-kit';



function Header2() {
  return (
    <>
      <header id="header-ov">
      <nav class="main-nav-ov">
        <input type="checkbox" id="check-ov"/>
        <label for="check-ov" class="menu-btn-ov">
        <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>
        </label>
        <a href="/" class="logo-ov"><img
              src={logo}
              alt="Logo"
              class="logo-ov"
            /></a>
        <ul class="navlinks-ov">
          <li><a href="/" class="logo-ov-nav"><img
              src={logo}
              alt="Logo"
              class="logo-ov-nav"
            /></a>
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/products">Our products</a></li>
          <li><a href="/basket" class="contact-ov"><MDBIcon fas icon="shopping-cart" /></a></li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header2;