import React, { Fragment } from 'react'
import styled from 'styled-components'

export const CardBack = ({ cardProps }) => {
    const { titleBack, text1, text2, imgBack, href } = cardProps

    const onButtonClick = () => {
        window.open(href)
    }

    return (
        <Fragment>
            <StyledBack>
                <StyledContainerDiv>
                    <StyledImgContainer>
                        <StyledLogoImg src={imgBack} />
                    </StyledImgContainer>

                    <StyledH1>{titleBack}</StyledH1>
                    <StyledP>{text1}</StyledP>
                    <StyledP>{text2}</StyledP>
                    <StyledButton onClick={onButtonClick}>Visit Site</StyledButton>
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
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.7), 1px 2px 4px 0px rgba(0, 0, 0, 0.7), 2px 4px 8px 0px rgba(0, 0, 0, 0.7),
        2px 4px 16px 0px rgba(0, 0, 0, 0.7);
    transform: rotateY(180deg);

    @media (max-device-width: 440px) {
        width: 100%;
    }
`

const StyledContainerDiv = styled.div`
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;

    @media (max-device-width: 440px) {
        font-size: 2rem;
        font-weight: 700;
    }
`

const StyledP = styled.p`
    display: block;
    margin: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`

const StyledImgContainer = styled.div`
    position: relative;
    display: block;
    width: 20rem;
    height: 12rem;
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
    z-index: 1;
`
