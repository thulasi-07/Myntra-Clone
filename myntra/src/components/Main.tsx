import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Home from "./Home";
import OfferTime from "./OfferTime";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <OfferTime/>
            <Banner/>
            <Home/>
           
        </div>
    )
}

export default Main