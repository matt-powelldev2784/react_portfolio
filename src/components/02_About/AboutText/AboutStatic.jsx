import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { ThemeContext } from '../../../app/App'
import { fullText } from '../aboutTextInfo'
import { AboutLink } from './AboutLink'

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
            <AboutLink
                textColor={ABOUT_TEXT}
                text={'Please see my github page:'}
                href={'https://github.com/matt-powelldev2784'}
                linkText={'https://github.com/matt-powelldev2784'}
            />
            <AboutLink
                textColor={ABOUT_TEXT}
                text={'If you wish to contact me, please email:'}
                href={'mailto:matt.powell2784@gmail.com'}
                linkText={'matt.powell2784@gmail.com'}
            />
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
    margin: auto;
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
    }
`

const StyledH1 = styled.h1`
    font-size: calc(2vw + 1rem);
    padding: calc(0.3vw + 0.2rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};
    background: ${({ background }) => background};

    @media only screen and (max-width: 451px) {
        margin: 0.5rem;
    }
`

const StyledPJustify = styled.p`
    font-size: min(calc(1vw + 1rem), 1.8rem);
    margin: calc(2vw + 1rem) calc(2vw + 1rem);
    color: ${({ text }) => text};
    text-align: justify;
    text-justify: inter-word;

    @media only screen and (max-width: 451px) {
        font-size: max(calc(1vw + 0.7rem), 1rem);
        margin: 0.5rem;
    }
`
