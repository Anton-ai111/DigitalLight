import React from 'react'
import { cjena } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section id='cijena'  className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Cijene oglasnog prostora</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          <b>1.000</b> <br />	
          € + PDV <br />
          Cijena po ekranu. <br />
          <br />
          Posebni popusti dostupni za dugoročne klijente 3 kontaktirajte nas za
          više informacija!
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={cjena}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal
