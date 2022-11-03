import React from 'react'
import styled from 'styled-components'
import atSvg from '../../img/at.svg'
import githubLogo from '../../img/github_logo.svg'

export const ContactDetails = () => {
    return (
        <StyledFlexItem>
            <StyledH1>CONTACT DETAILS</StyledH1>
            <StyledLi>
                <StyledPBold>Matthew Powell</StyledPBold>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={atSvg} />
                <StyledA href="mailto:matt.powell2784@gmail.com">matt.powell2784@gmail.com</StyledA>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={githubLogo} />
                <StyledA href="https://github.com/matt-powelldev2784">github.com/matt-powelldev2784</StyledA>
            </StyledLi>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;
    min-width: 35rem;

    @media (max-device-width: 440px) {
        width: 100%;
        margin: 1rem;
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
    background: #d1d7e0;
    color: #802bb1;
    width: 26rem;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        font-size: 1rem;
        width: 90vw;
    }
`

const StyledLi = styled.li`
    position: relative;
    display: block;
    height: 4rem;

    @media (max-device-width: 440px) {
        height: 3rem;
    }
`
const StyledPBold = styled.p`
    display: block;
    padding: 0rem 0.5rem;
    height: 4rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    color: #d1d7e0;

    @media (max-device-width: 440px) {
        height: 3rem;
    }
`

const StyledA = styled.a`
    position: relative;
    display: block;
    height: 4rem;
    padding: 1rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
    text-align: left;
    color: #d1d7e0;

    @media (max-device-width: 440px) {
        height: 3rem;
        font-size: 0.95rem;
        font-weight: 700;
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
        height: 3rem;
        padding: 0.5rem 0.5rem;
        float: left;
    }
`
