import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Footer, 
  Hero, 
  Navbar,  
  Testimonials,
} from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div><br /><br /><br /><br />
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business/>
          <Billing/>
          <CardDeal/>
          <Testimonials/>
          <Footer/> 
        </div>
      </div>
    </div>
  )
}

export default App