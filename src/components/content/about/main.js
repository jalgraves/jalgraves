import React from 'react'
import { StyledContentContainer, StyledContent } from '../styles'
import { ContentContainer } from '../main'
import { config } from '../../../utils/main'

const COLORS = config.colors

const faq = () => {
  return (
    <ContentContainer bgColor={COLORS.darkGray} pFontColor={COLORS.yellow}>
    </ContentContainer>
  )
}

export const AboutInfo = () => {
  return (
    <div>
        <StyledContentContainer margin="5rem auto auto auto">
            <ContentContainer bgColor={COLORS.backgroundGray} pFontColor={COLORS.black}>
                <section>
                </section>
            </ContentContainer>
            <StyledContent bgColor="#383838" fontColor='#fcba03'>
                {faq()}
            </StyledContent>
        </StyledContentContainer>
    </div>
  )
}
