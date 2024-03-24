import './about.css'

import img1 from '../../assets/about/about1.png'
import img2 from '../../assets/about/about2.png'
import img3 from '../../assets/about/about3.png'
import BookMessage from '../../common/BookMessage'

export default function AboutContent (){
    return(
        <div className="about-content">
            <div className="about-top">
                <h1>Find out about Voltwise</h1>
                <p>With years of industry expertise under our belts, we understand the importance of safe and reliable electrical systems for both residential and commercial properties. Whether you need a quick repair, a comprehensive installation, or routine maintenance, we've got you covered.</p>
                <p>At [Company Name], we pride ourselves on our professionalism, integrity, and customer satisfaction. Our skilled technicians undergo rigorous training to stay up-to-date with the latest advancements in electrical technology and techniques, ensuring that we can handle any project with precision and efficiency.</p>
            </div>
            
            <div className="about-slideshow">
                <div id='about-img1'><img src={img1} alt="" /></div>
            </div>

            <div className="about-achievements">
                <h2>Achievements</h2>
                <div>
                    <p>Exceptional Customer Satisfaction</p>
                    <small>We take pride in our track record of consistently exceeding customer expectations. Our dedication to providing prompt, reliable service and prioritizing customer satisfaction has earned us glowing reviews and repeat business from countless satisfied clients.</small>
                </div>
                <div>
                    <p>Safety Excellence</p>
                    <small>Safety is our top priority on every job site. Our commitment to adhering to industry-best safety practices and ensuring the well-being of our team and clients has resulted in an impeccable safety record. We continuously invest in safety training and equipment to maintain our high standards.</small>
                </div>
                <div>
                    <p>Community Engagement</p>
                    <small>We believe in giving back to the communities we serve. Through participation in local events, charity drives, and pro bono work, we have made a positive impact on the neighborhoods and organizations that support us. Our involvement demonstrates our commitment to being more than just a service provider but also a responsible community partner.</small>
                </div>
            </div>

            <div className="about-slideshow">
                <div id='about-img2'><img src={img2} alt="" /></div>
            </div>

            <BookMessage />
        </div>
    )
}