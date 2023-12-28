import styled from 'styled-components'
import { config } from '../../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledHero = styled.div`
    margin: 5rem auto 0 auto;
    width: 100%;
    height: 420px;
    display: flex;
    flex-flow: column wrap;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    h1 {
        margin: auto;
        max-width: 80%;
        font-family: ${FONTS.gothamUltra};
        font-size: 3.25rem;
        text-transform: uppercase;
        letter-spacing: .2em;
        color: ${COLORS.white};
        text-shadow: 2px 2px 8px #000000;
        line-height: 150%;
    }
    img {
        margin: .5rem auto;
        max-width: 60%;
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
