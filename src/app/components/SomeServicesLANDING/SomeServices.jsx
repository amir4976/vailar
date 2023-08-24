import React from 'react'
import styles from './SomeServices.module.css'
import ServicesCard from '../servicesCard/ServicesCard'




function SomeServices() {
  return (
    <div className={styles.SomeServicesWarper}>
        <div className={styles.someServicesTitle}>
            <h2>برخی از خدمات شرکت</h2>
        </div>
        <div className={styles.someServicesDesc}>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div>
        <div className="row">
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        </div>
    </div>

  )
}

export default SomeServices
