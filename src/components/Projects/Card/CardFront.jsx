import React from 'react'
import styled from 'styled-components'
import cardBackgroundImage from '../../../img/ots_grass.jpg'
import otsLogo from '../../../img/ots_logo.svg'
import { Typeography } from '../../ui/Typeogrpahy/Typeography'

export const CardFront = ({ title, backgroundImg, img }) => {
    return (
        <StyledFront>
            <StyledBackgroundImg src={cardBackgroundImage} />
            <StyledLogoImg src={otsLogo} />
            <StyledTitleDiv>
                <Typeography variant={'h1'}>Old Thorntonians FC</Typeography>
            </StyledTitleDiv>
        </StyledFront>
    )
}

const StyledFront = styled.div`
    position: absolute;
    width: 22rem;
    height: 30rem;
    border-radius: 20px;
    border-radius: 20px;

    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.7), 1px 2px 4px 0px rgba(0, 0, 0, 0.7), 2px 4px 8px 0px rgba(0, 0, 0, 0.7),
        2px 4px 16px 0px rgba(0, 0, 0, 0.7);

    @media (max-device-width: 440px) {
        width: 100%;
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
    top: 25%;
    transform: translate(-50%, -50%);
    border-radius: 20px;
`

const StyledTitleDiv = styled.div`
    position: absolute;
    left: 50%;
    top: 75%;
    transform: translate(-50%, -50%);
    background: #003a68;
    color: #ffffff;
    border-radius: 20px;
    font-size: 3rem;
`
