import './portfolio.css'

import img1 from '../../assets/gallery1.png'
import img2 from '../../assets/gallery2.png'
import img3 from '../../assets/gallery3.png'
import img4 from '../../assets/gallery4.png'

import { FiArrowDownRight } from "react-icons/fi";

export default function Portfolio (){
    return(
        <section className="portfolio">
            {/* <div className="portfolio-top">
                <div className="portfolio-content">
                    <span>About us</span>
                    <p>CFE is transforming the way electricity is produced and delivered through advanced technology. Our energy storage solutions can be deployed rapidly and with pinpoint precision, can be used to make the power network more resilient. Our R&D team has been engaged in the clean energy business for more than 20 years.</p>
                    <small>Through innovative energy storage systems, we equip customers throughout Europe, Middle East, and Africa, from the smallest private consumers to the largest utilities, to achieve greater efficiency and security for their power needs.</small>
                    <button className='main-btn'>Read more</button>
                </div>

                <div className="portfolio-img"><img src={img1} alt="" /></div>
            </div> */}
            <h2>Our work</h2>
            <p>Explore a gallery of our finest landscaping creations, where nature meets design in perfect harmony. From lush garden retreats to captivating outdoor living spaces, each project exemplifies our commitment to craftsmanship, creativity, and transforming outdoor environments into works of art</p>

            <div className="portfolio-bottom">
                <div>
                    <div>
                        <img src={img2} alt="" />
                    </div>

                    <p>May 2024</p>
                    <h5>Landscaping and cleaning</h5>
                </div>
                <div>
                    <div><img src={img3} alt="" /></div>
                    <p>May 2024</p>
                    <h5>Landscaping and cleaning</h5>
                </div>
                <div>
                    <div><img src={img4} alt="" /></div>
                    <p>May 2024</p>
                    <h5>Landscaping and cleaning</h5>
                </div>
                <div>
                    <div><img src={img1} alt="" /></div>
                    <p>May 2024</p>
                    <h5>Landscaping and cleaning</h5>
                </div>
            </div>

            <button className='main-btn'>View more <FiArrowDownRight /></button>
        </section>
    )
}