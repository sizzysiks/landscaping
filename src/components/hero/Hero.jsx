import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import './hero.css'

import cover from '../../assets/cover.png'

export default function Hero (){
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useGSAP(()=>{
        gsap.fromTo(titleRef.current, { y: 200, opacity: 0 }, { y:0, opacity: 1, duration: 1.2, ease: 'expo.out' })
        gsap.fromTo(textRef.current, { y: 200, opacity: 0}, { y:0, opacity: 1, duration: 1.4, ease: 'expo.out' })
        gsap.fromTo(imgRef.current, { y: 200, opacity: 0 }, { y:0, opacity: 1, duration: 1.5, ease: 'expo.out' })
    }, { dependencies: [] })

    return(
        <div className="hero" ref={wrapperRef}>
            <div className='hero-image' ref={imgRef}><img src={cover} alt="cover2" /></div>
            
            <div className="hero-top">
                <h1 ref={titleRef}>Creating your outdoor <span>oasis</span></h1>
                <div>
                    <p ref={textRef}>With a blend of creativity and expertise, we sculpt landscapes that not only enhance the beauty of your property but also nourish your soul.</p>
                </div>
                <div>
                    <button className='main-btn'>Call us</button>
                </div>
            </div>
        </div>
    )
}