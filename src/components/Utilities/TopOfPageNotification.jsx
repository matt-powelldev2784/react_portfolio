import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const TopOfPageNotification = ({ text, fontSize = '1rem', fontSizeMob = '0.7rem' }) => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT } = theme?.colors?.contact

    return (
        <StyledP background={CONTACT_H1_BG} color={CONTACT_H1_TEXT} fontSize={fontSize} fontSizeMob={fontSizeMob}>
            {text}
        </StyledP>
    )
}

const StyledP = styled.p`
    position: absolute;
    display: block;
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 700;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    padding: 0.5rem;
    max-width: 16rem;

    @media (max-device-width: 440px) {
        top: 36px;
        width: auto;
        padding: 0.15rem;
        max-width: 100vw;
        font-size: ${({ fontSizeMob }) => fontSizeMob};
    }
`
