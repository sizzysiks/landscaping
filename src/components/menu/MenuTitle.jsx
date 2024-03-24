import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MenuTitle (){
    const wrapperRef = useRef(null)

    useGSAP(()=>{
        const wrapper = wrapperRef.current;

        if (wrapper) {
          gsap.fromTo(wrapper, { y: '-100%' }, { y: 0, duration: 0.6, ease: "expo.out" });
        }
    }, { dependencies: [wrapperRef.current] })

    return(
        <div className="menu-title" ref={wrapperRef}>
            <h1>VOLTWISE</h1>
        </div>
    )
}