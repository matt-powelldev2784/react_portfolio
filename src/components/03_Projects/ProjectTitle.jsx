import React from 'react'
import styled from 'styled-components'

export const ProjectTitle = () => {
    return (
        <StyledContainerDiv>
            <StyledH1>PROJECTS</StyledH1>
        </StyledContainerDiv>
    )
}

const StyledContainerDiv = styled.div`
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-device-width: 440px) {
        transform: translate(-50%, calc(-50% - 10px));
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    width: 100%;
    min-width: 100%;
    font-size: 3rem;
    font-weight: 700;
    padding: 0.5rem;
    text-align: left;
    color: #802bb1;
    background: #d1d7e0;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        margin: 1rem 0rem;
        padding: 0.3rem;
        font-size: 2rem;
        clip-path: unset;
    }
`
