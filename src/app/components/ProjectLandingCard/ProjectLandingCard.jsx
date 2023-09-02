import React from 'react'
import Image from 'next/image'
import style from './ProjectLandingCard.module.css'
function ProjectLandingCard() {
  return (
  <div className={style.ProjectsLandingCardContaineer}>
  
        <Image fill={true} src={'/slider-1.jpg'} />
    
  </div>
  )
}

export default ProjectLandingCard
