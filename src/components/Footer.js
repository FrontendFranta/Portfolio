import React from 'react'
import "./Footer.css"
import { FaMapMarkerAlt, FaMailBulk } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
const Footer = () => {
  return (
    <footer className='py-5 bg-darker text-white' id='contact'>
        <div className='container'>
       
        <Fade bottom>   <h4 className='mb-5'><span>05.</span> Kontakt</h4> </Fade>
            <div className='row text-center'>
                <div className='col-lg-6 mb-5'>
              <Fade bottom>
                    <FaMapMarkerAlt className='ft-icon mb-2'></FaMapMarkerAlt>
                    <h4>Frýdek-Místek</h4>
                    </Fade>
                </div>
                <div className='col-lg-6 mb-5'>
                <Fade bottom>
                    <FaMailBulk className='ft-icon mb-2'></FaMailBulk>
                    <h4>frantafajna@gmail.com</h4>
                    </Fade>
                </div>
                <div className='col-lg-12'>
                <Fade bottom>
                <iframe className='mapa' title="Mapa Google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98955.1150742869!2d18.228254696973533!3d49.679990847225014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4713f725179c0af5%3A0x400af0f66150440!2zRnLDvWRlay1Nw61zdGVr!5e0!3m2!1scs!2scz!4v1677601551458!5m2!1scs!2scz" width="100%" height="450" style={{ border: "0" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Fade>
             

                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
