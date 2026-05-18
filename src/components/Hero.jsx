import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
 const videoRef = useRef(null);
 
 const isMobile = useMediaQuery({ maxWidth: 767 });
 
 
 useEffect(() => {
	const videoEl = videoRef.current;

	const heroSplit = new SplitText(".title", {
	 type: "chars, words",
	});
	
	const paragraphSplit = new SplitText(".subtitle", {
	 type: "lines",
	});
	
	// Apply text-gradient class once before animating
	heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
	
	gsap.from(heroSplit.chars, {
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	});
	
	gsap.from(paragraphSplit.lines, {
	 opacity: 0,
	 yPercent: 100,
	 duration: 1.8,
	 ease: "expo.out",
	 stagger: 0.06,
	 delay: 1,
	});
	
	gsap
	.timeline({
	 scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
		invalidateOnRefresh: true,
	 },
	})
	.to(".right-leaf", { y: 200 }, 0)
	.to(".left-leaf", { y: -200 }, 0)
	.to(".arrow", { y: 100 }, 0);
	
	const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	let tl = gsap.timeline({
	 scrollTrigger: {
			trigger: videoEl,
			start: startValue,
			end: endValue,
			scrub: true,
			pin: true,
			invalidateOnRefresh: true,
		},
	});

	const handleLoadedMetadata = () => {
	 if (!videoEl) return;
	 tl.to(videoEl, {
		currentTime: videoEl.duration,
		ease: "none",
	 });
	};

	if (videoEl) {
	 if (videoEl.readyState >= 1) {
		handleLoadedMetadata();
	 } else {
		videoEl.addEventListener("loadedmetadata", handleLoadedMetadata);
	 }
	}

	return () => {
	 if (videoEl) {
		videoEl.removeEventListener("loadedmetadata", handleLoadedMetadata);
	 }
	 tl.kill(); // without this, the video will not pop up when initially the website is loaded
	
	};
 }, []);
 
 return (
	<>
	 <section id="hero" className="noisy overflow-hidden">
		<h1 className="title">MOJITO</h1>
		
		<img
		 src="/public/images/hero-left-leaf.png"
		 alt="left-leaf"
		 className="left-leaf"
		/>
		<img
		 src="/public/images/hero-right-leaf.png"
		 alt="right-leaf"
		 className="right-leaf"
		/>
		
		<div className="body">
		 {/* <img src="/images/arrow.png" alt="arrow" className="arrow" /> */}
		 
		 <div className="content">
			<div className="space-y-5 hidden md:block">
			 <p>Cool. Crisp. Classic.</p>
			 <p className="subtitle">
				Sip the Spirit <br /> of Summer
			 </p>
			</div>
			
			<div className="view-cocktails">
			 <p className="subtitle">
				Every cocktail on our menu is a blend of premium ingredients,
				creative flair, and timeless recipes — designed to delight your
				senses.
			 </p>
			 <a href="#cocktails">View cocktails</a>
			</div>
		 </div>
		</div>
	 </section>
	 
	 <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src="/public/videos/output.mp4"
		/>
	 </div>
	</>
 );
};

export default Hero;
