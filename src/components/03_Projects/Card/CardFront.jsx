import React from 'react'
import styled from 'styled-components'

export const CardFront = ({ cardProps }) => {
    const { title, backgroundImg, imgFront } = cardProps

    return (
        <StyledFront>
            <StyledBackgroundImg src={backgroundImg} />
            {imgFront && <StyledLogoImg src={imgFront} />}
            <StyledTitleDiv>
                <StyledH1>{title}</StyledH1>
                <StyledH2>Flip the card to view details...</StyledH2>
            </StyledTitleDiv>
        </StyledFront>
    )
}

const StyledFront = styled.div`
    position: absolute;
    overflow: visible;
    width: 40rem;
    height: 30rem;
    border-radius: 20px;
    border-radius: 20px;
    box-shadow: rgb(40, 40, 40) 0px 20px 30px -10px;

    @media (max-device-width: 440px) {
        width: 100%;
    }
`

const StyledTitleDiv = styled.div`
    position: absolute;
    left: 50%;
    bottom: 1rem;
    width: 70%;
    transform: translate(-50%);
    background: #003a68;
    color: #ffffff;
    border-radius: 20px;
    font-size: 3rem;

    @media (max-device-width: 440px) {
        width: 90%;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
    text-align: center;
    font-size: 3rem;
    font-weight: 700;

    @media (max-device-width: 440px) {
        font-size: 2rem;
        font-weight: 700;
    }
`

const StyledH2 = styled.h2`
    position: relative;
    display: block;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 300;
    background: unset;

    @media (max-device-width: 440px) {
        font-size: 1rem;
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
    top: 0.5rem;
    transform: translateX(-50%);
    border-radius: 20px;
`
