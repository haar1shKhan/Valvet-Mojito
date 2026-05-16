import { SplitText } from 'gsap/all'
import React, { useEffect } from 'react'
import gsap from 'gsap'

const Hero = () => {
    useEffect(() => {
        const heroSplit = new SplitText('.title', {type: 'chars ,words'})
        const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})

        heroSplit.chars.forEach((char) => {char.classList.add('text-gradient')})

        gsap.from(heroSplit.chars,{
            yPercent:"100",
            duration:1.8,
            ease:"expo.out",
            stagger:"0.06"
        })

        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:'100',
            duration:1.8,
            ease:'expo.out', 
            stagger:"0.06",
            delay:1
        })

        gsap.timeline({scrollTrigger:{
            trigger:"#hero",
            start:'top top',
            end: "bottom top",
            scrub:true
        }}).
            to(".right-leaf",{y:200},0).
            to(".left-leaf",{y:-200},0)
    },[])
  return (
    <>
    <section id='hero' className="noisy">
        <h1 className='title'>Mojito</h1>
        <img src="/public/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf' />
        <img src="/public/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf' />
        <div className='body'>
            <div className='content'>
                <div className='space-y-5 hidden md:block'>
                    <p>Cool. Crisp. Classic</p>
                    <p className='subtitle'>Sip spirit <br /> of Summer</p>
                </div>

                <div className='view-cocktails'>
                    <p className='subtitle'>
                        Every Coctails in our menu is a blend of premoum ingredients, creative flares and timeless recipes - designed to delight your senses.
                    </p>
                    <a href="#coctails">View Cocktails</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero