import React, { forwardRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText/AboutText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/room_bg.jpg'

const About = ({ triggerAnimation, scrollToComponent }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { ABOUT_BG, ABOUT_TEXT } = theme?.colors?.about

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref}></StyledRefDiv>
            <Background backgroundImage={backgroundImage} />
            <StyledFlexBox background={ABOUT_BG}>
                <AboutText />
            </StyledFlexBox>
            <StyledA color={ABOUT_TEXT}>
                Click main text to<br></br>skip typing effect
            </StyledA>
            {isDesktop && <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />}
        </StyledSection>
    )
}

export const AboutForwardRef = forwardRef(About)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    overflow: hidden;
`

const StyledRefDiv = styled.div``

const StyledFlexBox = styled.section`
    position: relative;
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: ${({ background }) => background};
`

const StyledA = styled.a`
    position: absolute;
    display: block;
    bottom: 0;
    right: 0;
    width: auto;
    height: auto;
    padding: 1rem;
    font-size: 0.8rem;
    text-align: center;
    color: ${({ color }) => color};

    @media (max-device-width: 440px) {
        top: 2rem;
        left: 0rem;
        width: 6rem;
        height: 2rem;
        font-size: 0.6rem;
        padding: 0.5rem;
        text-align: unset;
    }
`
