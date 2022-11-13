import React from 'react'
import { linkProps } from './main'
import { config } from '../../utils/main'
import { StyledTopNav } from './styles'

const COLORS = config.colors

export const NavBarLogo = () => {
    var imgStyles = {position: 'absolute', padding: '.25em'}
    return (
        <a href="/">
            <img style={imgStyles} src={"/images/logos/jal.svg"}  alt="jalgraves" />
        </a>
    )
}

function TopNavBar(props) {
    const navBar = props.props.map((prop) =>
        <a key={prop.id} href={prop.name}>{prop.text}</a>
    )
    return (
        <StyledTopNav hoverColor={props.hoverColor} fontColor={props.fontColor}>
            <nav className="top_nav">{navBar}</nav>
        </StyledTopNav>
    )
}

export function navBar(pages) {
    return (
        <TopNavBar
            fontColor={COLORS.white}
            hoverColor={COLORS.cyan}
            props={linkProps(pages, 'top_menu')}
        />
    )
}
