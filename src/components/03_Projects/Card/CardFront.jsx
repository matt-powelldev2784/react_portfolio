import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'

export const CardFront = ({ cardProps }) => {
    const { theme } = React.useContext(ThemeContext)
    const { PROJECT_BOX_SHADOW } = theme?.colors?.projects
    const { title, description, backgroundImg, imgFront, blurb } = cardProps

    return (
        <StyledFront boxShadow={PROJECT_BOX_SHADOW}>
            <StyledBackgroundImg src={backgroundImg} />
            {imgFront && <StyledLogoImg src={imgFront} />}
            <StyledTitleDiv>
                <StyledH1>{title}</StyledH1>
                <StyledH1>{description}</StyledH1>
                <StyledH2>{blurb}</StyledH2>
            </StyledTitleDiv>
        </StyledFront>
    )
}

const StyledFront = styled.div`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 27rem;
    max-height: min(30rem, 80vh);
    border-radius: 20px;
    box-shadow: ${({ boxShadow }) => boxShadow};
`

const StyledTitleDiv = styled.div`
    position: absolute;
    left: 50%;
    bottom: 2rem;
    width: 70%;
    transform: translate(-50%);
    background: #000000;
    color: #d1d7e0;
    border: 3px solid #ffffff;
    border-radius: 20px;
    font-size: 3rem;
    max-height: 98%;

    @media only screen and (max-width: 744px) {
        width: 98%;
        max-width: 70%;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: 0.5rem;
    text-align: center;
    font-size: max(calc(0.5vw + 0.8rem), 2rem);
    font-weight: 700;
    padding: 0.2rem;

    @media only screen and (max-width: 744px) {
        font-size: max(calc(2vw + 0.8rem), 1.2rem);
        font-weight: 700;
    }
`

const StyledH2 = styled.h2`
    position: relative;
    display: block;
    margin: 0.5rem;
    padding: 0.5rem;
    text-align: center;
    font-size: max(calc(0.5vw + 0.8rem), 1.5rem);
    font-weight: 300;

    @media only screen and (max-width: 744px) {
        font-size: max(calc(1.5vw + 0.8rem), 1rem);
        font-weight: 300;
    }
`

const StyledBackgroundImg = styled.img`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;

    @media (max-device-width: 440px) {
    }
`
const StyledLogoImg = styled.img`
    position: absolute;
    width: 10rem;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    border-radius: 20px;
`
