import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
    margin: ${props => props.margin || "5rem auto auto auto"};
    padding: ${props => props.padding || "0"};
    background-color: ${props => props.bgColor || COLORS.lightGray};
    border-top: ${props => props.borderTop || "unset"};
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    line-height: 150%;
`

export const StyledContent = styled.div`
    background-color: ${props => props.bgColor || COLORS.lightGray};
    color:  ${props => props.fontColor || COLORS.white};
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    padding: 2rem;
    width: 100%;
    h2 {
        color: ${COLORS.black};
        padding: .5rem 0;
        max-width: 80vw;
        font-family: gotham;
        font-size: 2em;
        line-height: 170%;
        text-align: ${props => props.textAlign || "initial"};
        span {
            color: ${COLORS.red};
        }
    }
    h3 {
        color: ${COLORS.hubPubBlue};
        padding: 1rem 0;
        max-width: 80vw;
        font-family: ${FONTS.gothamUltra};
        font-size: 2em;
        line-height: 170%;
        letter-spacing: .35rem;
        text-transform: uppercase;
    }
    h6 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
`
