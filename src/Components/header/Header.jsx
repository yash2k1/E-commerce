import { Link } from 'react-router-dom';
import "./HeaderStyle.css"
// import Account from '../../pages/account/Account';
import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import ReorderIcon from '@mui/icons-material/Reorder';
import ClearIcon from '@mui/icons-material/Clear';
function Header(){
      // its a hook called usestate
  const [on , changeState]=useState(0);
  
  // find is a toggling function
  
   const find =()=>{
    
    changeState(!on);
      
   }
    return(
        <>
        {/* this support div is just give the margin to the header i know it is bad practice but it is what it is */}
          <div className="support">

           <nav className="NavbarIteams">
           <div className="home">Home</div> 
           <div className="home">Couple Art</div> 
           <div className="home">Single Person Art</div> 
           <div className="home">Kids Art</div> 
           <div className="home">Pencil Art</div> 
           </nav>
           </div>
        </>
    )
}
export default Header

