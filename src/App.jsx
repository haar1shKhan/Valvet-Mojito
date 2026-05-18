import gsap, {ScrollTrigger,SplitText} from 'gsap/all'
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Cocktail from './components/Cocktail'
import About from './components/About'

gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
    <main >
         <Navbar/>
         <Hero/>
         <Cocktail/>
         <About/> 
    </main>
  )
}

export default App