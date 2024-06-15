
import React from 'react';
import ArrowIcon from '../assets/images/icons/Arrow.svg';
import DeliveryIcon from '../assets/images/icons/Delivery.svg';
import smartwatch_black from '../assets/images/smartwatch/smartwatch_black.png';
import smartwatch_pink from '../assets/images/smartwatch/smartwatch_pink.png';
import smartwatch_yellow from '../assets/images/smartwatch/smartwatch_yellow.png';
import './Watches.css'; 

const Smartwatch = () => {
  return (
      <main>
          <div className="see">
                          <img src={ArrowIcon} alt="Arrow" className="arrow" />
                          <p className="seepro">See product details</p>
          </div>
           <section className="container">
                                  <div className="column2">
                                                <div className="rectangle">
                                                          <img src={smartwatch_black} alt="smartwatch" />
                                                </div>
                                  </div>
                                  <div className="column3">
                                                <div className="product">
                                                        <h1 className="title">Fitbit Inspire 3</h1><br/>
                                                        <p>Health & Fitness Tracker</p><br />
                                                        <h3>99,95 €</h3>
                                                </div>
                                                <div className="line"/>
                                                <div>
                                                   <p>Choose a color</p>
                                                <div className="models">
                                                <section className="colormodels">
                                                    <section className="model1">
                                                              <img src={smartwatch_black} alt="blacksmartwatch" />
                                                              <section className="namemodel1">Midnight Zen</section>
                                                    </section>
                                                    <section className="model2">
                                                              <img src={smartwatch_pink} alt="pinksmartwatch" />
                                                              <section className="namemodel2">Lilac Bliss</section>
                                                    </section>
                                                    <section className="model3">
                                                            <img src={smartwatch_yellow} alt="yellowsmartwatch" />
                                                            <section className="namemodel3">Morning Glow</section>
                                                    </section>
                                               </section>
                                           </div>
                                       </div>
                                        <div className="addtocartcontainer">
                                                  <div>
                                                      <h2>99,95 €</h2>
                                                      <div className="line1"/>
                                                  </div>
                                            <div className="addtocartline">
                                                            <button className="numberbox">
                                                                        <a href="#" className="number">1</a>
                                                                        <a href="#" className="triangle">▾</a>
                                                            </button>
                                                            <button className="addtocart">Add to Cart</button>
                                                      </div>
                                                  <div className="delivery">
                                                             <img src={DeliveryIcon} alt="deliveryicon" className="deliveryicon" />
                                                             <p><b>Delivers 29 April to </b><span style={{ color: '#1A73E8' }}><b>08023</b></span></p>
                                                  </div>
                                        </div>
                                </div>
          </section>
    </main>
  );
};

export default Smartwatch;