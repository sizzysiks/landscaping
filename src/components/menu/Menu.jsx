import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import './menu.css'

import MenuWrapper from './MenuWrapper'
import MenuTitle from './MenuTitle'
import MenuInfo from './MenuInfo'
import MenuServices from './MenuServices'
import Nav from '../nav/Nav'

export default function Menu ({ menuIsOpen, setMenuIsOpen }){
    const wrapperRef = useRef(null)

    useGSAP(()=>{
        const wrapper = wrapperRef.current;

        if (wrapper) {
          gsap.fromTo(wrapper, { y: '-100%' }, { y: 0, duration: 0.4, ease: "expo.out" });
        }
    }, { dependencies: [wrapperRef.current] })

    return(
        <div className="menu" ref={wrapperRef}>
            {/* <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} doUnmountAnimation={doUnmountAnimation} setDoUnmountAnimation={setDoUnmountAnimation} /> */}
            {/* <MenuTitle /> */}
            <div className="menu-wrappers">
                <MenuWrapper setMenuIsOpen={setMenuIsOpen} />
                <MenuInfo />
            </div>
        </div>
    )
}