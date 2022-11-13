import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledFooter = styled.div`
    margin: auto;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    border-top: .2rem solid #fcba03;
    background-color: ${props => props.backgroundColor || "white"};
    footer {
        margin: auto;
        font-family: 'Raleway', Arial, sans-serif;
        text-transform: uppercase;
        color: ${props => props.fontColor || "#1f6696"};
        text-align: center;
        letter-spacing: .2em;
    }
    img {
        margin: auto;
        padding: .5rem 0;
        max-width: 20rem;
    }
    h2 {
        margin: 1rem auto;
        text-shadow: 2px 2px 4px ${COLORS.black};
    }
    h3 {
        line-height: 2rem;
        margin: auto;
        padding: .5rem 0;
        font-size: 1.65em;
        text-shadow: 2px 2px 4px ${COLORS.black};
    }
    h4 {
        margin: auto;
        padding: 1rem 0;
        font-size: 1rem;
        color: ${props => props.backgroundColor || "white"};
    }
`
