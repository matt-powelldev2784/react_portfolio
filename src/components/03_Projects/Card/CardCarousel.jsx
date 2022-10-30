import React, { useState } from 'react'
import styled from 'styled-components'
import { FlipCard } from '../Card/FlipCard'
import { flipCardInfo } from './FlipCardInfo'

export const CardCarousel = () => {
    const [flipCardNumber, setFlipCardNumber] = useState(0)
    const maxFlipCardNumber = 2
    const minFlipCardNumber = 0
    console.log('flipCardNumber', flipCardNumber)

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
            <StyledFlexItem onClick={onPrevFlipCard}>
                <StyledP>{'⏴'}</StyledP>
            </StyledFlexItem>
            <StyledFlexItem>{currentFlipCard}</StyledFlexItem>
            <StyledFlexItem onClick={onNextFlipCard}>
                <StyledP>{'⏵'}</StyledP>
            </StyledFlexItem>
        </StyledFlexBox>
    )
}

const StyledFlexBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-device-width: 440px) {
    }
`

const StyledFlexItem = styled.div`
    position: relative;
    height: 32rem;

    @media (max-device-width: 440px) {
    }
`

const StyledP = styled.p`
    position: relative;
    display: block;
    height: 32rem;
    color: #ffffff;
    padding: 7.5rem 1rem;
    font-size: 10rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;

    @media (max-device-width: 440px) {
        padding: 13rem 0rem;
        font-size: 3rem;
    }
`
