import React, { useState, forwardRef, createContext } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText/AboutText'
import { Background } from '../ui/Background'
import { TopOfPageNotification } from '../Utilities/TopOfPageNotification'
import backgroundImage from '../../img/room_bg.jpg'

export const aboutContext = createContext()

const About = ({ triggerAnimation, scrollToComponent }, ref) => {
    const [displayTyping, setDisplayTyping] = useState(false)
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_BG } = theme?.colors?.about

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    const toggleTypingNotification = () => {
        setDisplayTyping(false)
    }

    return (
        <aboutContext.Provider value={{ displayTyping, setDisplayTyping, toggleTypingNotification }}>
            <StyledSection {...swipeHandlers} onClick={toggleTypingNotification}>
                <StyledRefDiv ref={ref}></StyledRefDiv>
                <Background backgroundImage={backgroundImage} />
                <StyledFlexBox background={ABOUT_BG}>
                    <AboutText />
                </StyledFlexBox>
                {displayTyping && <TopOfPageNotification text={'Click to cancel typing effect...'} />}
                <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
            </StyledSection>
        </aboutContext.Provider>
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
