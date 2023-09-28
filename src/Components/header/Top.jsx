import { Link, useNavigate } from 'react-router-dom';
import "./HeaderStyle.css"
// import Account from '../../pages/account/Account';
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
function Top(){
  const [search,setSearch]=useState("");
 
  const navigate=useNavigate();
   const toHome =()=>{  
    navigate("/")   
   }
    return(
       <div className='openNav'>
       {/* <div className='nav'> */}

       <div className='top '>
       
             <img onClick={toHome} src= "./logo.png" alt="logo" className='headerImage'></img>
            <div className="top-right">
                <div className="search-bar">
                <input id="search" type='text'placeholder='search' onChange={(e)=>{setSearch(e.target.value)}} value={search} />
                <label className='search' htmlFor="search"><SearchIcon/></label>
            </div>
            <div className="register"><PersonIcon/> Login </div>
            <div className="cart"> <ShoppingCartIcon/> Cart <span className='orderCount'>1</span> </div>
            </div>
       </div>

<div className="NavbarIteams">
<div className="home">Home</div> 
<div className="home">Couple Art</div> 
<div className="home">Single Person Art</div> 
<div className="home">Kids Art</div> 
<div className="home">Pencil Art</div> 
</div>
<MenuIcon className='hamburger'/>
       </div>
    )
}
export default Top

