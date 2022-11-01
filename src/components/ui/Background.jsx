import React from 'react'
import styled from 'styled-components'

export const Background = ({ backgroundImage }) => {
    return (
        <StyledContainerDiv>
            <StyledBackgroundImg src={backgroundImage} />
        </StyledContainerDiv>
    )
}

const StyledContainerDiv = styled.div`
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const StyledBackgroundImg = styled.img`
    position: relative;
    display: block;
    margin: auto;
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media (max-device-width: 440px) {
        width: 100%;
        object-fit: unset;
    }
`
