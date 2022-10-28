import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonArrow } from '../ui/custom/NeonArrow'
import { AboutText } from './AboutText'

export const About = ({ triggerAnimation, scrollToComponent, pageTheme }) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BLOCK_FG, THEME_BLOCK_BG, THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection>
            <StyledFlexBox background={THEME_BG}>
                <StyledFlexItem>
                    <AboutText />
                    {/* <NeonArrow char={'❮'} rotateDeg={'-90'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} /> */}
                </StyledFlexItem>
            </StyledFlexBox>
        </StyledSection>
    )
}

const StyledSection = styled.section``

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
