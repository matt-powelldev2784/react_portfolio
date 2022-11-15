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
    display: contents;
    animation: ${({ triggerAnimation }) => {
        return triggerAnimation
            ? css`
                  ${fadeInAnimationOnClick} 1.8s ease normal
              `
            : css`
                  ${fadeInAnimation} 4.5s ease normal
              `
    }};

    @media only screen and (max-width: 451px) {
        display: none;
    }

    @media only screen and (max-height: 400px) {
        display: none;
    }
`

const animateNeonFlicker = keyframes`
0%, 18%, 22%, 25%, 53%, 57%, 100% {
    text-shadow:
      0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #000000,
      0 0 80px #000000,
      0 0 90px #000000,
      0 0 100px #000000,
      0 0 150px #000000;
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
    text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #000000, 0 0 82px #000000, 0 0 92px #000000, 0 0 102px #000000,
        0 0 151px #000000;
    animation: ${animateNeonFlicker} 1.5s infinite alternate;
    cursor: pointer;

    @media only screen and (max-width: 451px) {
        width: 15rem;
        height: 15rem;
        bottom: -8rem;
        font-size: 5rem;
    }
`
