import React, { useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'
import { FlipCard } from '../Card/FlipCard'
import { flipCardInfo } from './FlipCardInfo'

export const CardCarousel = () => {
    const [flipCardNumber, setFlipCardNumber] = useState(0)
    const { isDesktop } = React.useContext(ThemeContext)
    console.log('isDesktop', isDesktop)

    const maxFlipCardNumber = flipCardInfo.length - 1
    const minFlipCardNumber = 0

    const onNextFlipCard = () => {
        if (maxFlipCardNumber !== flipCardNumber) {
            setFlipCardNumber(prevState => {
                return prevState + 1
            })
        } else {
            setFlipCardNumber(minFlipCardNumber)
        }
    }

    const onPrevFlipCard = () => {
        if (minFlipCardNumber !== flipCardNumber) {
            setFlipCardNumber(prevState => {
                return prevState - 1
            })
        } else {
            setFlipCardNumber(maxFlipCardNumber)
        }
    }

    const currentFlipCard = <FlipCard cardProps={flipCardInfo[flipCardNumber]} />
    const flipCardDots = flipCardInfo.map((flipcard, i) => {
        // prettier-ignore
        const dotSpan = i === flipCardNumber ?
            <StyledDotSpan color={'#ffffff'} key={i}>{'•'}</StyledDotSpan>
            : <StyledDotSpan key={i}> {'•'} </StyledDotSpan>

        return dotSpan
    })

    return (
        <StyledContainerDiv>
            <StyledPrevCircleDiv>
                <StyledPrevArrowP onClick={onPrevFlipCard}>{'⬅'}</StyledPrevArrowP>
            </StyledPrevCircleDiv>
            {currentFlipCard}
            <StyledDotContainer>{flipCardDots}</StyledDotContainer>
            <StyledNextCircleDiv>
                <StyledNextArrowP onClick={onNextFlipCard}>{'⮕'}</StyledNextArrowP>
            </StyledNextCircleDiv>
        </StyledContainerDiv>
    )
}

const StyledContainerDiv = styled.div`
    position: absolute;
    display: block;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-device-width: 440px) {
    }
`

const StyledPrevCircleDiv = styled.div`
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    width: 6rem;
    height: 6rem;
    left: -8rem;
    border-radius: 50%;
    border: 2px solid #ffffff;

    background: #000000;
    z-index: 1;

    @media (max-device-width: 440px) {
        width: 3rem;
        height: 3rem;
        left: -1.4rem;
    }
`

const StyledPrevArrowP = styled.p`
    position: absolute;
    top: 3.5rem;
    left: 2.75rem;
    transform: translate(-50%, -50%);

    color: #ffffff;
    font-size: 4.5rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 2rem;
        top: 1.65rem;
        left: 1.25rem;
    }
`

const StyledNextCircleDiv = styled.div`
    position: absolute;
    display: block;
    top: 50%;
    transform: translateY(-50%);
    width: 6rem;
    height: 6rem;
    right: -8rem;
    border-radius: 50%;
    border: 2px solid #ffffff;

    background: #000000;
    z-index: 1;

    @media (max-device-width: 440px) {
        width: 3rem;
        height: 3rem;
        right: -1.4rem;
    }
`

const StyledNextArrowP = styled.p`
    position: absolute;
    top: 3.5rem;
    left: 3rem;
    transform: translate(-50%, -50%);

    color: #ffffff;
    font-size: 4.5rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 2rem;
        top: 1.6rem;
        left: 1.45rem;
    }
`

const StyledDotContainer = styled.span`
    position: absolute;
    display: block;
    color: #ffffff;
    top: 30.5rem;
    left: 50%;
    transform: translateX(-50%);

    @media (max-device-width: 440px) {
        top: 32.4rem;
    }
`

const StyledDotSpan = styled.span`
    color: ${({ color }) => (color ? color : '#272727')};
    font-size: 3rem;
    padding: 0.25rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;

    @media (max-device-width: 440px) {
        font-size: 2rem;
    }
`
