import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './services.css'

import { FaLongArrowAltRight } from "react-icons/fa";

import { MdOutlineDesignServices } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaScissors } from "react-icons/fa6";

export default function Services (){
    const wrapperRef = useRef(null)
    const srv1 = useRef(null)
    const srv2 = useRef(null)
    const srv3 = useRef(null)
    const srv4 = useRef(null)

    useGSAP(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(srv1.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 50%',
              end: 'bottom top', // Trigger end position
            },
            duration: 0.4
        });
        
        gsap.fromTo(srv2.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 50%',
              end: 'bottom top',
            },
            duration: 0.6
        });

        gsap.fromTo(srv3.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 50%',
              end: 'bottom top', // Trigger end position
            },
            duration: 0.8
        });

        gsap.fromTo(srv4.current, { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' }, {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            scrollTrigger: {
              trigger: wrapperRef.current,
              start: 'top 50%',
              end: 'bottom top', // Trigger end position
            },
            duration: 1
        });
    }, { dependencies: [] });

    return(
        <section className="services" ref={wrapperRef}>
            <h2>What services do we offer</h2>

            <div className="services-top">
                <div ref={srv1} className="service">
                    {/* <div className="service-top">
                        <img src={serv1} alt="" />
                    </div> */}
                    <span><MdOutlineDesignServices /></span>

                    <small>01</small>
                    <p>Garden Design and Installation</p>
                    <small>Tailored garden design services, including consultation, planning, and implementation of custom landscapes to suit your preferences and property layout.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div ref={srv2} className="service">
                    {/* <div className="service-top">
                        <img src={serv2} alt="" />
                    </div> */}

                    <span><FaTools /></span>
                    <small>02</small>
                    <p>Lawn Care and Maintenance</p>
                    <small>Comprehensive lawn care services, from mowing and edging to fertilization and weed control, ensuring your lawn remains healthy and vibrant throughout the seasons.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div ref={srv3} className="service">
                    {/* <div className="service-top">
                        <img src={serv3} alt="" />
                    </div> */}
                    
                    <span><FaScissors /></span>
                    <small>03</small>
                    <p>Hardscaping and Outdoor Living Spaces</p>
                    <small>Expertly crafted hardscape features such as patios, walkways, retaining walls, and outdoor kitchens, designed to complement your landscape and enhance outdoor living enjoyment.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div ref={srv4} className="service">
                    {/* <div className="service-top">
                        <img src={serv4} alt="" />
                    </div> */}

                    <span>04</span>
                    <p>Landscape Renovation and Enhancement</p>
                    <small>Revitalize your existing landscape with our renovation and enhancement services, which may include plantings, irrigation upgrades, lighting installations, and sustainable landscaping solutions to breathe new life into your outdoor space.</small>
                    <button className='main-btn'>Read more</button>
                </div>
            </div>
        </section>
    )
}