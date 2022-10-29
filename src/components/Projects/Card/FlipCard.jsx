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
    width: 22rem;
    height: 30rem;
    margin: 1rem;
    border-radius: 20px;

    perspective: 1000px;
    opacity: 1;

    @media (max-device-width: 440px) {
        margin: 0rem;
        width: 100vw;
    }
`

const StyledFlipper = styled.div`
    width: 22rem;
    height: 30rem;
    border-radius: 20px;

    ${({ startFlipAnimation }) => {
        const flipAnimation = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(180deg);'
        const flipAnimationReverse = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(0deg);'
        return startFlipAnimation ? flipAnimation : flipAnimationReverse
    }}

    @media (max-device-width: 440px) {
        display: block;
        width: 90%;
        margin: auto;
    }
`
