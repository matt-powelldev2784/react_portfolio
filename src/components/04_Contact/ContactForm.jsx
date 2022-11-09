import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../app/App'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'

export const ContactForm = () => {
    const formRef = useRef()
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT } = theme?.colors?.contact

    const sendEmail = async e => {
        e.preventDefault()

        try {
            const email = await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_KEY
            )
            console.log(email.text)
            console.log('message sent')
        } catch (error) {
            console.log(error.text)
        }
    }

    return (
        <StyledFlexItem>
            <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                CONTACT FORM
            </StyledH1>
            <StyledForm ref={formRef} onSubmit={sendEmail}>
                <FormInput type="text" placeholder="Name" label="NAME" name="user_name" width={'30rem'}></FormInput>
                <FormInput type="text" placeholder="Email" label="EMAIL" name="user_email" width={'30rem'}></FormInput>
                <FormTextArea type="textarea" placeholder="Message" label="MESSAGE" name="message" width={'30rem'} height={'10rem'}></FormTextArea>
                <StyledButton onClick={sendEmail}>Submit</StyledButton>
            </StyledForm>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;

    @media (max-device-width: 440px) {
        width: 90vw;
        margin: 0.1rem auto;
        min-width: unset;
    }
`
const StyledForm = styled.form``

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
    margin: 2.5rem auto;
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
