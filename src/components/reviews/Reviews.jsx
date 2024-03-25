import './reviews.css'

import img from '../../assets/review.png'
import icon from '../../assets/review-icon.jpg'
import img1 from '../../assets/reviews/review1.png'
import img2 from '../../assets/reviews/review2.png'
import img3 from '../../assets/reviews/review3.png'
import stars from '../../assets/reviews/stars.png'

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Reviews (){
    return(
        <div className="reviews">
            <h2>Our reviews</h2>
            <p>See what our customers say about us. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, quod?</p>

            <div className="reviews-cards">
                <div className="card">
                    <div className="card-top">
                        <div className="rating"><img src={stars} alt="" /></div>
                        <div className="card-img"><img src={img1} alt="" /></div>
                    </div>

                    <p>Julia A.</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione animi perferendis doloremque aperiam molestias.</small>
                    <button className='main-btn'>Read reviews</button>
                </div>

                <div className="card">
                    <div className="card-top">
                        <div className="rating"><img src={stars} alt="" /></div>
                        <div className="card-img"><img src={img2} alt="" /></div>
                    </div>

                    <p>Julia A.</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione animi perferendis doloremque aperiam molestias.</small>
                    <button className='main-btn'>Read reviews</button>
                </div>

                <div className="card">
                    <div className="card-top">
                        <div className="rating"><img src={stars} alt="" /></div>
                        <div className="card-img"><img src={img3} alt="" /></div>
                    </div>

                    <p>Julia A.</p>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione animi perferendis doloremque aperiam molestias.</small>
                    <button className='main-btn'>Read reviews</button>
                </div>
            </div>


            {/* <div className="reviews-content">
                <div>
                    <span>Reviews</span>
                    <h3 className="quote-text">"Quick, professional, and friendly service!"</h3>
                    <small>- Emily S.</small>
                </div>
                <p>100+ satisfied customers across the Midlands trust us for their electrical needs. With our commitment to excellence and personalized service, we've earned a reputation for reliability and quality workmanship.</p>
            </div>

            <div className='review-icon-img'>
                <img src={icon} alt="" />
            </div> */}

            {/* <div className="reviews-img">
                <img src={img} alt="" />
            </div> */}
        </div>
    )
}