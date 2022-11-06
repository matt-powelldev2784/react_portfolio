import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'
import { fullText } from '../aboutTextInfo'

export const AboutTitle = () => {
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_H1_BG, ABOUT_H1_TEXT, ABOUT_TEXT } = theme?.colors?.about

    return (
        <StyledContainer>
            <StyledH1 background={ABOUT_H1_BG} text={ABOUT_H1_TEXT}>
                ABOUT ME
            </StyledH1>
            <StyledP text={ABOUT_TEXT}>{fullText}</StyledP>
            <StyledP text={ABOUT_TEXT}>
                If you wish to contact me please email: <StyledA href={'mailto:matt.powell2784@gmail.com'}>matt.powell2784@gmail.com</StyledA>
            </StyledP>
        </StyledContainer>
    )
}

const StyledContainer = styled.section`
    position: relative;
    margin: auto;
    font-size: 2rem;
    color: #d1d7e0;
    margin: 1rem 0rem;
    padding: 0rem 0rem;

    @media (max-device-width: 440px) {
        min-width: 90%;
        font-size: 1rem;
        margin: 1rem;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    width: 70%;
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
        width: unset;
        clip-path: unset;
        min-width: unset;
    }
`

const StyledP = styled.p`
    font-size: 2rem;
    text-align: left;
    margin: 2rem 1rem;
    color: ${({ text }) => text};

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        margin: 1rem;
    }

    @media (max-device-width: 380px) {
        font-size: 1rem;
        margin: 1rem;
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
`