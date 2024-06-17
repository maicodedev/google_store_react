
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
           <section className="container_2">
                       <div className="column_2">
                            <div className="rectangle_2">
                                    <img src={smartwatch_black} alt="smartwatch" />
                            </div>
                        </div>
                            <div className="column_3">
                                    <div className="product_2">
                                            <h1 className="title">Fitbit Inspire 3</h1>
                                            <p className=" health">Health & Fitness Tracker</p>
                                            <h3 className="precio_2">99,95 €</h3>
                                    </div>
                                    <div className="line_2"/>
                                    <div>
                                    <p className="choose_2">Choose a color</p>
                                    <div className="models">
                                        <div className="colormodels">
                                                    <div className="model1">
                                                        <img src={smartwatch_black} alt="blacksmartwatch" />
                                                        <div className="namemodel1">Midnight Zen</div>
                                                    </div>
                                                    <div className="model2">
                                                        <img src={smartwatch_pink} alt="pinksmartwatch" />
                                                        <div className="namemodel2">Lilac Bliss</div>
                                                    </div>
                                                    <div className="model3">
                                                            <img src={smartwatch_yellow} alt="yellowsmartwatch" />
                                                            <div className="namemodel3">Morning Glow</div>
                                                    </div>
                                        </div>
                                    </div>
                            </div>
                            <div className="addtocartcontainer">
                                    <div>
                                       <h2 className="price_3">99,95 €</h2>
                                       <div className="line1"/>
                                    </div>
                                    <div className="addtocartline">
                                                 <input className='numberbox' id='number' type='number' placeholder='1' min={'1'} max={'99'}></input>
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