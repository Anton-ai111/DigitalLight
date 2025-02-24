import React from 'react'
import styles from '../style'
import { log0 } from '../assets'

const Footer = () => {
  return (
    <section id='kontakt' className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <center>
          <div className='flex-1 flex flex-col justify-start mr-10'>
            <img
              src={log0}
              alt='logo'
              className='w-[266px] h-[172px] object-contain'
            />
            <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
              Broj: 099 334 1722 <br /> 
              Adresa: Ulica Frane Petrića 5, Zagreb <br />
              Email: bruno@digitallight.hr
            </p>
          </div>
        </center>
      </div>
      
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2025 Digital Light. All Rights Reserved.
        </p>   
      </div>
    </section>
  )
}

export default Footer
