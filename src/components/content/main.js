import React from 'react'
import { config } from '../../utils/main'
import { StyledContentContainer, StyledContent } from './styles'
import { HeroHeader } from './heroHeader/main'
const COLORS = config.colors

export const ContentContainer = (props) => {
    return (
        <StyledContent
            aria-labelledby={`Container ${props.label} content`}
            bgColor={props.bgColor || config.colors.backgroundGray}
            fontColor={props.fontColor || config.colors.black}
            pFontColor={props.pFontColor || config.colors.black}
            borderTop={props.borderTop}
        >
            {props.children}
        </StyledContent>
    )
}

export const Home = () => {
  return (
    <div>
      <HeroHeader/>
      <StyledContentContainer>
        <ContentContainer bgColor={COLORS.backgroundWhite} fontColor={COLORS.black} borderTop={`2px solid ${COLORS.blue}`} label="Main info">
          <h1>Jonny Graves</h1>
          <h5>Software Engineer</h5>
        </ContentContainer>
      </StyledContentContainer>
    </div>
  )
}
