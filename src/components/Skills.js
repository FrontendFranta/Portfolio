import React from 'react'
import "./Skills.css"
import Languages from './SkillsData'


const Skills = () => {
  return (
    <div className='py-5 bg-dark text-white' id='skills'>
      <div className='container'>
 
      <h4 className='mb-5'><span>02.</span> Dovednosti</h4>
      <div className='row text-center justify-content-center'>
      {Languages.map(Language => (
        
     
        <div className='col-lg-4' key={Language.id}>
   
            <div className='shadowBox py-5 mb-4'>
        <img className='skill-images' width={96} height={96} src={Language.icon}></img>
        <h5>{Language.title}</h5>
         <p>Úroveň: {Language.level}</p>
         
         </div>
    
         </div>
        
    
  ))}
      </div>
      </div>
    </div>
  )
}

export default Skills
