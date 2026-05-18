import gsap from 'gsap'
import { SplitText } from 'gsap/all'
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {

        const ctx = gsap.context(() => {
            const titleSplit = SplitText.create("#about h2", {
                type: "words"
            })

            const scrollTimeLine = gsap.timeline({
                scrollTrigger: {
                    trigger: "#about",
                    start: "top center",
                }
            })

            scrollTimeLine.from(titleSplit.words, {
                opacity: 0,
                duration: 1,
                yPercent: 100,
                stagger: 0.02,
                ease: "expo.out"
            }).from(
                ".top-grid > div, .bottom-grid > div",
                {
                    opacity: 0,
                    duration: 1,
                    stagger: 0.04,
                    ease: "power1.out",
                },
                "-=0.5"
            );
        })

        return () => ctx.revert();

        return () => {

            scrollTimeLine.kill(); // without this, the video will not pop up when initially the website is loaded

        };
    }, [])
    return (
        <div id="about">
            <div className='mb-16 md:px-0 px-5'>
                <div className="content">
                    <div className="md:col-span-8">
                        <p className='badge'>Best Coctails</p>
                        <h2>Where every details matter
                            <span className='text-white'>-</span>
                            From muddle to garnish
                        </h2>
                    </div>
                    <div className="sub-content">
                        <p>
                            Every coctails we servce is reflestions of our obsession with the details - from the first muddle to the final garnnish.
                            That core is what turns a simple drinks into something truly memorable
                        </p>
                        <div>
                            <p className="md:text-3xl text-xl font-bold "><span>4.5</span>/5</p>
                            <p className='text-sm text-white-100'>
                                More than +10k reviews
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="top-grid">
                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt1.png" alt="" />
                </div>

                <div className='md:col-span-6'>
                    <div className='noisy' />
                    <img src="/public/images/abt2.png" alt="" />
                </div>

                <div className='md:col-span-3'>
                    <div className='noisy' />
                    <img src="/public/images/abt5.png" alt="" />
                </div>
            </div>
            <div className="bottom-grid">
                <div className='md:col-span-8'>
                    <div className='noisy' />
                    <img src="/public/images/abt3.png" alt="" />
                </div>
                <div className='md:col-span-4'>
                    <div className='noisy' />
                    <img src="/public/images/abt4.png" alt="" />
                </div>

            </div>
        </div>
    )
}

export default About