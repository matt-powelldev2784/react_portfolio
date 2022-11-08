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
    width: 40rem;
    height: 30rem;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: ${({ boxShadow }) => boxShadow};
    transform: rotateY(180deg);

    @media (max-device-width: 440px) {
        width: 100%;
        height: 27rem;
    }
`

const StyledContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    width: 100%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: auto;
    padding: 0.2rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        font-weight: 700;
    }
`

const StyledP = styled.p`
    display: block;
    margin: 1rem;
    padding: 0rem 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;

    @media (max-device-width: 440px) {
        font-size: 1rem;
        margin: 0.5rem 1.2rem;
        padding: 0rem 0.5rem;
    }
`

const StyledImgContainer = styled.div`
    position: relative;
    display: block;
    width: 20rem;
    height: 10rem;
    margin: auto;

    @media (max-device-width: 440px) {
        width: 10rem;
        height: 6rem;
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
    margin: 0rem;
    width: 10rem;
    font-size: 1.5rem;
    background: #ffffff;
    color: #000000;
    border: 3px solid #d1d7e0;
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
    }
`
