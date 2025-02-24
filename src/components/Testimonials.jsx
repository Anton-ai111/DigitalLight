import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import Feedback from './Feedback'

const Testimonials = () => {
  return (
    <section id='zastomi' className={`${styles.paddingY} ${styles.flexce} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>
      <center><h2 className={styles.heading2}>Zašto odabrati <br className='sm:block hidden'/>Digital Light?</h2></center>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-contrainer relative z-[1]'>
        {feedback.map((card) => (
          <Feedback key={card.id} {...card}/>        
        ))}
      </div>      
    </section>
  )
}

export default Testimonials
