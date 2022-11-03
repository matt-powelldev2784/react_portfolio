import React from 'react'
import styled from 'styled-components'
import { FormInput } from './FormInput'
import { FormTextArea } from './FormTextArea'

export const ContactForm = () => {
    return (
        <StyledFlexItem>
            <StyledH1>CONTACT FORM</StyledH1>
            <FormInput type="text" placeholder="Name" label="NAME" name="email" width={'30rem'}></FormInput>
            <FormInput type="text" placeholder="Email" label="EMAIL" name="email" width={'30rem'}></FormInput>
            <FormTextArea type="textarea" placeholder="Message" label="MESSAGE" name="email" width={'30rem'} height={'10rem'}></FormTextArea>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: 1rem;
    min-width: 35rem;

    @media (max-device-width: 440px) {
        width: 100%;
        margin: 0rem 1rem;
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
    background: #d1d7e0;
    color: #802bb1;
    width: 24rem;
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        width: 90vw;
        font-size: 1rem;
    }
`
