import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { ContactDetails } from './ContactDetails'
import { ContactForm } from './ContactForm'

export const ContactFlexbox = () => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_BG } = theme?.colors?.contact

    return (
        <StyledBackgroundContainer background={CONTACT_BG}>
            <StyledContainer>
                <StyledFlexBox>
                    <StyledFlexItem>
                        <ContactDetails />
                    </StyledFlexItem>
                    <StyledFlexItem>
                        <ContactForm />
                    </StyledFlexItem>
                </StyledFlexBox>
            </StyledContainer>
        </StyledBackgroundContainer>
    )
}

const StyledBackgroundContainer = styled.div`
    position: relative;
    display: block;
    background: ${({ background }) => background};
    min-height: 100vh;
`

const StyledContainer = styled.div`
    position: absolute;
    display: block;
    width: 100%;
    height: auto;
    top: 50%;
    transform: translateY(-50%);
`

const StyledFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    gap: 4rem;

    @media only screen and (max-width: 451px) {
        padding: unset;
        gap: 0.4rem;
    }
`

const StyledFlexItem = styled.div``
