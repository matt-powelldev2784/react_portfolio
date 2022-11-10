import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const MessageSentNotification = () => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT } = theme?.colors?.contact

    return (
        <StyledP background={CONTACT_H1_BG} color={CONTACT_H1_TEXT}>
            Message Sent...
        </StyledP>
    )
}

const StyledP = styled.p`
    position: absolute;
    display: block;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    font-size: 1rem;
    font-weight: 700;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;

    @media (max-device-width: 440px) {
        top: 36px;
        padding: 0.15rem 0.3rem;
        font-size: 0.9rem;
    }
`
