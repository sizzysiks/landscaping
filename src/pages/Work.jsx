import './pages.css'

import Nav from '../components/nav/Nav'
import Footer from '../components/Footer/Footer'
import WorkContent from '../components/work/WorkContent'

export default function Work ({ menuIsOpen, setMenuIsOpen, doUnmountAnimation, setDoUnmountAnimation }){
    return(
        <div className="work page">
            <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} doUnmountAnimation={doUnmountAnimation} setDoUnmountAnimation={setDoUnmountAnimation} />
            <WorkContent />
            <Footer />
        </div>
    )
}