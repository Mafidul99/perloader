import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import TopBar from './TopBar'
import './Header.css'
import Navbar from './Navbar'
import ContactBar from './ContactBar'

function Header() {
//   const [scrolled, setScrolled] = useState(false)
const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const header = document.getElementById('header')
      
      if (currentScrollY > 250) {
        if (currentScrollY > lastScrollY) {
          gsap.to(header, { y: '-100%', duration: 0.4, ease: 'power2.out' })
        } else {
          gsap.to(header, { y: '0%', duration: 0.4, ease: 'power2.out' })
        }
      } else {
        gsap.to(header, { y: '0%', duration: 0.3, ease: 'power2.out' })
      }
      lastScrollY = currentScrollY
    }
    
    let lastScrollY = window.scrollY
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    
    <>
     <div  className="sticky top-0 z-50">
    <TopBar />
    <ContactBar />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      {/* marquee 3d ui*/}
    <div className="w-full px-5 py-1 overflow-hidden shadow-md bg-gradient-to-r from-sky-900 to-cyan-800 shadow-cyan-800/50">
      <div className="flex animate-marquee whitespace-nowrap">
        <marquee className="flex px-4 space-x-2">
        <span className="text-sm font-medium text-white">Welcome to Our Bank - Your Trusted Financial Partner! &nbsp; |</span>
        <span className="text-sm font-medium text-white">Experience Seamless Banking with Us! &nbsp; |</span>
        <span className="text-sm font-medium text-white">Your Financial Success Starts Here! &nbsp; |</span>
        <span className="text-sm font-medium text-white">Discover the Future of Banking with Us! </span>
        </marquee>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header