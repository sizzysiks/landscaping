import './intro.css'

import img from '../../assets/prof.png'

export default function Intro (){
    return(
        <section className="intro">
            {/* <div className="intro-img">
                <img src={img} alt="" />
            </div> */}
            <div>
                <span>About us</span>
                <p>Your trusted partner in creating stunning outdoor spaces that enhance the beauty and functionality of your property. With over 10 years of experience in the landscaping industry, we take pride in delivering exceptional craftsmanship and personalized service to each of our clients.</p>
                <small>We take great pride in our reputation for reliability, professionalism, and customer satisfaction. When you choose us, you can trust that your landscaping project will be completed with the highest standards of excellence and integrity.</small>
                <button className='main-btn'>Read more</button>
            </div>
        </section>
    )
}