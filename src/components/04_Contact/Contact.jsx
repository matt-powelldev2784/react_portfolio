import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'

export const Contact = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
            <StyledFlexBox background={THEME_BG}>
                <StyledFlexItem>Contact</StyledFlexItem>
            </StyledFlexBox>
            <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
        </StyledSection>
    )
}

export const ContactForwardRef = forwardRef(Contact)

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
`

const StyledFlexItem = styled.div``
