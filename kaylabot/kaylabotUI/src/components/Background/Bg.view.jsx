import React from "react";
import '../Background/Bg.style.css';
import Drawer from "../Drawer/Drawer.view";
import Contact from "../Contact/Contact.view";



function Bg() {
    return (

        <div className="bg-img">
            <Drawer/>
            <Contact/>


        </div>




    );
}

export default Bg;
