import React, { useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'
import { FlipCard } from '../Card/FlipCard'
import { flipCardInfo } from './FlipCardInfo'

export const CardCarousel = () => {
    const [flipCardNumber, setFlipCardNumber] = useState(0)
    const { isDesktop } = React.useContext(ThemeContext)
    console.log('isDesktop', isDesktop)

    const maxFlipCardNumber = 2
    const minFlipCardNumber = 0

    const onNextFlipCard = () => {
        if (maxFlipCardNumber !== flipCardNumber) {
            setFlipCardNumber(prevState => {
                return prevState + 1
            })
        }
    }

    const onPrevFlipCard = () => {
        if (minFlipCardNumber !== flipCardNumber) {
            setFlipCardNumber(prevState => {
                return prevState - 1
            })
        }
    }

    const currentFlipCard = <FlipCard cardProps={flipCardInfo[flipCardNumber]} />

    return (
        <StyledFlexBox>
            <StyledPrevArrowP onClick={onPrevFlipCard}>{'⏴'}</StyledPrevArrowP>
            {currentFlipCard}
            <StyledNextArrowP onClick={onNextFlipCard}>{'⏵'}</StyledNextArrowP>
        </StyledFlexBox>
    )
}

const StyledFlexBox = styled.div`
    position: absolute;
    display: block;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-device-width: 440px) {
    }
`

const StyledNextArrowP = styled.p`
    position: absolute;
    display: block;
    margin: 0;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);

    color: #ffffff;
    font-size: 10rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 5rem;
        right: -1rem;
    }
`

const StyledPrevArrowP = styled.p`
    position: absolute;
    display: block;
    margin: 0;
    left: 0.5rem;
    top: 50%;
    transform: translateY(-50%);

    color: #ffffff;
    font-size: 10rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 5rem;
        left: -1rem;
    }
`
