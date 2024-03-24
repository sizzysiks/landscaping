import './work.css'

import img1 from '../../assets/about/about1.png'
import img2 from '../../assets/about/about2.png'
import BookMessage from '../../common/BookMessage'

export default function WorkContent (){
    return(
        <div className="work-content">
            <div className="work-content-top">
                <h1>Our work speaks</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore odio, necessitatibus repellat veritatis nesciunt.</p>
            </div>

            <div className="work-content-cases-wrapper">
                <div className="work-content-cases">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                </div>
                <div className="work-content-cases">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                </div>
                <div className="work-content-cases">
                    <div><img src={img1} alt="" /></div>
                    <div><img src={img2} alt="" /></div>
                </div>
            </div>

            <BookMessage />
        </div>
    )
}