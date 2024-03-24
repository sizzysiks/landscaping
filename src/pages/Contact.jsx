import './pages.css'

import Nav from '../components/nav/Nav'
import Footer from '../components/Footer/Footer'
import ContactContent from '../components/contact/ContactContent'

export default function Contact ({ menuIsOpen, setMenuIsOpen, doUnmountAnimation, setDoUnmountAnimation }){
    return(
        <div className="contact page">
            <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} doUnmountAnimation={doUnmountAnimation} setDoUnmountAnimation={setDoUnmountAnimation} />
            <ContactContent />
            <Footer />
        </div>
    )
}