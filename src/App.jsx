
import { Routes, Route } from "react-router-dom";
import {Phones} from "./pages/Phones.jsx";
import {Earbuds} from "./pages/Earbuds.jsx";
import {Watches} from "./pages/Watches.jsx";
import {Accesories} from "./pages/Accesories.jsx";
import {SmartHome} from "./pages/SmartHome.jsx";
import {Subscriptions} from "./pages/Subscriptions.jsx";

function App() {

   return (
       <Routes>
         <Route path="/phones" element={<Phones/>} />
         <Route path="/earbuds" element={<Earbuds/>} />
         <Route path="/watches" element={<Watches/>} />
         <Route path="/accesories" element={<Accesories/>} />
         <Route path="/smarthome" element={<SmartHome/>} /> 
         <Route path="/subscriptions" element={<Subscriptions/>} />
       </Routes>
  )
}

export default App;
