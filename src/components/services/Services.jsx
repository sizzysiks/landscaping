import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css'

import { MdOutlineDesignServices } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

import cover from '../../assets/cover1.png'

export default function Services (){
    const wrapperRef = useRef(null)
    const coverRef = useRef(null)

    const containerRef = useRef(null);
    const [dragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const handleMouseDown = (event) => {
      setDragging(true);
      setStartX(event.pageX - containerRef.current.offsetLeft);
      setScrollLeft(containerRef.current.scrollLeft);
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    const handleMouseMove = (event) => {
      if (!dragging) return;
      const x = event.pageX - containerRef.current.offsetLeft;
      const walk = (x - startX) * 2; // You can adjust the multiplier to control the sensitivity of the slider
      containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchStart = (event) => {
        setDragging(true);
        const touch = event.touches[0];
        setStartX(touch.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };
    
    const handleTouchMove = (event) => {
        if (!dragging || !event.touches[0]) return;
        const touch = event.touches[0];
        const x = touch.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // You can adjust the multiplier to control the sensitivity of the slider
        containerRef.current.scrollLeft = scrollLeft - walk;
    };
    
    const handleTouchEnd = () => {
        setDragging(false);
    };

    useGSAP(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(coverRef.current, { scale: 1 }, {
            scale: 1.2,
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 50%',
              scrub: true,
              end: 'bottom top', // Trigger end position
            },
            duration: 0.4
        });
    }, { dependencies: [] });

    return(
        <section className="services" ref={wrapperRef}>
            <div className="services-cover">
                <img src={cover} alt="" ref={coverRef} />
            </div>

            <div className="services-title">
                <h2>What services do we offer</h2>
                <span><FaArrowRightLong/></span>
            </div>

            <div 
                className="services-top" 
                ref={containerRef} 
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onTouchCancel={handleTouchEnd} // In case touch is cancelled
            >
                <div className="service">
                    <span><MdOutlineDesignServices /></span>

                    <small>01</small>
                    <p>Garden Design and Installation</p>
                    <small>Tailored garden design services, including consultation, planning, and implementation of custom landscapes to suit your preferences and property layout.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div className="service">
                    <span><FaTools /></span>
                    <small>02</small>
                    <p>Lawn Care and Maintenance</p>
                    <small>Comprehensive lawn care services, from mowing and edging to fertilization and weed control, ensuring your lawn remains healthy and vibrant throughout the seasons.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div className="service">                                  
                    <span><FaScissors /></span>
                    <small>03</small>
                    <p>Hardscaping and Outdoor Living Spaces</p>
                    <small>Expertly crafted hardscape features such as patios, walkways, retaining walls, and outdoor kitchens, designed to complement your landscape and enhance outdoor living enjoyment.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div className="service">                 
                    <span>04</span>
                    <p>Landscape Renovation and Enhancement</p>
                    <small>Revitalize your existing landscape with our renovation and enhancement services, which may include plantings, irrigation upgrades, lighting installations, and sustainable landscaping solutions to breathe new life into your outdoor space.</small>
                    <button className='main-btn'>Read more</button>
                </div>
            </div>
        </section>
    )
}