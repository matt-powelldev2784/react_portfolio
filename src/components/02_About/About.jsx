import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { AboutText } from './AboutText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/room_bg.jpg'

const About = ({ triggerAnimation, scrollToComponent, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
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
    opacity: 75%;
`

const StyledFlexItem = styled.div``
