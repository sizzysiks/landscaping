import './reviews.css'

import img from '../../assets/review.png'
import icon from '../../assets/review-icon.jpg'

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Reviews (){
    return(
        <div className="reviews">
            <div className="reviews-content">
                <div>
                    <span>Reviews</span>
                    <h3 className="quote-text">"Quick, professional, and friendly service!"</h3>
                    <small>- Emily S.</small>
                </div>
                <p>100+ satisfied customers across the Midlands trust us for their electrical needs. With our commitment to excellence and personalized service, we've earned a reputation for reliability and quality workmanship.</p>
            </div>

            <div className='review-icon-img'>
                <img src={icon} alt="" />
            </div>

            {/* <div className="reviews-img">
                <img src={img} alt="" />
            </div> */}
        </div>
    )
}