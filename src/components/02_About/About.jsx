import React, { forwardRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/room_bg.jpg'

const About = ({ triggerAnimation, scrollToComponent, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    const swipeHandlers = useSwipeable({
        onSwiped: eventData => scrollToComponent()
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref} />
            <Background backgroundImage={backgroundImage} />
            <StyledFlexBox background={THEME_BG}>
                <StyledFlexItem>
                    <AboutText />
                    <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
                </StyledFlexItem>
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

const StyledRefDiv = styled.div``

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
    background: rgb(128, 43, 177, 0.75);
`

const StyledFlexItem = styled.div``
