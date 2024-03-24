import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function MenuWrapper ({ setMenuIsOpen }){
    const wrapperRef = useRef(null)

    const navigate = useNavigate();

    const handleLink = (link) =>{
        setMenuIsOpen(false)
        navigate(link)
    }

    useGSAP(()=>{
        const wrapper = wrapperRef.current;

        if (wrapper) {
          gsap.fromTo(wrapper, { y: '-100%', opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" });
        }
    }, { dependencies: [wrapperRef.current] })

    return(
        <div className="menu-wrapper" ref={wrapperRef}>
            <h3>MENU</h3>
            <button className="menu-link" onClick={()=>{ handleLink("/about") }}>About us</button>
            <button className="menu-link" onClick={()=>{ handleLink("/work") }}>Our Work</button>
            <button className="menu-link" onClick={()=>{ handleLink("/contact") }}>Contact</button>
        </div>
    )
}