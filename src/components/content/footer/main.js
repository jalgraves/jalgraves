import React from 'react'
import { SocialNav } from './social'
import { StyledFooter } from './styles'

export const Footer = () => {
    const year = new Date().getFullYear()
    const gitHash = process.env.GIT_HASH
    const version = process.env.VERSION
    return (
        <StyledFooter fontColor="white" backgroundColor="transparent" aria-labelledby="Page footer">
            <footer>
                <img src="/images/logos/jal.gif" alt="Jalgraves logo" />
                <h3>Boston Mass</h3>
                <h2>Stay Connected</h2>
                <SocialNav/>
                <h2>{'© ' + year} JALGRAVES </h2>
                <h4>Commit: {gitHash} Version: {version}</h4>
            </footer>
        </StyledFooter>
    )
}
