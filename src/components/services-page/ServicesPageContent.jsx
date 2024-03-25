import { Link } from 'react-router-dom'
import './service-page.css'

import cover from '../../assets/services/service.png'

export default function ServicesPageContent ({ type }){
    return(
        <div className="services-page-content">
            <div className="services-page-content-top">
                <img src={cover} alt="" />
            </div>

            <div className="services-page-content-text">
                <div className="services-page-content-text-categories">
                    <Link className='services-page-link'>Garder design</Link>
                    <Link className='services-page-link'>Lawn care</Link>
                    <Link className='services-page-link'>Hardscaping</Link>
                    <Link className='services-page-link'>Renovation</Link>
                </div>

                <div className="services-page-content-text-content">
                    <h2>{type}</h2>
                    
                    <p>Our comprehensive lawn maintenance services go beyond simple mowing. We meticulously trim edges, fertilize with high-quality nutrients, and implement targeted weed control strategies to ensure your lawn stays healthy and vibrant throughout the year. With regular maintenance schedules tailored to your lawn's specific needs, we guarantee a lush, green carpet that enhances the beauty of your property</p>
                    <p>Elevate your outdoor living experience with our custom garden design and installation services. Our expert team collaborates closely with you to understand your vision, incorporating elements such as perennial beds, flowering shrubs, and ornamental trees to create a stunning landscape that reflects your personal style. From initial concept sketches to final planting, we handle every aspect of the design process, ensuring a seamless and breathtaking transformation of your outdoor space.</p>
                    <p>Enhance the functionality and aesthetics of your outdoor environment with our professional hardscape construction services. Whether you dream of a tranquil patio retreat or a grand entrance adorned with elegant stone walkways, our skilled craftsmen bring your vision to life with precision and expertise. We work with a variety of materials, from natural stone to pavers and concrete, to create durable and visually striking hardscape features that seamlessly integrate with your landscape design.</p>
                </div>
            </div>
        </div>
    )
}