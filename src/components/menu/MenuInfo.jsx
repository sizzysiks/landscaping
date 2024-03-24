import { useEffect, useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MenuInfo (){
    const wrapperRef = useRef(null)

    useGSAP(()=>{
        const wrapper = wrapperRef.current;

        if (wrapper) {
          gsap.fromTo(wrapper, { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
        }
    }, { dependencies: [wrapperRef.current] });

    return(
        <div className="menu-wrapper menu-info" ref={wrapperRef}>
            <h3>Contact info</h3>
            <p>T: 0116 1867240</p>
            <p>Email: info@mail.com</p>
            <p>Address: LE31AT, United Kingdom</p>
        </div>
    )
}