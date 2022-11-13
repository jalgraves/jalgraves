import React from 'react'
import { Icon } from '../icons/main'
import { config } from '../../../utils/main'
const urls = config.urls

const iconStyle = {
	padding: '0 .25em',
    color: config.colors.yellow,
    fontSize: '3rem'
}

export const SocialNav = () => {
    return (
        <nav style={{margin: '1rem auto'}}>
            <a href={urls["github"]}><Icon iconName="faGithub" style={iconStyle} /></a>
        </nav>
    )
}
