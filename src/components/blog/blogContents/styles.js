import styled from "styled-components"
import { config } from "../../../utils/main.js"
const COLORS = config.colors
const FONTS = config.fonts

export const StyledBlogData = styled.div`
  background-color: ${props => props.$backgroundColor || COLORS.backgroundWhite};
  border: ${props => props.$border || `.1rem solid ${COLORS.borderGray}`};
  box-shadow: ${props => props.$boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
  border-radius: ${props => props.$borderRadius || ".4rem"};
  display: ${props => props.$display || "flex"};
  flex-basis:  ${props => props.$flexBasis || "15rem"};
  flex-flow:  ${props => props.$flexFlow || "column wrap"};
  margin: .5rem;
  max-width: 90vw;
  min-height: 210px;
  padding: 1rem;
  table {
    padding: .5rem;
    max-width: 30rem;
    width: 100%;
    td {
      line-height: 125%;
      padding: 0 0 .25rem 0;
    }
  }
  .postTitle {
    color: ${COLORS.red};
    font-family: ${FONTS.headline};
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: .15rem;
    max-width: 80%;
    text-align: left;
    text-transform: uppercase;
  }
  .postCreationDate {
    color: ${COLORS.darkGray};
    font-family: ${FONTS.content};
    font-size: 1.25rem;
    font-weight: 600;
    letter-spacing: .15rem;
    text-align: left;
    text-transform: uppercase;
  }
  .postTags {
    color: ${COLORS.black};
    font-family: ${FONTS.content};
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: .15rem;
    text-align: left;
  }
  p {
    background: white;
    border-radius: 4px;
    font-family: ${FONTS.content};
    font-size: 1.25rem;
    line-height: 135%;
    padding: .25rem 1rem 2rem 1rem;
    max-width: 30rem;
    max-height: 10rem;
    outline: .1rem solid ${COLORS.black};
    overflow: scroll;
  }
`
