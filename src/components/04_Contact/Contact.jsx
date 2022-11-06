import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import { ThemeContext } from '../../app/App'
import { NeonText } from '../ui/NeonText'
import { Background } from '../ui/Background'
import backgroundImage from '../../img/email_bg.jpg'
import { ContactDetails } from './ContactDetails'
import { ContactForm } from './ContactForm'

export const Contact = ({ scrollToComponent, triggerAnimation, pageTheme }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { CONTACT_BG } = theme?.colors?.contact

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent(),
        delta: 200
    })

    return (
        <StyledSection {...swipeHandlers}>
            <StyledRefDiv ref={ref} />
            <Background backgroundImage={backgroundImage} />
            <StyledOpacityConatiner background={CONTACT_BG}>
                <StyledFlexBox>
                    <ContactDetails />
                    <ContactForm />
                </StyledFlexBox>
            </StyledOpacityConatiner>
            {isDesktop && <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />}
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
const StyledRefDiv = styled.div``

const StyledOpacityConatiner = styled.div`
    position: relative;
    display: block;
    min-height: 100vh;
    max-height: 100vh;
    height: 100%;
    margin: auto;
    background: ${({ background }) => background};

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
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: start;

    @media (max-device-width: 440px) {
        flex-direction: column;
        justify-content: center;
        padding: 1.5rem 0rem;
        width: 100vw;
    }

    @media (max-device-width: 380px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 1.5rem 0rem;
        width: 100vw;
    }
`
