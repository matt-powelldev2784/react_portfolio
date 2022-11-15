import React, { useState, forwardRef, createContext } from 'react'
import styled from 'styled-components'
import { useSwipeable } from 'react-swipeable'
import { Background } from '../ui/Background'
import { ContactFlexbox } from './ContactFlexbox'
import backgroundImage from '../../img/white_room_bg.jpg'
import { TopOfPageNotification } from '../Utilities/TopOfPageNotification'

export const ContactContext = createContext()

export const Contact = ({ scrollToComponent, triggerAnimation }, ref) => {
    const [displayNotification, setDisplayNotification] = useState(false)
    const [notificationText, setNotificationText] = useState('')

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent(),
        delta: 200
    })

    return (
        <ContactContext.Provider value={{ setDisplayNotification, setNotificationText }}>
            <StyledSection {...swipeHandlers}>
                <StyledRefDiv ref={ref} />
                <Background backgroundImage={backgroundImage} />
                {/* <ContactFlexbox /> */}
                {displayNotification && <TopOfPageNotification text={notificationText} />}
                {/* <NeonText char={'▴'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} /> */}
            </StyledSection>
        </ContactContext.Provider>
    )
}

export const ContactForwardRef = forwardRef(Contact)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    min-height: 100vh;
`
const StyledRefDiv = styled.div``
