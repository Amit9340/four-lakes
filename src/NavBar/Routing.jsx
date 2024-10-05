import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Homes from "../Components/Homes";
import About from "../About/About";
import WaterPark from "../WaterPark/WaterPark";
import Hotel from "../Hotel/Hotel";
import Resort from "../Resort/Resort";
import Restro from "../Restro/Restro";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";


function Routing() {
    const data = [
      { text: "/", path: "/home", Component: <Homes /> },
      { text: "About Us", path: "/about", Component: <About /> },
      { text: "Water Park", path: "/waterPark", Component: <WaterPark /> },
      { text: "Hotel", path: "/hotel", Component: <Hotel /> },
      { text: "Resort", path: "/resort", Component: <Resort /> },
      { text: "Restro", path: "/restro", Component: <Restro /> },
      { text: "Gallery", path: "/gallery", Component: <Gallery /> },
      { text: "Contact Us", path: "/contactUs", Component: <Contact /> }
    ];
  return (
      <Routes>
        <Route path="/" element={<Homes />}/>
        {data.map((item, index)=>(
          <Route key={index} path={item.path} element={item.Component}></Route>
        ))}
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default Routing
