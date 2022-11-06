import React, { forwardRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/room_bg.jpg'

const About = ({ triggerAnimation, scrollToComponent, pageTheme }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { ABOUT_BG } = theme?.colors?.about

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref}></StyledRefDiv>
            <Background backgroundImage={backgroundImage} />
            <StyledFlexBox background={ABOUT_BG}>
                <StyledFlexItem>
                    <AboutText />
                </StyledFlexItem>
                {isDesktop && <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />}
            </StyledFlexBox>
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

const StyledRefDiv = styled.div`
    background: blue;
`

const StyledFlexBox = styled.section`
    position: relative;
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    background: ${({ background }) => background};
`

const StyledFlexItem = styled.div``
