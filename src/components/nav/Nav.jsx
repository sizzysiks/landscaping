import { useRef } from 'react';
import { Link } from 'react-router-dom'
import './nav.css'

import { AiOutlineMenu } from 'react-icons/ai'
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Nav = ({ menuIsOpen, setMenuIsOpen, setDoUnmountAnimation }) =>{
    const wrapperRef = useRef(null);

    const handleCloseMenu = () =>{
        // If button is true and about to become false 
        if(menuIsOpen){
            setDoUnmountAnimation(true)

            setTimeout(()=>{
                setMenuIsOpen(!menuIsOpen)
            }, 400)
        } else{
            setDoUnmountAnimation(false)
            setMenuIsOpen(!menuIsOpen)
        }
    }

    return(
        <div className="nav">
            <div className="nav-menu" ref={wrapperRef}>
                <Link to='/' className='nav-logo'>
                {/* <img src={logo} alt="" /> */}
                    <p>H&S</p>
                </Link>

                <div className='nav-content'>
                    <div className="nav-right">
                        <Link className='link'>About us</Link>
                        <Link className='link'>Services <IoIosArrowDown /></Link>
                        <Link className='link'>Portfolio</Link>
                        <Link className='link'>Contact</Link>
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