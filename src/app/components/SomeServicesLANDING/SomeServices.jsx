import React from 'react'
import styles from './SomeServices.module.css'
import ServicesCard from '../servicesCard/ServicesCard'
import Title from '../Title/Title'

function SomeServices() {
  return (
    <div className={styles.SomeServicesWarper}>
        {/* <div className={styles.someServicesTitle}>
            <h2>برخی از خدمات شرکت</h2>
        </div>
        <div className={styles.someServicesDesc}>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
        </div> */}
          <Title title={'برخی از خدمات ما'} desc={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'}/>

        <div className={`${styles.Row} row container`}>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        </div>
    </div>

  )
}

export default SomeServices
