import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {

    const location = useLocation()
    console.log(location)
    return (
        <>
        <div className="grid grid-cols-2">
            <div className="grid grid-rows-2">
                <img src={location.state.data.image[0]} className="p-1"/>
            <div className="flex w-3/6">
            <img src={location.state.data.image[1]} className="p-1"/>
            <img src={location.state.data.image[2]} className="p-1"/>
            </div>
        </div>
        <div className="p-5">
            <h1 className="text-2xl font-bold">{location.state.data.title}</h1>
            <h1 className="text-gray-500 text-xl">{location.state.data.description}</h1>
            <hr className="mt-2"/>
            <div className="flex items-center">
            <h1 className="text-2xl font-bold">{location.state.data.price}</h1>
            <h1 className="text-xl text-gray-500 ml-2">MRP</h1>
            <h1 className="line-through text-xl text-gray-500">{location.state.data.price + 500}</h1>
            <h1 className="text-orange-500 ml-2 font-bold text-lg">(Rs. 500 OFF)</h1>
            </div>
        </div>
        </div>
        </>
        
    )
}
export default Details