import React from 'react'
import styled from 'styled-components'
import atSvg from '../../img/at.svg'
import githubLogo from '../../img/github_logo.svg'

export const ContactDetails = () => {
    return (
        <StyledFlexItem>
            <StyledH1>CONTACT</StyledH1>
            <StyledLi>
                <StyledPBold>Matthew Powell</StyledPBold>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={atSvg} />
                <StyledA href="mailto:matt.powell2784@gmail.com">matt.powell2784@gmail.com</StyledA>
            </StyledLi>
            <StyledLi>
                <StyledLogoImg src={githubLogo} />
                <StyledA href="https://github.com/matt-powelldev2784">https://github.com/matt-powelldev2784</StyledA>
            </StyledLi>
            <StyledLi></StyledLi>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;
    min-width: 35rem;
`

const StyledLi = styled.li`
    position: relative;
    display: block;
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: 1rem 0rem;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    background: #d1d7e0;
    color: #802bb1;
    width: 20rem;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        font-weight: 700;
    }
`
const StyledPBold = styled.p`
    display: block;
    padding: 0rem 0.5rem;
    font-size: 2rem;
    font-weight: 700;
    text-align: left;
    color: #d1d7e0;
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
        font-size: 1rem;
        font-weight: 300;
    }
`

const StyledLogoImg = styled.img`
    position: relative;
    height: 4rem;
    padding: 0.5rem 1rem;
    float: left;
`
