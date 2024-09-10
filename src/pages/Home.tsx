import AboutUs from '../components/AboutUs.tsx'
import AnimatedLogoCloud from '../components/Brands.tsx'
import Footer from '../components/Footer.tsx'
import Hero from '../components/Hero.tsx'
import ImpactSummary from '../components/Statistics.tsx'
import StoriesCarousel from '../components/Stories.tsx'

import CardSlider from '../components/Testimonials.tsx'
import UpliftingLives from '../components/Uplifting.tsx'

function Home() {
  return (
    <div className='flex flex-col '>
       <Hero />
       <AboutUs />
       <ImpactSummary />
       <UpliftingLives />
       <StoriesCarousel />
    
      
       <CardSlider />
       <AnimatedLogoCloud/>
      
       <Footer />
    </div>
  )
}

export default Home;