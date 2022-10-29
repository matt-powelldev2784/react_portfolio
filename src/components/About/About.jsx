import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonArrow } from '../ui/custom/NeonArrow'
import { AboutText } from './AboutText'

const About = ({ triggerAnimation, scrollToComponent, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
            <StyledFlexBox background={THEME_BG}>
                <StyledFlexItem>
                    <AboutText />
                    <NeonArrow char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
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
