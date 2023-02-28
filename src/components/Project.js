import React from 'react'
import Button from './Button'
import "./Project.css"

const Project = () => {
  return (
    <div className='py-5 bg-dark text-white'>
      <div className='container'>
        <h4 className='mb-5'><span>04. </span>Projekty</h4>
        <div className='row text-center'>
            <div className='col-lg-4'>
                <div className='shadowBox py-5'>
                    <img src='https://preview.colorlib.com/theme/startup2/img/team/2.png.webp' className='mb-5'></img>
                    <Button text="Vidět více"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
