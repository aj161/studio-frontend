import React from "react";
import tea from "../img/tea.jpg";
import madeleine from "../img/madeleine.jpg";
import merangue from "../img/merangue.jpg";
import bread from "../img/bread_2.jpg";
import baklava from "../img/baklava_2.jpg";
import cheesecake from "../img/cheesecake.jpg"
import style from "./styles/Products.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import window from "../img/window_6.jpg";
import Products_zebra from "./Products_zebra";


export default function Products () {
  return(
  <div>
      <Products_zebra/>

      <div id="other-products">
      <h3>Our Products</h3>
      <p>From breads, pastries and desserts to savoury dishes and some of the finest produce Mediterrenean cuisine has to offer. Come and see for yourself! </p>
      </div>

    <div id="products_div">
      <section id="heading">
        <h1>Some of Our Specials</h1>
      </section>
      <section id="products">
      <Card id="card"> 
      <CardMedia 
        component="img"
        image= {baklava}
        alt="baklava"
        />
      <CardContent>
        <h3>Baklava Deluxe</h3>
        <h6>With pistachio</h6>
        </CardContent>
      </Card>

      <Card id="card"> 
      <CardMedia 
        component="img"
        image= {merangue}
        alt="meringue"
        
        />
      <CardContent>
        <h3>Meringue</h3>
        <h6>With fresh fruit and Creme Patisserie</h6>
        </CardContent>
      </Card>

      <Card id="card"> 
      <CardMedia 
        component="img"
        image= {madeleine}
        alt="meringue"
        />
      <CardContent>
        <h3>Medeleines</h3>
        <h6>With strawberry Creme Patisserie </h6>
        </CardContent>
      </Card>

      <Card id="card"> 
      <CardMedia 
        component="img"
        image= {cheesecake}
        alt="meringue"
        />
      <CardContent>
        <h3>Cheesecakes</h3>
        <h6>Spanish classic with a hint of orange</h6>
        </CardContent>
      </Card>
      </section>
    </div>
    
      </div>
  );
}

