import React from 'react'
import {place1} from '../assets'
import styles, { layout } from '../style'

const Business = () => {
  return (
    <section id='onama' className={layout.section}>
      <div className={layout.sectionImg}>
        
        <h2 className={styles.heading2}>O nama</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Digital Light je tvrtka specijalizirana za iznajmljivanje 
          oglasnog prostora. Nalazimo se na jednoj od najprometnijih 
          lokacija u Zagrebu 3 Cvjetnom trgu.
        </p> 
        <img
          src={place1}
          alt='place'
          className='w-[100%] h-[100%] relative z-[5] p-[10%]'
        />
      </div><br /> <br />
    </section>
  )
}

export default Business
