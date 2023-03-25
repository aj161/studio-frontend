import style from "./styles/Zebra.css";
import kataifi from "./styles/kataifi.jpg";

function Products_zebra() {
  return (
    <div id="parent_div">
      <section>
        <div id='first' className="box"></div>
        <div id='second' className="box">
          <h2>Breads</h2>
        </div>
        <div id='third' className="box">
          <h2>Pastries</h2>      
        </div>
        <div id='fourth' className="box"></div>
      </section>
      
      <section>
        <div id='fifth' className="box">
        </div>
        <div id='sixth' className="box">
          <h2>Savoury dishes</h2>  
        </div>
        <div id='seventh' className="box">
          <h2>Desserts</h2>  
        </div>
        <div id='eighth' className="box">
        </div>
      </section>
    </div>
  );
}

export default Products_zebra;