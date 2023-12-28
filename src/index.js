import React from "react"
import { createRoot } from "react-dom/client"
import { MainMenuBar } from "@jalgraves/react-components-library"
import ReactRoutes from "./components/reactRoutes.js"
import { Footer } from "./components/content/footer/main.js"
import { config } from "./utils/main.js"
const PAGES = config.pages
const COLORS = config.colors
const FONTS = config.fonts
const IMG_STYLES = {
  margin: ".5em auto",
  padding: "1em 0",
  maxWidth: "60vw",
  maxHeight: "4rem",
  position: "absolute",
  left: "4rem",
  top: "1rem"
}

const container = document.getElementById("app")
const footerContainer = document.getElementById("footer")
const topBarContainer = document.getElementById("topBar")
const app = createRoot(container)
const footer = createRoot(footerContainer)
const topBar = createRoot(topBarContainer)

topBar.render(
  <MainMenuBar
    pages={PAGES}
    fontColor={COLORS.white}
    fontFamily={FONTS.content}
    barColor={COLORS.black}
    navBarLogoImgStyles={IMG_STYLES}
    slideMenuBackgroundColor={COLORS.backgroundGray}
    slideMenuFontColor={COLORS.dodgerBlue}
    slideMenuFontFamily={FONTS.content}
    slideMenuLinkListBorder={`.1rem solid ${COLORS.dodgerBlue}`}
    slideMenuLinkListBorderRadius="4px"
    hoverColor={COLORS.dodgerBlue}
    mainMenuBarImgSource={`${config.urls.static}/img/jal.gif`}
    slideMenuLogoImgSource={`${config.urls.static}/img/jal.gif`}
  />
)



if (app) {
  app.render(
    <ReactRoutes/>
  )
}

footer.render(
  <Footer/>
)
