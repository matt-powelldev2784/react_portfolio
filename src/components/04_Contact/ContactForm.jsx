import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'

export const ContactForm = () => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT } = theme?.colors?.contact

    return (
        <StyledFlexItem>
            <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                CONTACT FORM
            </StyledH1>
            <FormInput type="text" placeholder="Name" label="NAME" name="email" width={'30rem'}></FormInput>
            <FormInput type="text" placeholder="Email" label="EMAIL" name="email" width={'30rem'}></FormInput>
            <FormTextArea type="textarea" placeholder="Message" label="MESSAGE" name="email" width={'30rem'} height={'10rem'}></FormTextArea>
            <StyledButton background={CONTACT_H1_BG}>Submit</StyledButton>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;
    min-width: 35rem;

    @media (max-device-width: 440px) {
        width: 90vw;
        margin: 0.1rem auto;
        min-width: unset;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: 1rem 0rem;
    padding: 0.3rem;
    text-align: left;
    font-size: 2rem;
    font-weight: 700;
    background: ${({ background }) => background};
    color: ${({ text }) => text};
    width: 24rem;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        margin: 0.5rem 0rem;
        width: 90vw;
        clip-path: unset;
    }

    @media (max-device-width: 380px) {
        font-size: 1rem;
        margin: 0.5rem 0rem;
        width: 90vw;
        clip-path: unset;
    }
`

const StyledButton = styled.button`
    position: relative;
    display: block;
    margin: 2.5rem 0rem;
    width: 8rem;
    font-size: 1.5rem;
    background: #ffffff;
    color: #000000;
    border: 3px solid ${({ background }) => background};
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;

    @media (max-device-width: 440px) {
        font-size: 1.2rem;
        margin: 0.5rem auto;
    }

    @media (max-device-width: 380px) {
        font-size: 1rem;
        margin: 0 auto;
    }
`
