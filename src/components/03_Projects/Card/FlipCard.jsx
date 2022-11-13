import React, { useState } from 'react'
import styled from 'styled-components'
import { CardFront } from './CardFront'
import { CardBack } from './CardBack'

export const FlipCard = ({ cardProps }) => {
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
                {!toggleCard && <CardFront cardProps={cardProps} />}
                {toggleCard && <CardBack cardProps={cardProps} />}
            </StyledFlipper>
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    position: relative;
    display: block;
    overflow: visible;
    max-width: 40rem;
    max-height: 30rem;
    height: 100%;
    width: 80vw;
    margin: 0rem;
    text-align: center;
    border-radius: 20px;
    perspective: 1000px;
`

const StyledFlipper = styled.div`
    width: min(40rem, 100%);
    height: min(30rem, 27rem);
    border-radius: 20px;
    overflow: visible;

    ${({ startFlipAnimation }) => {
        const flipAnimation = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(180deg);'
        const flipAnimationReverse = 'transition: 0.4s; transform-style: preserve-3d; transform: rotateY(0deg);'
        return startFlipAnimation ? flipAnimation : flipAnimationReverse
    }}
`
