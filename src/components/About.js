import shop from "../img/shop_2.jpg";
import style from "./styles/About.css";
import { MDBIcon } from 'mdb-react-ui-kit';
import delight from "../img/turkish_delight.jpg";
import window from "../img/window.jpg";


function About() {
  return (  
    <div id="about">
      <section className="shop">
      <a href="#" class="contact"><button id="contact_button">Get in touch?</button></a>
      </section>
    <section id="quote_2">
      <h2>Patisserie Oleria</h2>
      <p>It all started in a small but cosy town on the Greek island of Crete. With a lot of practice and determination Oleria was born, to give people cosy space, freshest produce and take them on a little taste journey of Mediterranean cuisine.</p>
    </section>
    <section id="ambience">
    <img
        src={delight}
        alt='delight'
        id="delight"
        />
    <img
        src={window}
        alt='window'
        id="window"
        />
    </section>
    <section id="quote_2">
      {/* <h2 style={{paddingTop:"5vh"}}>Get in Touch</h2> */}

    </section>
    </div>
  );
}

export default About;