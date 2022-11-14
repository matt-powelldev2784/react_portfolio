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
            <StyledLi>
                <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                    CONTACT FORM
                </StyledH1>
            </StyledLi>
            <StyledForm ref={formRef} onSubmit={sendEmail}>
                <FormInput
                    onChange={onInputChange}
                    value={formData.user_name}
                    type="text"
                    placeholder="Name"
                    label="NAME"
                    name="user_name"
                    width={'calc(35vw + 4rem)'}
                    error={formErrors.user_name}
                />
                <FormInput
                    onChange={onInputChange}
                    value={formData.user_email}
                    type="text"
                    placeholder="Email"
                    label="EMAIL"
                    name="user_email"
                    width={'calc(35vw + 4rem)'}
                    error={formErrors.user_email}
                />
                <FormTextArea
                    onChange={onInputChange}
                    value={formData.message}
                    type="textarea"
                    placeholder="Message"
                    label="MESSAGE"
                    name="message"
                    width={'calc(35vw + 4rem)'}
                    height={'calc(10vw + 4rem)'}
                    error={formErrors.message}
                />
                <StyledButton background={CONTACT_H1_BG} onClick={validateFormAndSendEmail}>
                    Submit
                </StyledButton>
            </StyledForm>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: auto;
`
const StyledForm = styled.form``

const StyledLi = styled.li`
    position: relative;
    display: block;
    margin: 0.5rem auto;
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    padding: 0.3rem;
    text-align: left;
    font-size: min(calc(1.5vw + 1rem), 2rem);
    font-weight: 700;
    background: ${({ background }) => background};
    color: ${({ text }) => text};

    @media only screen and (max-width: 451px) {
        min-width: 90vw;
        font-size: min(calc(2vw + 1rem), 2rem);
    }
`

const StyledButton = styled.button`
    position: relative;
    display: block;
    margin: 0.3rem auto;
    width: 8rem;
    font-size: min(calc(1vw + 1rem), 1.5rem);
    background: #ffffff;
    color: #000000;
    border: 3px solid ${({ background }) => background};
    border-radius: 20px;
    cursor: pointer;
    z-index: 1;
`
