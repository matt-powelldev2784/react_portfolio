import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import { ThemeContext } from '../../app/App'
import { CardCarousel } from './Card/CardCarousel'
import { NeonText } from '../ui/NeonText'

const Projects = ({ scrollToComponent, triggerAnimation }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { PROJECTS_BG } = theme?.colors?.projects

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref} />
            <StyledOpacityConatiner background={PROJECTS_BG} />
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
    background: ${({ background }) => background};

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`
