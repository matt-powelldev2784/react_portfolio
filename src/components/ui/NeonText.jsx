import React from 'react'
import styled, { keyframes, css } from 'styled-components'

export const NeonText = ({ onClick, triggerAnimation, char, rotateDeg }) => {
    return (
        <StyledArrowContainer triggerAnimation={triggerAnimation}>
            <StyledArrowP rotateDeg={rotateDeg} onClick={onClick}>
                {`${char}`}
            </StyledArrowP>
        </StyledArrowContainer>
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

const fadeInAnimationOnClick = keyframes`
{
    0% {
        opacity: 0;
    }
     50% {
        opacity: 0%;
     }
    100% {
        opacity: 0.5;
     }
}`

const StyledArrowContainer = styled.div`
    animation: ${({ triggerAnimation }) => {
        return triggerAnimation
            ? css`
                  ${fadeInAnimationOnClick} 1.8s ease normal
              `
            : css`
                  ${fadeInAnimation} 4.5s ease normal
              `
    }};

    @media (max-device-width: 440px) {
        font-size: 5rem;
    }
`

const animateNeonFlicker = keyframes`
0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #8000b1,
      0 0 80px #8000b1,
      0 0 90px #8000b1,
      0 0 100px #8000b1,
      0 0 150px #8000b1;
  }
  20%, 24%, 55% {       
    text-shadow: none;
  }
`

const StyledArrowP = styled.p`
    position: absolute;
    bottom: -12rem;
    left: 0;
    right: 0;
    margin: auto;
    width: 20rem;
    height: 20rem;
    font-size: 8rem;
    text-align: center;
    transform: ${({ rotateDeg }) => `rotate(${rotateDeg || 0}deg)`};
    font-family: 'Noto Sans Symbols 2', sans-serif;
    color: #fff;
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #8000b1, 0 0 82px #8000b1, 0 0 92px #8000b1, 0 0 102px #8000b1,
        0 0 151px #8000b1;
    animation: ${animateNeonFlicker} 1.5s infinite alternate;
    cursor: pointer;

    @media (max-device-width: 440px) {
        width: 15rem;
        height: 15rem;
        bottom: -8rem;
        font-size: 5rem;
    }
`
