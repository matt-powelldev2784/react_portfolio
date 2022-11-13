import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { ThemeContext } from '../../../app/App'
import { fullText } from '../aboutTextInfo'

export const AboutStatic = () => {
    const [startAnimation, setStartAnimation] = useState(false)
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_H1_BG, ABOUT_H1_TEXT, ABOUT_TEXT } = theme?.colors?.about

    setTimeout(() => {
        setStartAnimation(true)
    }, 1)

    return (
        <StyledContainer triggerAnimation={startAnimation}>
            <StyledH1 background={ABOUT_H1_BG} text={ABOUT_H1_TEXT}>
                ABOUT ME
            </StyledH1>
            <StyledPJustify text={ABOUT_TEXT}>{fullText}</StyledPJustify>
            <StyledP text={ABOUT_TEXT}>
                Please see my github page:
                <span> </span>
                <StyledA href={'https://github.com/matt-powelldev2784'}>https://github.com/matt-powelldev2784</StyledA>
            </StyledP>
            <StyledP text={ABOUT_TEXT}>
                If you wish to contact me, please email:
                <span> </span>
                <StyledA href={'mailto:matt.powell2784@gmail.com'}>matt.powell2784@gmail.com</StyledA>
            </StyledP>
        </StyledContainer>
    )
}

const fadeInAnimation = keyframes`
{
    0% {
        opacity: 0;
    }
     50% {
        opacity: 0.5;
     }
    100% {
        opacity: 1;
     }
}`

const StyledContainer = styled.div`
    font-size: calc(2vw + 0.5rem);
    margin: calc(2vw + 0.2rem);
    max-width: 1200px;
    animation: ${({ triggerAnimation }) => {
        return triggerAnimation
            ? css`
                  ${fadeInAnimation} 2s ease normal
              `
            : css`
                  unset
              `
    }};

    @media only screen and (max-width: 451px) {
        width: 95%;
        margin: auto;
    }
`

const StyledH1 = styled.h1`
    font-size: calc(2vw + 1rem);
    padding: calc(0.3vw + 0.2rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    width: 60vw;
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};
    background: ${({ background }) => background};
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media only screen and (max-width: 451px) {
        clip-path: unset;
        width: unset;
        margin: unset;
    }
`

const StyledPJustify = styled.p`
    font-size: calc(1vw + 1rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    color: ${({ text }) => text};
    text-align: justify;
    text-justify: inter-word;

    @media only screen and (max-width: 451px) {
        font-size: 1.2rem;
        margin: 0.5rem;
    }

    @media only screen and (max-width: 321px) {
        font-size: 1rem;
        margin: 0.5rem;
    }
`

const StyledP = styled.p`
    font-size: calc(1vw + 1rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    text-align: left;
    color: ${({ text }) => text};

    @media only screen and (max-width: 451px) {
        font-size: 1.1rem;
        margin: 0.5rem;
    }

    @media only screen and (max-width: 321px) {
        font-size: 0.9rem;
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
