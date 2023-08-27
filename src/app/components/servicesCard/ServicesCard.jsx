import React from 'react'
import Styles from './ServiceCard.module.css'
import {BsPencilSquare} from 'react-icons/bs'
function ServicesCard() {
  return (
    <div className='col-md-3'>
           <div className={Styles.ServisesCardContainer}>
                <div className={Styles.ServicesCardLogo}>
                  <BsPencilSquare/>
                </div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, laboriosam.
           </div>
    </div>
  )
}

export default ServicesCard
