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
            <StyledBackgroundConatiner background={THEME_BG}>
                <StyledFlexBox>
                    <StyledFlexItem>
                        <StyledP>{'⏴'}</StyledP>
                    </StyledFlexItem>
                    <StyledFlexItem>
                        <FlipCard />
                    </StyledFlexItem>
                    <StyledFlexItem>
                        <StyledP>{'⏵'}</StyledP>
                    </StyledFlexItem>
                </StyledFlexBox>
            </StyledBackgroundConatiner>
            <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
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

    background: rgb(0, 0, 0, 0.75);

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledFlexBox = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-device-width: 440px) {
    }
`

const StyledFlexItem = styled.div`
    position: relative;
    height: 32rem;

    @media (max-device-width: 440px) {
    }
`

const StyledP = styled.p`
    position: relative;
    display: block;
    height: 32rem;
    color: #ffffff;
    padding: 7.5rem 1rem;
    font-size: 10rem;
    font-family: 'Noto Sans Symbols 2', sans-serif;
    margin: auto;

    @media (max-device-width: 440px) {
        padding: 13rem 0rem;
        font-size: 3rem;
    }
`
