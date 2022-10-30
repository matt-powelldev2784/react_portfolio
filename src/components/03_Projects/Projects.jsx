import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { FlipCard } from '../03_Projects/Card/FlipCard'
import { NeonText } from '../ui/NeonText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/hall_bg.jpg'

const Projects = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
            <Background backgroundImage={backgroundImage} />
            <StyledFlexBoxConatiner background={THEME_BG}>
                <StyledFlexBox>
                    <StyledFlexItem>
                        <FlipCard />
                    </StyledFlexItem>
                    <StyledFlexItem>
                        <FlipCard />
                    </StyledFlexItem>
                    <StyledFlexItem>
                        <FlipCard />
                    </StyledFlexItem>
                </StyledFlexBox>
            </StyledFlexBoxConatiner>
            <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
        </StyledSection>
    )
}

export const ProjectsForwardRef = forwardRef(Projects)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    overflow: hidden;
`

const StyledFlexBoxConatiner = styled.div`
    position: relative;
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 4rem;

    background: ${({ background }) => background};
    opacity: 95%;

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledFlexBox = styled.div`
    position: relative;
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledFlexItem = styled.div`
    display: block;
    padding: 1rem;
    min-width: 26rem;

    @media (max-device-width: 440px) {
        width: 100vw;
        min-width: 100vw;
        padding: 0rem;
    }
`
