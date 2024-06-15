import React from 'react'
import ArrowIcon from '../assets/images/icons/Arrow.svg';
import DeliveryIcon from '../assets/images/icons/Delivery.svg';
import Earbuds01 from '../assets/images/earbuds/earbuds_01.png';
import Earbuds02 from '../assets/images/earbuds/earbuds_02.png';
import Earbuds03 from '../assets/images/earbuds/earbuds_03.png';
import Earbuds04 from '../assets/images/earbuds/earbuds_04.png';
import './Earbuds.css';

const Earbuds = () => {
  return (
    <main>
      <div className="see">
        <img src={ArrowIcon} alt="Arrow" className="arrow" />
        <p className="seepro">See product details</p>
      </div>
      <section className="container">
        <div className="column1">
          <div className="ears_container">
            <div className="ear">
              <img src={Earbuds01} alt="earbuds" className="cimage" />
            </div>
            <div className="ear">
              <img src={Earbuds02} alt="earbuds" className="cimage" />
            </div>
            <div className="ear">
              <img src={Earbuds03} alt="earbuds" className="cimage" />
            </div>
            <div className="ear">
              <img src={Earbuds04} alt="earbuds" className="cimage" />
            </div>
          </div>
        </div>
        <div className="column2">
          <div className="rectangle">
            <img src={Earbuds01} alt="earbuds" />
          </div>
        </div>
        <section className="column3">
          <div>
            <h1 className="title">Google Pixel Buds Pro</h1>
            <br />
            <p>Music & Sound</p>
            <br />
            <h3>229 €</h3>
          </div>
          <div className="line"></div>
          <div>
            <br />
            <br />
            <p>Choose a color</p>
            <div className="container1">
              <div className="circle blue"></div>
              <div className="circle beige"></div>
              <div className="circle grey"></div>
              <div className="circle lila"></div>
              <div className="circle green"></div>
              <div className="circle red"></div>
            </div>
          </div>
          <div className="addtocartcontainer">
            <div>
              <h2 className="price">229 €</h2>
            </div>
            <div className="addtocartline"></div>
            <div className="numberbox">
              <a href="#" className="number">1</a>
              <a href="#" className="triangle">▾</a>
            </div>
            <div>
              <button className="addtocart">Add to Cart</button>
            </div>
            <div className="delivblock">
              <div className="delivery">
                <img src={DeliveryIcon} alt="deliveryicon" className="deliveryicon" />
              </div>
              <div className="deliveryinfo">
                <p><b>Delivers 29 April to </b><span style={{ color: '#1A73E8' }}><b>08023</b></span></p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Earbuds;