import React,{useState,useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Navbar from "./Navbar";
import OfferTime from "./OfferTime";


const Products = () => {
    const location = useLocation()
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
        <>
        <Navbar/>
        <OfferTime/>
        <div className="flex items-center text-gray-500 text-sm ml-5 mt-2">
        
        <Link to="/"><h1 className="text-gray-500">Home /</h1></Link>
        <h1 className="ml-1 font-semibold">{location.state?.category}</h1></div>

        <h1 className="text-lg font-bold ml-5 mt-3">{location.state?.category ?? "No Products"}</h1>
        {location.state?.category ? <div className="grid grid-cols-4 p-3">
            {product.filter((data:any)=> data.category.name.includes(location.state.category)).map((data:any)=>{
                return <>
                <div>
                <Carousel className="p-2 w-60 h-80 mt-2" autoPlay={true} showThumbs={false} showArrows={false}>
                <div>
                    <img src= {data.images[0]} />
                    
                </div>
                <div>
                <img src= {data.images[1]} />
                  
                </div>
                <div>
                <img src= {data.images[2]} />
                   
                </div>
            </Carousel>
                <h1 className="ml-4 font-bold">{data.title}</h1>
                <h1 className="ml-4 text-sm text-gray-500" >{data.category.name}</h1>
                <div className="flex items-center">
                <h1 className="ml-4 font-bold text-sm">Rs. {data.price}</h1>
                <h1 className="text-xs text-gray-400 line-through ml-1">Rs. {data.price + 500}</h1>
                <h1 className="text-xs text-orange-400 ml-1">(Rs.500 OFF)</h1>
                
                </div>
                </div>
                
                </>
            })}
            

        </div>
        </>
        
    )
}

export default Products