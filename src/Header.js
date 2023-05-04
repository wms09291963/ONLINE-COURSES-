import React from 'react';
import logo from '../src/logo.png';
import '../src/Header.css';


function Header() {
  return (
   <header>
      <img src={logo} width={175} height={175} alt="logo" />
      <h1 class="outlined">The Patriots Portal</h1>
    </header>
  )
}
                     
      
  export default Header;
