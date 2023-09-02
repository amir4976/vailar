"use client"
import Image from 'next/image';
import styles from './projectCard.module.css';
import { useState } from 'react';
export default function ProjectCard({title,image}) {
  let [showText,setShowText] = useState(false)
  
  return (
    <div className='col-md-3'>
      <div className={styles.cardContaienr} onMouseOver={()=>{setShowText(true)}}>
        
          <Image fill={true} src={image} alt="ss"/>
        
        {title}
      </div>  
    </div>
  );
} 
