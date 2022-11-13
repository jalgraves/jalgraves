import React from 'react'
import { StyledSideSection} from '../styles/main'
import { StyledItem } from '../styles/items'

export const Sides = (props) => {
    // console.log(`SIDES: ${props.sides}`)
    const renderSides = (sides) => {
        const sideList = []
        let cnt = 1
        for (const side of Object.values(sides)) {
            sideList.push(
                <StyledItem aria-labelledby="Side item" key={cnt} margin=".5rem" maxWidth="max-content"><p>{side}</p></StyledItem>
            )
            cnt++
        }
        return (
            <div className="sides">{sideList}</div>
        )
    }
    return (
        <StyledSideSection aria-labelledby="Sides items Container">
            <h2 className="sectionTitle">Sides</h2>
            {renderSides(props.sides)}
        </StyledSideSection>
    )
}
