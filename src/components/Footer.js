import Map from "../img/map_2.jpg";
import style from "./styles/Footer.css";
import Logo from "../img/logo_2.png"

function Footer() {
  return (
    <footer>
      <section className='footer-container'>
      <section className='footer-1'>
      <img className='footer-map' src={Logo} alt='map'></img>
        <section className='footer-social'>
          <a href="https://www.instagram.com/oleriapatisserieyork"><i className='fa-brands fa-instagram'></i></a>
          <a href="https://wa.link/7tvp6w"><i className='fa-brands fa-whatsapp'></i></a>
          <a href="https://www.facebook.com/oleriapatisserie"><i className='fa-brands fa-facebook'></i></a>
        </section>
        <div id='contacts'>
        <p>+44 7554 879798<br></br>info@oleria.co.uk</p>
        </div>
      </section>
      <section className='footer-2'>
        <h2 className='footer-title'>Opening Times</h2>
        <h5>Oleria Bootham</h5>
          <ul className='footer-times'>
            <li>Monday - Friday 10:00 - 17:30</li>
            <li>Saturday 10:00 - 20:00</li>
            <li>Sunday 10:00 - 16:00</li>
          </ul>
          <h5>Oleria Gilligate</h5>
          <ul className='footer-times'>
            <li>Monday - Friday 8:00 - 17:30</li>
            <li>Saturday 8:00 - 20:00</li>
            <li>Sunday 10:00 - 16:00</li>
          </ul>
      </section>
      
      <section className='footer-3'>
        <h2 className='footer-title'>Where to find us</h2>
          <ul className='footer-times'>
            <li>78-90 Gillygate, York, YO31 7EQ</li>
            <li>42 Bootham, York, YO30 7BL</li>
          </ul>
        <img className='footer-map' src={Map} alt='map'></img>
      </section>

    </section>
      <p class='copyright'>© 2023 - Design & Code: ajermasenoka@gmail.com </p>

    </footer>
  );
}

export default Footer;
