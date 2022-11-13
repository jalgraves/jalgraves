import React from 'react'
import ReactDOM from 'react-dom'
import ReactRoutes from './components/reactRoutes'
import { Footer } from './components/content/footer/main'
import { MainMenuBar } from './components/topBar/main'
import { config } from './utils/main'
const PAGES = config.pages
const COLORS = config.colors

ReactDOM.render(
    <MainMenuBar
        pages={PAGES}
        fontColor={COLORS.white}
        barColor={COLORS.black}
        menuColor={COLORS.gray} />,
    document.getElementById('topBar')
)

if (document.getElementById('app')) {
    ReactDOM.render(
        <ReactRoutes/>,
        document.getElementById('app')
    )
}

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
)
