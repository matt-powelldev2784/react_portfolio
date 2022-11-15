import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'

export const CardBack = ({ cardProps }) => {
    const { theme } = React.useContext(ThemeContext)
    const { PROJECT_BOX_SHADOW } = theme?.colors?.projects
    const { title, description, text1, text2, imgBack, href } = cardProps

    const onButtonClick = () => {
        window.open(href)
    }

    return (
        <Fragment>
            <StyledBack boxShadow={PROJECT_BOX_SHADOW}>
                <StyledContainerDiv>
                    <StyledImgContainer>
                        <StyledLogoImg src={imgBack} />
                    </StyledImgContainer>
                    <StyledH1>{title}</StyledH1>
                    <StyledH1>{description}</StyledH1>
                    <StyledP>{text1}</StyledP>
                    <StyledP>{text2}</StyledP>
                    {href && <StyledButton onClick={onButtonClick}>Visit Site</StyledButton>}
                </StyledContainerDiv>
            </StyledBack>
        </Fragment>
    )
}

const StyledBack = styled.div`
    position: absolute;
    overflow: visible;
    width: 100%;
    height: 27rem;
    max-height: min(30rem, 80vh);
    border-radius: 20px;
    background: #ffffff;
    box-shadow: ${({ boxShadow }) => boxShadow};
    transform: rotateY(180deg);

    @media only screen and (max-width: 744px) {
        width: 100%;
        height: 27rem;
    }
`

const StyledContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 90%;
    max-height: 98%;

    @media only screen and (max-width: 744px) {
        width: 79%;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: auto;
    padding: 0.2rem;
    text-align: center;
    font-size: max(calc(0.5vw + 0.8rem), 2rem);
    font-weight: 700;

    @media only screen and (max-width: 744px) {
        font-size: max(calc(2vw + 0.8rem), 1.2rem);
        font-weight: 700;
    }
`

const StyledP = styled.p`
    display: block;
    margin: 0.5rem auto;
    text-align: center;
    font-size: min(calc(0.5vw + 0.8rem), 1.2rem);
    font-weight: 300;

    @media only screen and (max-width: 744px) {
        font-size: calc(1vw + 0.75rem);
        margin: calc(2vw + 0.05rem);
    }

    @media only screen and (max-height: 400px) {
        font-size: calc(1vh + 0.75rem);
        margin: calc(2vw + 0.05rem);
    }
`

const StyledImgContainer = styled.div`
    position: relative;
    display: block;
    width: calc(8vw + 2rem);
    height: calc(8vw + 1.5rem);
    margin: auto;

    @media only screen and (max-width: 744px) {
        display: content;
        width: calc(8vw + 3rem);
        height: calc(8vw + 3rem);
    }

    @media only screen and (max-height: 400px) {
        display: none;
    }
`

const StyledLogoImg = styled.img`
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0rem;
    height: 90%;
    max-width: 90%;
`

const StyledButton = styled.button`
    position: relative;
    margin: calc(2vw + 0.5rem);
    width: min(calc(10vw + 2rem), 9rem);
    height: min(calc(2vw + 0.7rem), 2.2rem);
    font-size: min(calc(1.5vw + 0.2rem), 1.4rem);
    margin: 0.5rem auto;
    background: #ffffff;
    color: #000000;
    border: 3px solid #d1d7e0;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;

    @media only screen and (max-width: 744px) {
        width: min(calc(16vw + 2rem), 5.5rem);
        height: min(calc(6vw + 0.7rem), 1.8rem);
        font-size: min(calc(4vw + 0.2rem), 1rem);
    }
`
