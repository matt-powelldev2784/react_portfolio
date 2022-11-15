import React from 'react'
import styled from 'styled-components'

export const AboutLink = ({ textColor, text, href, linkText }) => {
    return (
        <StyledP text={textColor}>
            {text}
            <span> </span>
            <StyledA href={href}>{linkText}</StyledA>
        </StyledP>
    )
}

const StyledP = styled.p`
    font-size: min(calc(1vw + 1rem), 1.8rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    text-align: left;
    color: ${({ text }) => text};

    @media only screen and (max-width: 451px) {
        font-size: max(calc(1vw + 0.7rem), 0.92rem);
        margin: 0.5rem;
    }
`

const StyledA = styled.a`
    &:link {
        color: unset;
    }
    &:visited {
        color: unset;
    }
    &:hover {
        color: unset;
    }
    &:active {
        color: unset;
    }

    white-space: nowrap;
`
