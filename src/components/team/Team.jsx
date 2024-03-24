import './team.css'

import img1 from '../../assets/team/team1.png'
import img2 from '../../assets/team/team2.png'
import img3 from '../../assets/team/team3.png'

export default function Team (){
    return(
        <div className="team">
            <div className="team-text">
                <h2>Our team of professionals</h2>
                <button className='secondary-btn'>Find our more</button>
            </div>

            <div className='team-imgs'>
                <div className='team-img-wrapper'>
                    <img src={img1} alt="" />
                    <div className="team-img-desc">
                        <h3>Jane Doe</h3>
                        <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div className='team-img-wrapper'>
                    <img src={img2} alt="" />
                    <div className="team-img-desc">
                        <h3>Michael Sims</h3>
                        <p>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</p>
                    </div>
                </div>
                <div className='team-img-wrapper'>
                    <img src={img3} alt="" />
                    <div className="team-img-desc">
                        <h3>Stacey Smith</h3>
                        <p>Lorem ipsum Lorem ipsum dolor sit. dolor sit amet.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}