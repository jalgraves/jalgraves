import styled from 'styled-components'
import { config } from '../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "0"};
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    line-height: 150%;
`

export const StyledContent = styled.div`
    background-color: ${props => props.bgColor || "unset"};
    border-bottom: ${props => props.borderBottom || "unset"};
    border-top: ${props => props.borderTop || "unset"};
    color:  ${props => props.fontColor || COLORS.white};
    display: flex;
    flex-flow: column wrap;
    font-size:  ${props => props.fontSize || "1.25rem"};
    line-height: ${props => props.lineHeight || "150%"};
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "5%"};
    width: ${props => props.width || "100%"};
    a {
        color: ${props => props.aFontColor || COLORS.yellow};
        font-family: ${props => props.linkFont || FONTS.headline };
        font-size:  ${props => props.aFontSize || "1.75rem"};
        font-weight: 600;
        text-decoration: none;
        text-transform: capitalize;
    }
    article {
        padding: 2rem 0 0 0;
        max-width: 50rem;
        text-transform: none;
        font-family: gotham-medium;
    }
    h1 {
        color: ${props => props.h1FontColor || props.fontColor};
        font-family: ${props => props.h1Font || FONTS.title};
        font-size:  ${props => props.h1FontSize || "2.75rem"};
        letter-spacing: ${props => props.h1LetterSpacing || "unset"};
        line-height: ${props => props.h1LineHeight || "150%"};
        padding: ${props => props.h1Padding || "0"};
        text-transform: ${props => props.h1TextTransform || "none"};
    }
    h2 {
        color: ${props => props.h2FontColor || props.fontColor};
        font-family: ${props => props.h2Font || FONTS.content};
        font-size: ${props => props.h2FontSize || "2rem"};
        line-height: ${props => props.h2LineHeight || "150%"};
        padding: ${props => props.h2Padding || "0"};
        text-align: ${props => props.textAlign || "initial"};
        span {
            color: ${COLORS.red};
        }
    }
    h3 {
        color: ${props => props.h3FontColor || COLORS.hubPubBlue};
        font-family: ${props => props.h3Font || FONTS.headline };
        font-size:  ${props => props.h3FontSize || "1.75rem"};
        letter-spacing: ${props => props.h3LetterSpacing || ".35rem"};
        line-height: ${props => props.h3LineHeight || "150%"};
        padding: ${props => props.h3Padding || "0"};
        text-transform: ${props => props.h3TextTransform || "uppercase"};
    }
    h4 {
        color: ${props => props.h4FontColor || COLORS.white};
        padding: .5rem 0;
        font-family: ${props => props.h4Font || FONTS.content };
        font-size: 1.75rem;
        text-transform: none;
        line-height: 170%;
    }
    h5 {
        color: ${COLORS.hubPubBlue};
        padding: .5rem 0;
        font-size: 2rem;
        font-family: ${FONTS.headline};
        font-weight: 600;
        text-transform: uppercase;
        line-height: 150%;
        letter-spacing: .5rem;
    }
    h6 {
        padding: .5rem 0;
        font-family: gotham;
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
    p {
        padding: .5rem 0;
        max-width: 50rem;
        color: ${props => props.pFontColor || COLORS.yellow};
        text-transform: none;
        font-family: ${props => props.pFont || FONTS.content };
        font-size: ${props => props.pFontSize || "1.5rem"};
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`
