import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/email_bg.jpg'
import { ContactDetails } from './ContactDetails'

export const Contact = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { THEME_BG } = theme?.colors?.[pageTheme]

    return (
        <StyledSection ref={ref}>
            <Background backgroundImage={backgroundImage} />
            <StyledOpacityConatiner background={THEME_BG}>
                <StyledFlexBox background={THEME_BG}>
                    <ContactDetails />
                    <StyledFlexItem>dfdfdghhgdgdfhhgffghhfgfghhfg</StyledFlexItem>
                </StyledFlexBox>
            </StyledOpacityConatiner>
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

const StyledOpacityConatiner = styled.div`
    position: relative;
    display: block;
    min-height: 100vh;
    height: 100%;
    margin: auto;
    background: rgb(128, 43, 177, 0.9);

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledFlexBox = styled.div`
    position: relative;
    display: flex;
    padding: 5rem;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: no-wrap;
    justify-content: center;
    align-items: top;

    margin: auto;
`
const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;
    min-width: 35rem;
`
