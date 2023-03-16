import React from 'react'
import "./Header.css"
import Button from './Button'
import rocketImage from '../images/rocket.webp';
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <header>
        <div className='container h-100'>
            <div className='row h-100 py-5 align-items-center text-white'>
               
               
                <div className='col-lg-6 mt-5'>
     <Fade left>
                    <div className='header-content'>
                     
                    <h4 className='mb-2'> <span>01.</span> Jmenuji se</h4>
                        <h1>František Fajna</h1>
                        <p className='clear-text mb-3'>Začínající Front-end Developer. K tvoření webových stránek používám technologie jako jsou: HTML, CSS, Bootstrap a ReactJS.</p>
                        <a href='#projects'><Button text="Projekty"/></a>
                    </div>
                    </Fade>
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
