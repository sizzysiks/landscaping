import './pages.css'

import Nav from '../components/nav/Nav'
import Footer from '../components/Footer/Footer'
import ContactContent from '../components/contact/ContactContent'

export default function ServicesPage ({ menuIsOpen, setMenuIsOpen, doUnmountAnimation, setDoUnmountAnimation }){
    return(
        <div className="services page">
            <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} doUnmountAnimation={doUnmountAnimation} setDoUnmountAnimation={setDoUnmountAnimation} />
            adasda
            <Footer />
        </div>
    )
}