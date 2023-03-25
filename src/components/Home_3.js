import React from "react";
import logo from "../img/logo_2.png";
import style from "./styles/Home_3.css";
import spoon from "../img/spoon.png";
import Products from "./Products";
import Products_zebra from "./Products_zebra";


export default function Home2 () {
  return(
    <>
<div id="section_1">
      <div id="cover">
        <img
        src={logo}
        alt='logo'
        id="logo"
        />
      </div>
      <div id="intro_div">
        <div id="intro_div_heading">
          <div>
          <img
          src={spoon}
          alt='logo'
          id="spoon"
          />
            <p style={{textAlign:"left"}}>Warmest</p>
            <h3 id="welcome">Welcome to Oleria!</h3>
          </div>
        </div>
        <div id="intro_div_text">
          <i id="quote" class="fas fa-quote-left"></i>
          <p style={{textAlign:"justify"}}>A taste of home away from home in the centre of historic city of York</p>
          <i id="quote" class="fas fa-quote-right"></i>
        </div>

        </div>
</div>
<Products/>
    </>
    

  );
}