import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Home from './pages/Home'
import Menu from './components/menu/Menu'
import About from './pages/About'
import Work from './pages/Work'
import Contact from './pages/Contact'
import ServicesPage from './pages/ServicesPage'

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <HelmetProvider>
    <BrowserRouter>
      {menuIsOpen && <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />}
      <Routes>
        <Route path="/" element={<Home menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />} />
        <Route path='/about' element={<About menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />} />
        <Route path='/work' element={<Work menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />} />
        <Route path='/contact' element={<Contact menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />} />
        <Route path='/services/:type' element={<ServicesPage menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />} />
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
