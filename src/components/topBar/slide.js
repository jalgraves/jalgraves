import React from 'react'
import {
    StyledCloseMenu,
    StyledHamburger } from './styles'

const slide = require('../../utils/menuSlide')

export function toggleMenu(action) {
  return (
    <StyledHamburger>
      {action === "open" &&
          <button className="hamburger" id="open_menu" onClick={() => slide.menuOpen()}>Open Menu</button>
      }
      {action === "close" &&
          <StyledCloseMenu><button className="menu_close" id="close_menu" onClick={() => slide.menuClose()}>Close Menu</button></StyledCloseMenu>
      }
    </StyledHamburger>
  )
}

export const SlideMenuLogo = () => {
  return (
    <div >
        <img src={"/images/logos/jal.gif"}  alt="jalgraves" />
    </div>
  )
}
