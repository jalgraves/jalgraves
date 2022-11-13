import React from 'react'
import Icon from '../content/icons/main'
import { StyledButton, iconStyle } from './styles'

export class ViewButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.props.clicker) {
            if (this.props.category) {
                this.props.clicker(this.props.category)
            } else {
                this.props.clicker()
            }
        }
    }

    render() {
        return(
            <StyledButton borderColor={this.props.borderColor} width={this.props.width} aria-labelledby="Button">
                <button onClick={this.handleClick}>
                    {this.props.icon &&
                        <Icon style={iconStyle} iconName={this.props.icon} />}{this.props.text}</button>
            </StyledButton>
		)
    }
}
