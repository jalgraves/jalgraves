import React from 'react'
import { CategoryCard } from './card'
import { StyledContentContainer, StyledMenuWarning } from '../styles/main'
import { Sides } from '../sides/main'


export const CategoryCards = (props) => {
    const categories = props.categories
    const categoryList = []
    if (categories) {
        let cnt = 1
        for (const category of Object.values(categories)) {
            categoryList.push(
                <CategoryCard
                    description={category['description']}
                    name={category['name']}
                    isActive={category['is_active']}
                    items={category['items']}
                    key={category['id']}
                    location={category['location']}
                    sku={category['id']}
                    slug={category['slug']}
                    orderNumber={category['order_number'] || cnt}
                />
            )
            cnt++
        }
    }
    return (
        <StyledContentContainer aria-labelledby="FoodDash content container" margin="5rem auto 1rem auto">
            {categoryList}
            <Sides sides={props.sides} />
            <StyledMenuWarning aria-labelledby="Menu warning">
                <h3><span>*</span>These items are cooked to order. There is a risk associated with consuming undercooked meat products</h3>
            </StyledMenuWarning>
        </StyledContentContainer>
    )
}
