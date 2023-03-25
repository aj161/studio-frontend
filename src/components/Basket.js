import style from "./styles/Basket.css";
import logo from "../img/logo_2.png";


function Basket() {
  return (
    <div id="basket">
      <section>
      <img
        src={logo}
        alt='logo'
        id="logo"
        />
      <h3>Online store coming soon!</h3>
      <p>In the meantime please get in touch and place your order via info@oleria.co.uk or +44 7554 879798.</p>
        </section>
    </div>
  );
}

export default Basket;