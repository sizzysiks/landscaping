import { Helmet } from 'react-helmet-async'
import './pages.css'

import Nav from '../components/nav/Nav'
import Footer from '../components/Footer/Footer'
import AboutContent from '../components/about/AboutContent'

export default function About ({ menuIsOpen, setMenuIsOpen }){
    return(
        <div className="about page">
            <Helmet>
                <title>About us</title>
                <meta name='description' content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                <link rel="canonical" href="https://www.aegis.plus/" />
                {/* Include Open Graph and Twitter Card meta tags for social media sharing */}
                <meta property="og:title" content="Aegis+ | Home" />
                <meta property="og:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                <meta property="og:url" content="https://www.aegis.plus/" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://www.example.com/images/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Aegis+ | Home" />
                <meta name="twitter:description" content='We are Aegis, a web design studio based in Leicester - We design innovative solutions for your business. Explore our portfolio and services.' />
                {/* <meta name="twitter:image" content="https://www.example.com/images/twitter-card-image.jpg" /> */}
            </Helmet>
            
            <Nav menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} bg='black' />
            <AboutContent />
            <Footer />
        </div>
    )
}