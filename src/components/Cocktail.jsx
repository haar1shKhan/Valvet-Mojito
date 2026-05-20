import React, { useEffect } from 'react'
import { cocktailLists, mockTailLists } from '../../constant'
import gsap from 'gsap';

const Cocktail = () => {

    useEffect(() => {

        const ctx = gsap.context(() => { // chaining of the animations will not work without gsap.context
        const leftLeaf = document.getElementById('c-left-leaf');
        const rightLeaf = document.getElementById('c-right-leaf');

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })

        tl.from(leftLeaf, { x: -100, y: 100 })
          .from(rightLeaf, { x: 100, y: 100 })
        })

      return () => ctx.revert();
     
        
    }, [])
  return (
    <section id='cocktails' className='noisy'>
        <img id='c-left-leaf' src="/images/cocktail-left-leaf.png" alt="left-leaf" />
        <img id='c-right-leaf' src="/images/cocktail-right-leaf.png" alt="right-leaf" />

        <div className="list">
            <div className="popular">
                <h2>Most popular Cocktails</h2>

                <ul>
                    {cocktailLists.map((drinks) => (
                        <li key={drinks.name}>
                            <div className="md:me-28">
                                <h3>{drinks.name}</h3>
                                <p>{drinks.country} | {drinks.detail}</p>      
                            </div>
                            <span>{drinks.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most loved  Mocktails</h2>

                <ul>
                    {mockTailLists.map((drinks) => (
                        <li key={drinks.name}>
                            <div className="md:me-28">
                                <h3>{drinks.name}</h3>
                                <p>{drinks.country} | {drinks.detail}</p>      
                            </div>
                            <span>{drinks.price}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktail