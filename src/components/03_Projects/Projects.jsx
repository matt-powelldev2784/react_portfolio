import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { CardCarousel } from './Card/CardCarousel'
import { NeonText } from '../ui/NeonText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/hall_bg.jpg'

const Projects = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { isDesktop, theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
            <Background backgroundImage={backgroundImage} />
            <StyledBackgroundConatiner background={THEME_BG}>
                <StyledContainer>
                    <CardCarousel />
                </StyledContainer>
            </StyledBackgroundConatiner>
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

const StyledBackgroundConatiner = styled.div`
    position: relative;
    display: block;
    min-height: 100vh;
    height: 100%;
    margin: auto;

    background: rgb(0, 0, 0, 0.9);

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledContainer = styled.div`
    position: absolute;
    display: block;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 rem 0.5rem;

    @media (max-device-width: 440px) {
    }
`
