import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import { ThemeContext } from '../../app/App'
import { CardCarousel } from './Card/CardCarousel'
import { NeonText } from '../ui/NeonText'
import { Background } from '../ui/Background'
import { ProjectTitle } from './ProjectTitle'
import backgroundImage from '../../img/white_room_bg.jpg'

const Projects = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref} />
            <Background backgroundImage={backgroundImage} />
            <StyledOpacityConatiner background={THEME_BG} />
            <ProjectTitle />
            <CardCarousel />
            {isDesktop && <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />}
        </StyledSection>
    )
}

export const ProjectsForwardRef = forwardRef(Projects)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    height: fit-content;
    overflow: hidden;
`
const StyledRefDiv = styled.div``

const StyledOpacityConatiner = styled.div`
    position: relative;
    display: block;
    min-height: 100vh;
    height: 100%;
    margin: auto;

    background: rgb(24, 29, 36, 0.7);

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`
