import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({text , SetText}) => {
    return (
        <div className='Navigation'>
          <img src='Th.png' alt="msg"/>
         {/* <Link to={'/'}> <h3>Home</h3></Link> */}
       <Link to ={'/movie'}><h3>Movie</h3></Link>
       
       <Link to ={'/about'}><h3>About</h3></Link>
       <Link to ={'/series'}><h3>Series</h3></Link>
      <input onChange={(e)=>SetText(e.target.value)} placeholder='Search your film.....'></input>
       

       

       
        </div>
    );
}

export default Navbar;
