import './contact.css'

import Map from '../../common/Map'

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

export default function ContactContent (){
    return(
        <div className="contact-content">
            <div className="contact-content-top">
                <h5>Contact Us</h5>
                <h1>Get in touch</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum sint neque corporis ea labore consequatur!</p>
            </div>

            <div className="contact-content-adress">
                <div className='contact-content-map'><Map /></div>
            </div>

            <div className="contact-content-info">
                <div>
                    <span><FaLocationDot /></span>
                    <h4>Visit us</h4>
                    <p>Visit our office in Leicester.</p>
                    <button>18 Groby St</button>
                </div>
                <div>
                    <span><FaPhone /></span>
                    <h4>Call us</h4>
                    <p>Mon-Fri from 09:00-17:00</p>
                    <button>0116 9887761020</button>
                </div>
                <div>
                    <span><MdAlternateEmail /></span>
                    <h4>Email us</h4>
                    <p>Send us an email for a quote</p>
                    <button>info@business.co.uk</button>
                </div>
            </div>  
        </div>
    )
}