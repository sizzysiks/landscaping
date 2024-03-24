import { useRef } from "react"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MenuServices (){
    const wrapperRef = useRef(null)

    useGSAP(()=>{
        const wrapper = wrapperRef.current;

        if (wrapper) {
          gsap.fromTo(wrapper, { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
        }
    }, { dependencies: [wrapperRef.current] })

    return(
        <div className="menu-wrapper menu-services" ref={wrapperRef}>
            <h3>SERVICES</h3>
            <p>Doing stuff</p>
            <p>Better things with us</p>
            <p>Big and best services</p>
        </div>
    )
}