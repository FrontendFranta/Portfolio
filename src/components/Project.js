import React from 'react'
import Button from './Button'
import "./Project.css"

const Project = () => {
  return (
    <div className='py-5 bg-dark text-white'>
      <div className='container'>
        <h4 className='mb-5'><span>04. </span>Projekty</h4>
        <div className='row'>
            <div className='col-lg-4'>
                <div className=' py-5'>
                    <img src='https://frontendfranta.github.io/Projekt1/static/media/ft-bg.1d0f667ff9ca3ba71bb7.webp' className='mb-3'></img>
                    <p className='clear-text'>Webová stránka, která obsahuje pohyblivé animace, hamburger menu, filter products, view more a routy</p>
                  
                    <a href='https://frontendfranta.github.io/Projekt1'><Button text="Zobrazit stránku"/></a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
