import React, { useState } from 'react'
import "./Appbar.css"
import { FaBars, FaRegTimesCircle, FaTypo3 } from 'react-icons/fa';


const Appbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const [header, setHeader] = useState(false);
    const closeMobileMenu = ()=> setClick(false);

    const scrollHeader = () =>{
        if (window.scrollY >20){
            setHeader(true);
        }
        else{
            setHeader(false);
        }
    }
    window.addEventListener("scroll", scrollHeader);
    
  return (
   <nav className={header ? 'navbar navbar-expand-lg scroll fixed-top':'navbar navbar-expand-lg  fixed-top'}>
    <div className='container'>
        <a className='navbar-brand' href='https://FrontendFranta.github.io/hello'>FrantaFajna <FaTypo3/> </a>
        
        <div className='menu-icon' onClick={handleClick}>
            {click? <FaRegTimesCircle/>:<FaBars/>}
        </div>
        <div className={click?'navbar-nav active':'navbar-nav'}>
        <a className='nav-link' href='https://FrontendFranta.github.io/hello' onClick={closeMobileMenu}>Úvod</a>
        <a className='nav-link' href='#skills' onClick={closeMobileMenu}>Dovednosti</a>
        <a className='nav-link' href='#education' onClick={closeMobileMenu}>Vzdělání</a>
        <a className='nav-link' href='#contact' onClick={closeMobileMenu}>Kontakt</a>
    
      </div>
    </div>
   </nav>
  )
}

export default Appbar
