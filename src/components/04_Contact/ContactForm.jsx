import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { ThemeContext } from '../../app/App'
import { ContactContext } from './04_Contact'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'
import { validateForm } from './validateForm'

export const ContactForm = () => {
    const { setDisplayNotification, setNotificationText } = React.useContext(ContactContext)
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT } = theme?.colors?.contact
    const emptyFormData = { user_name: '', user_email: '', message: '' }
    const [formData, setFormData] = useState(emptyFormData)
    const [formErrors, setFormErrors] = useState(emptyFormData)
    const formRef = useRef()

    const onInputChange = e => {
        const inputName = e.target.name
        setFormData({ ...formData, [inputName]: e.target.value })
    }

    const validateFormAndSendEmail = e => {
        e.preventDefault()
        setFormErrors(emptyFormData)
        const { validForm, errors } = validateForm(formData)

        if (validForm) {
            sendEmail()
        } else {
            setFormErrors(errors)
        }
    }

    const sendEmail = async () => {
        try {
            await emailjs.sendForm(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.REACT_APP_EMAILJS_KEY
            )

            setFormData(emptyFormData)
            setNotificationText('Message Sent...')
            setDisplayNotification(true)
            setTimeout(() => {
                setDisplayNotification(false)
                setNotificationText('')
            }, 5000)
        } catch (error) {
            setNotificationText('Error Sending Message...')
            setDisplayNotification(true)
            setTimeout(() => {
                setDisplayNotification(false)
                setNotificationText('')
            }, 5000)
        }
    }

    return (
        <StyledFlexItem>
            <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                CONTACT FORM
            </StyledH1>
            <StyledForm ref={formRef} onSubmit={sendEmail}>
                <FormInput
                    onChange={onInputChange}
                    value={formData.user_name}
                    type="text"
                    placeholder="Name"
                    label="NAME"
                    name="user_name"
                    width={'30rem'}
                    error={formErrors.user_name}
                />
                <FormInput
                    onChange={onInputChange}
                    value={formData.user_email}
                    type="text"
                    placeholder="Email"
                    label="EMAIL"
                    name="user_email"
                    width={'30rem'}
                    error={formErrors.user_email}
                />
                <FormTextArea
                    onChange={onInputChange}
                    value={formData.message}
                    type="textarea"
                    placeholder="Message"
                    label="MESSAGE"
                    name="message"
                    width={'30rem'}
                    height={'10rem'}
                    error={formErrors.message}
                />
                <StyledButton onClick={validateFormAndSendEmail}>Submit</StyledButton>
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
