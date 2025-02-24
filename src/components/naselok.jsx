import React from 'react'
import {place} from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='naselokacije' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={place}
          alt='place'
          className='w-[100%] h-[100%] relative z-[5]'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Naše lokacije</h2>
        <h2 className={styles.heading2}>1. Preradovićeva ulica</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Strateška lokacija s visokom frekvencijom prolaznika.
        </p>
      </div>  
    </section>
  )
}

export default Billing
