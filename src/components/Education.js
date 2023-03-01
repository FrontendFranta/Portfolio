import React from 'react'
import "./Education.css"
import Button from './Button'
import Eduimg from '../images/eduimg.webp'
import Fade from 'react-reveal/Fade';

const Education = () => {
  return (
    <div className='py-5 bg-darker text-white' id='education'>
      <div className='container'>
      
      <Fade left><h4 className='mb-5'><span>03.</span> Vzdělání</h4></Fade>
        <div className='row align-items-center'>
        <div className='col-lg-6 mb-5'>
  <Fade left>
        <h3 className='mb-3'>PrimMat - Soukromá střední škola podnikatelská, s. r. o.</h3>
                        <p className='clear-text'>K maturitě jsem vytvořil webovou stránku a také jsem připravil i prezentaci k webové stránce. Front-end jsem vytvořil v HTML, CSS a Bootstrapu a Backend jsem vytvořil pomocí technologie Laravel</p>
                        <a href='https://primmat.cz'><Button text="Školní stránky"/></a>
                        </Fade>
        </div>
        <div className='col-lg-6'>
        <img src={Eduimg} className='edu-img floating'></img>
        </div>
        </div>
      </div>
    </div>
    
  )
}

export default Education
