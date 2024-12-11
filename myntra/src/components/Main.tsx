import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Home from "./Home";
import OfferTime from "./OfferTime";
import Products from "./Products";
import { useState, useEffect } from "react";

const Main = () => {
    const [product, setProduct] = useState([])

    const getProducts = async() => {
        try{
    
        await fetch("https://api.escuelajs.co/api/v1/products")
        .then(res => res.json())
        .then(json => setProduct(json))
    }catch(err){
        console.log(err)
    }
    }
    
    useEffect(()=> {
        getProducts()
    },[])
    console.log(product) 

    return (
        <div>
            <Navbar/>
            <OfferTime/>
            <Banner/>
            <Home/>
            <Products product={product}/> 
           
        </div>
    )
}

export default Main