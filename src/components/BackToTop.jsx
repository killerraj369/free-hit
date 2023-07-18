import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import "../styles/BackToTop.css"
import { useContext } from 'react';
import { ToolContext } from '../App';

const BackToTopButton = () => {
  const { darkMode } = useContext(ToolContext);
  const [btnVisiblity, setBtnVisiblity] = useState(false)
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  useEffect(() => {
    const toggleVisiblity = () => {
      window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false)
    }
    window.addEventListener('scroll', toggleVisiblity)
    return () => {
      window.removeEventListener('scroll', toggleVisiblity)
    }
  }, [])

  return (
    <button onClick={handleScroll} duration={500} className={`top ${darkMode ? 'dark-mode' : ''}`} aria-label='Go to top' >
        <div
          className={` ${
            !btnVisiblity ? 'transition-before' : 'transition-after'
          } backToTopButton`}
        >
        <div className={`button ${darkMode ? 'dark-mode' : ''}`}>
          <i className="ri-arrow-up-s-line"></i>
        </div>
      </div>
    </button>
  )
}

export default BackToTopButton
