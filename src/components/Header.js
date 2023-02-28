import React from 'react'
import "./Header.css"
import Button from './Button'
import rocketImage from '../images/rocket.webp';


const Header = () => {
  return (
    <header>
        <div className='container h-100'>
            <div className='row h-100 py-5 align-items-center text-white'>
               
               
                <div className='col-lg-6 mt-5'>
     
                    <div className='header-content'>
                     
                    <h4> <span>01.</span> Jmenuji se</h4>
                        <h1>František Fajna</h1>
                        <p className='clear-text'>Začínající Front-end Developer. K tvoření webových stránek používám technologie jako jsou: HTML, CSS, Bootstrap a ReactJS.</p>
                        <a href='#skills'><Button text="Vidět více"/></a>
                    </div>
              
                </div>
                <div className='col-lg-6 hidden '>
                    <div className='flying'>
                        <img src={rocketImage}></img>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
