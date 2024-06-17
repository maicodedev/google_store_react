import React from "react";
import { Routes, Route } from "react-router-dom";
import Phones from "./Nav/Phones.jsx";
import Earbuds from "./pages/Earbuds.jsx";
import Watches from "./pages/Watches.jsx";
import Accesories from "./Nav/Accesories.jsx";
import SmartHome from "./Nav/SmartHome.jsx";
import Cart from "./pages/Cart.jsx"
import Subscriptions from "./Nav/Subscriptions.jsx";
import Navbar from './Nav/navbar.jsx';
import Footer from './components/Footer.jsx';




function App() {

   return (
    <>
    <Navbar></Navbar>
      <Routes>
         <Route path="/phones" element={<Phones/>} />
         <Route path="/earbuds" element={<Earbuds/>} />
         <Route path="/watches" element={<Watches/>} />
         <Route path="/accesories" element={<Accesories/>} />
         <Route path="/smarthome" element={<SmartHome/>} /> 
         <Route path="/subscriptions" element={<Subscriptions/>} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/*" element={<Footer />} />
       </Routes>
    </>  
  )
}


export default App;


