import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import atSvg from '../../img/at.svg'
import githubLogo from '../../img/github_logo.svg'

export const ContactDetails = () => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT, CONTACT_TEXT } = theme?.colors?.contact

    return (
        <StyledFlexItem>
            <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                CONTACT DETAILS
            </StyledH1>
            <StyledLi>
                <StyledPBold text={CONTACT_TEXT}>Matthew Powell</StyledPBold>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={atSvg} />
                <StyledA text={CONTACT_TEXT} href="mailto:matt.powell2784@gmail.com">
                    matt.powell2784@gmail.com
                </StyledA>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={githubLogo} />
                <StyledA text={CONTACT_TEXT} href="https://github.com/matt-powelldev2784">
                    github.com/matt-powelldev2784
                </StyledA>
            </StyledLi>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;

    @media (max-device-width: 440px) {
        width: 90vw;
        margin: 1rem auto 0.5rem auto;
        min-width: unset;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: 1rem 0rem;
    padding: 0.3rem;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    background: ${({ background }) => background};
    color: ${({ text }) => text};
    width: 26rem;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        margin: 0.5rem 0rem;
        width: 90vw;
        clip-path: unset;
    }

    @media (max-device-width: 380px) {
        font-size: 1rem;
        margin: 0.5rem 0rem;
        width: 90vw;
        clip-path: unset;
    }
`

const StyledLi = styled.li`
    position: relative;
    display: block;
    height: 4rem;
    width: auto;

    @media (max-device-width: 440px) {
        height: 2rem;
        margin: 1rem;
    }

    @media (max-device-width: 380px) {
        height: 2rem;
        margin: 0.3rem;
    }
`
const StyledPBold = styled.p`
    display: block;
    padding: 0rem 0.5rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};

    @media (max-device-width: 440px) {
        height: 2rem;
    }
`

const StyledA = styled.a`
    position: relative;
    display: block;
    height: 4rem;
    min-width: 28rem;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: left;
    color: ${({ text }) => text};

    @media (max-device-width: 440px) {
        height: 2rem;
        padding: 0.4rem;
        font-size: 0.95rem;
        font-weight: 700;
        min-width: unset;
    }
`

const StyledLogoImg = styled.img`
    position: relative;
    height: 4rem;
    padding: 0.5rem 1rem;
    float: left;
    fill: #d1d7e0;

    @media (max-device-width: 440px) {
        position: relative;
        height: 2rem;
        padding: 0.1rem 0.1rem;
        margin: 0rem 0.3rem;
        float: left;
    }
`
