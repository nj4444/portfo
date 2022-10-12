import styles from "./style";
import { Timeline, Business, CardDeal, ContactMe, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import { motion } from "framer-motion";
const App = () => (
  <>
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    {/* Hero Section*/}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

   
    
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        {/* <Stats /> */}
        <Business />
        <h2 className={` ${styles.heading2} text-gradient align-center ${styles.flexCenter}`}>My Journey</h2>
        <Timeline />
        

        <CardDeal />
        <Testimonials />
        <ContactMe />
        
      </div>
    </div>
    <Footer />
  </div>
  
  </>
  
);

export default App;
