import React from "react"
import logo from "../images/logo.svg"
import search from "../images/search.png"
import account from "../images/account.jpg"
import logout from "../images/logout.jpg";
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex text-sm font-bold text-gray-900 items-center p-5 shadow-lg">
        <img src={logo} className="w-25 h-12 ml-5"/>
       <h1 className="ml-9">MEN</h1>
       <h1 className="ml-9">WOMEN</h1>
       <h1 className="ml-9">KIDS</h1>
       <h1 className="ml-9">HOME & LIVING</h1>
       <h1 className="ml-9">BEAUTY</h1>
       <h1 className="ml-12">STUDIO</h1>
       <div className="border border-gray-100 flex items-center bg-gray-100 w-80 h-10 ml-14">
        <img src={search} className="h-5 w-5 ml-9"/>
        <input className="bg-gray-100  text-gray-900 font-normal outline-none text-sm rounded-sm  block w-full p-2.5 ml-3 " placeholder="Search for products" required />
       </div>
       <Link to="/login">
       {/* <div className="btn-container"> */}
       <div className="ml-6 text-xs">
       <img src={account} className="w-5 h-5 ml-2 "/>
       <h1 className="cursor-pointer">Login</h1>
       </div>
       </Link>
       <div className="ml-6 text-xs">
       <img src={logout} className="w-4 h-4 ml-2 "/>
       <h1>Logout</h1>
       </div>
       
        
       
    </div>
  );
}

export default Navbar