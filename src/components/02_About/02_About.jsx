import React, { useState, useRef, forwardRef } from 'react'
import { useIntersection } from '../Utilities/useIntersection'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText/AboutText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/room_bg.jpg'

const About = ({ triggerAnimation, scrollToComponent, pageTheme }, ref) => {
    const intersectRef = useRef()
    const [intersectAboutPage, setintersectAboutPage] = useState(false)
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { ABOUT_BG } = theme?.colors?.about

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    const inViewport = useIntersection(intersectRef, '-300px') // Trigger if 100px is visible from the element

    if (inViewport && !intersectAboutPage) {
        setintersectAboutPage(true)
        console.log('in viewport:', ref.current)
    }

    return (
        <StyledSection {...swipeHandlers} ref={intersectRef}>
            <StyledRefDiv ref={ref}></StyledRefDiv>
            <Background backgroundImage={backgroundImage} />
            <StyledFlexBox background={ABOUT_BG}>
                <StyledFlexItem>
                    <AboutText triggerAnimation={intersectAboutPage} />
                </StyledFlexItem>
            </StyledFlexBox>
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

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    width: 100%;
`
