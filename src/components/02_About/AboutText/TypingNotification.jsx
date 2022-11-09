import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'

export const TypingNotification = () => {
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_TEXT } = theme?.colors?.about

    return (
        <StyledA color={ABOUT_TEXT}>
            Click anywhere to <br></br> skip typing effect
        </StyledA>
    )
}

const StyledA = styled.a`
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    padding: 1rem;
    font-size: 0.8rem;
    text-align: center;
    color: ${({ color }) => color};

    @media (max-device-width: 440px) {
        top: 2rem;
        left: 0rem;
        width: 6rem;
        height: 2rem;
        font-size: 0.6rem;
        padding: 0.5rem;
        text-align: unset;
    }
`
