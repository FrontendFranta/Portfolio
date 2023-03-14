import React from 'react'
import Button from './Button'
import "./Project.css"
import Fade from 'react-reveal/Fade';

const Project = () => {
  return (
    <div className='py-5 bg-dark text-white' id='projects'>
      <div className='container'>
        <Fade left>
        <h4 className='mb-5'><span>04. </span>Projekty</h4></Fade>
        <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <Fade left>
                <div className=' py-5'>
                   <a href='https://frontendfranta.github.io/Projekt1'> <img className='project-img mb-3' src='https://frontendfranta.github.io/Projekt1/static/media/ft-bg.1d0f667ff9ca3ba71bb7.webp'></img></a>
                   <h3>TRVL.</h3>
                    <p className='clear-text'>Vymyšlená webová stránka, která obsahuje pohyblivé animace, hamburger menu, filter products, view more a routy</p>
                  
                    <a href='https://frontendfranta.github.io/Projekt1'><Button text="Zobrazit stránku"/></a>
                </div>
                </Fade>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
