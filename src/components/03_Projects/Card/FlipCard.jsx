import React, { useState } from 'react'
import styled from 'styled-components'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'

export const FlipCard = ({ themeLetter, cardProps }) => {
    const [startFlipAnimation, setStartFlipAnimation] = useState(false)
    const [toggleCard, setToggleCard] = useState(false)

    const handleOnClick = e => {
        setStartFlipAnimation(prevState => {
            return !prevState
        })
        setToggleCard(prevState => {
            return !prevState
        })
    }

    return (
        <StyledContainer cardProps={cardProps}>
            <StyledFlipper onClick={handleOnClick} startFlipAnimation={startFlipAnimation} cardProps={cardProps}>
                {!toggleCard && <CardFront themeLetter={themeLetter} cardProps={cardProps} />}
                {toggleCard && <CardBack themeLetter={themeLetter} cardProps={cardProps} />}
            </StyledFlipper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    position: relative;
    display: block;
    overflow: visible;
    width: 22rem;
    height: 30rem;
    margin: 1rem;
    text-align: center;
    border-radius: 20px;

    perspective: 1000px;

    @media (max-device-width: 440px) {
        margin: 1rem 0rem;
        width: 80vw;
    }
`

const StyledFlipper = styled.div`
    width: 22rem;
    height: 30rem;
    border-radius: 20px;
    overflow: visible;

    ${({ startFlipAnimation }) => {
        const flipAnimation = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(180deg);'
        const flipAnimationReverse = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(0deg);'
        return startFlipAnimation ? flipAnimation : flipAnimationReverse
    }}

    @media (max-device-width: 440px) {
        display: block;
        width: 100%;
        margin: auto;
    }
`
