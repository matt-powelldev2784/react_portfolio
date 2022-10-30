import React from 'react'
import styled, { keyframes } from 'styled-components'

export const Background = ({ backgroundImage }) => {
    return (
        <StyledContainer>
            <StyledFlexbox>
                <StyledBackgroundImg src={backgroundImage} />
            </StyledFlexbox>
        </StyledContainer>
    )
}

const fadeInAnimation = keyframes`
{
    0% {
        opacity: 0;
    }
    60% {
        opacity: 0;
     }
    100% {
        opacity: 0.5;
     }
}`

const StyledContainer = styled.div`
    animation: ${fadeInAnimation} 3s ease-in normal;
    animation-fill-mode: forwards;
    position: absolute;
    left: 0px;
    top: 0px;
`

const StyledFlexbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
`

const StyledBackgroundImg = styled.img`
    display: block;
    margin: auto;
    position: absolute;
    width: 45%;
    height: 45%;

    @media (max-device-width: 440px) {
        width: 50%;
    }
`
