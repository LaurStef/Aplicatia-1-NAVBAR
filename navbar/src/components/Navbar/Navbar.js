
import React, { useState } from 'react';
import { MenuItems } from './MenuItems'
import './Navbar.css'
import Button from '../Button';

function Navbar (){

  const [checkClick,setCheckClick] = useState([false])

    return(
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'>React <i className='fab fa-react'></i></h1>
            <div className='menu-icon' onClick={ () => setCheckClick(!checkClick) }>
              <i className={(checkClick) ? 'fas fa-times' : 'fas fa-bars' }></i>   
            </div>

            <ul className={(checkClick) ? 'nav-menu active' : 'nav-menu'}>
              { MenuItems.map((item,index)  => (
              <li key={index}> 
                <a className={item.cName} href={item.url}> 
                {item.title}
                </a>
              </li>
              ))
              }
            </ul>
            <Button>Sign Up</Button>
        </nav>
    );
}
export default Navbar;