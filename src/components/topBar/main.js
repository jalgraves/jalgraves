import React from 'react'
import {
    StyledSlideMenu,
    StyledNavBar,
    StyledLink } from './styles'
import { Icon } from '../content/icons/main'
import { config } from '../../utils/main'
import {toggleMenu, SlideMenuLogo } from './slide'
import { NavBarLogo, navBar } from './navBar'

const COLORS = config.colors

export function linkProps(pages, menuType) {
    const pageProps = []
    let id = 0
    for (const page of Object.keys(pages)) {
            if (pages[page][menuType] === true) {
                pageProps.push({id: id, name: pages[page].name, iconName: pages[page].icon, text: pages[page].text})
            }
        ++id
    }
    return pageProps
}

const iconStyle = {
    color: '#fcba03',
    fontSize: '1em'
}

export function LinkList(props) {
    const slider = props.pages.map((page) =>
        <StyledLink key={page.id}>
        <a href={page.name} className="animate">
        <Icon iconName={page.iconName} style={iconStyle} /> {page.text}</a>
        </StyledLink>
    )
    return (
        <div>{slider}</div>
    )
}

export const MainMenuBar = (props) => {
    const menuList = <LinkList pages={linkProps(props.pages, 'menu_list')} />
    return(
        <StyledNavBar barColor={props.barColor} aria-labelledby="Navigation bar">
            <StyledSlideMenu menuColor={props.menuColor} aria-labelledby="Slide menu">
                <div className="slide_menu">
                <SlideMenuLogo />
                    <div className="menu_list">{menuList}</div>
                    {toggleMenu("close")}
                    <h2></h2>
                </div>
            </StyledSlideMenu>
            {toggleMenu("open")}
            <NavBarLogo />
            {navBar(props.pages)}
        </StyledNavBar>
    )
}
