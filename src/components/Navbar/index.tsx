import './index.css';
import { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id='navbar'>
      <div className='navbar-logo-container'><img src='../../public/assets/logo.png' /></div>
      <div className='navbar-links-container'>
        <div className='hamburger' onClick={() => {setIsOpen(!isOpen)}}>
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </div>        
        <ul className={isOpen ? 'open' : ''}>
          <li><a onClick={() => {setIsOpen(!isOpen)}} href="#home">Inicio</a></li>
          <li><a onClick={() => {setIsOpen(!isOpen)}} href="#services">Servicios</a></li>
          <li><a onClick={() => {setIsOpen(!isOpen)}} href="#about">Acerca de mí</a></li>
          <li><a onClick={() => {setIsOpen(!isOpen)}} href="#contact">Contacto</a></li>
        </ul>        
      </div>
    </nav>
  );
}

export default Navbar;
