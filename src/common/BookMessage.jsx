import './common.css'

import illust from '../assets/illust.png'

export default function BookMessage (){
    return(
        <div className="book-message">
            <div className="book-message-img">
                <img src={illust} alt="" />
            </div>

            <div className="book-message-content">
                <h1>Does your garden need expert work?<br></br>Let's chat</h1>
                <button className='main-btn'>Contact us</button>
            </div>
        </div>
    )
}