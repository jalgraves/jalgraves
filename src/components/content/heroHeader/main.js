import React from "react"
import { StyledHero } from "./styles.js"

export const HeroHeader = (props) => {
  return (
    <StyledHero aria-details="Hero header" background={props.background}>
      <h1>{props.text}</h1>
      {props.subText &&
        <h2>{props.subText}</h2>
      }
    </StyledHero>
  )
}
