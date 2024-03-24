import './pages.css'

import Nav from '../components/nav/Nav'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/about/AboutContent'

export default function About ({ menuIsOpen, setMenuIsOpen, doUnmountAnimation, setDoUnmountAnimation }){
    return(
        <div className="about page">
            <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} doUnmountAnimation={doUnmountAnimation} setDoUnmountAnimation={setDoUnmountAnimation} />
            <AboutContent />
            <Footer />
        </div>
    )
}