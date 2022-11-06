import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const AboutTitle = () => {
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_H1_BG, ABOUT_H1_TEXT } = theme?.colors?.about

    return (
        <StyledContainer>
            <StyledH1 background={ABOUT_H1_BG} text={ABOUT_H1_TEXT}>
                ABOUT <StyledSpan text={ABOUT_H1_TEXT}>ME</StyledSpan>
            </StyledH1>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    position: relative;
    margin: auto;
    font-size: 2rem;
    color: #d1d7e0;
    margin: 1rem;
    padding: 0rem 5rem;

    @media (max-device-width: 440px) {
        min-width: 90%;
        font-size: 1rem;
        margin: 1rem;
        padding: 0rem 1rem;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    font-size: 3rem;
    font-weight: 700;
    min-width: 12rem;
    padding: 0.5rem;
    text-align: left;
    color: ${({ text }) => text};
    background: ${({ background }) => background};
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        padding: 0.3rem;
        font-size: 2rem;
        clip-path: unset;
        min-width: unset;
    }
`

const StyledSpan = styled.span`
    display: inline;
    font-size: 3rem;
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};

    @media (max-device-width: 440px) {
        font-size: 2rem;
    }
`
