import React from 'react'
import { StyledContentContainer } from '../styles'
import { ContentContainer } from '../main'
import { ContactForm } from '../../contact/main'

export const PrivateParties = () => {
    return (
        <StyledContentContainer aria-labelledby="Parties container" margin="5rem auto auto auto">
            <ContentContainer>
                <h1>Private Parties</h1>
                <article>
                Make your next private event a memorable one. The Hub Pub's upstairs loft, with pool tables and ski-ball is available for
                private events. Our private event menu offers a variety of freshly
                prepared delicious appetizers all the way up to a full buffet with several entrees.
                </article>
                <ContactForm/>
            </ContentContainer>
        </StyledContentContainer>
    )
}
