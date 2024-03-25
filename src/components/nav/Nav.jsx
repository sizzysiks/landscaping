import { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Nav = ({ menuIsOpen, setMenuIsOpen, bg }) =>{
    const [showDropdown, setShowDropdown] = useState(false)

    const wrapperRef = useRef(null);

    const handleCloseMenu = () =>{
        setMenuIsOpen(!menuIsOpen)
    }

    return(
        <div className="nav" style={{ background: bg }}>
            <div className="nav-menu" ref={wrapperRef}>
                <Link to='/' className='nav-logo'>
                {/* <img src={logo} alt="" /> */}
                    <p>H&S</p>
                </Link>

                <div className='nav-content'>
                    <div className="nav-right">
                        <Link to="/about" className='link'>About us</Link>

                        <div className='link' onPointerEnter={()=>{setShowDropdown(true)}}>
                            <div className="link-label">
                                Services <IoIosArrowDown />
                            </div>

                            {showDropdown?
                            <div className="link-dropdown" onPointerLeave={()=>{setShowDropdown(false)}}>
                                <Link className='sub-link' to="/services/garder-design">Garder design</Link>
                                <Link className='sub-link' to="/services/lawn-care">Lawn care</Link>
                                <Link className='sub-link' to="/services/hardscaping">Hardscaping</Link>
                                <Link className='sub-link' to="/services/renovation">Renovation</Link>
                            </div>
                            : ""}
                        </div>

                        <Link to="/work" className='link'>Portfolio</Link>

                        <Link to="/contact" className='link'>Contact</Link>
                        {/* <span><FiPhone /> (44) 0116 5675433</span> */}
                        <button className='nav-cta-btn'>Get a quote</button>
                        <button className='nav-menu-btn' style={{ fontSize: '1.5rem' }} onClick={handleCloseMenu}><AiOutlineMenu /></button>
                    </div>
                </div>
            </div>
{/* 
            <div className="nav-marquee">
                <Marquee className="marquee">
                    <small>USE ANY PAYMENT METHOD</small>
                </Marquee>
            </div> */}
        </div>
    )
}

export default Nav