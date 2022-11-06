import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const FormTextArea = ({ width, height, label, type, placeholder, name, value, onChange, error, autocomplete, required }) => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_TEXT } = theme?.colors?.contact
    const labelUppercase = label?.toUpperCase()

    return (
        <StyledContainerDiv width={width} height={height}>
            <Label htmlFor={name}></Label>
            <Span text={CONTACT_TEXT}>{labelUppercase}</Span>
            <TextArea
                text={CONTACT_TEXT}
                name={name}
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                id={name}
                error={error}
                autocomplete={autocomplete}
                required={required}
            />
        </StyledContainerDiv>
    )
}

const StyledContainerDiv = styled.div`
    position: relative;
    display: block;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: 1rem 0rem;

    @media (max-device-width: 440px) {
        width: 90vw;
        margin: 1rem 0rem;
    }

    @media (max-device-width: 380px) {
        width: 90vw;
        height: 100%;
        margin: 0.3rem 0rem;
    }
`

const Label = styled.label`
    position: relative;
    display: block;
    margin: 1rem 0rem;
    float: left;
`

const TextArea = styled.textarea`
    position: relative;
    display: block;
    margin: 0rem auto 0rem auto;
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background: #ffffff;
    border: 8px solid ${({ text }) => text};
    border-radius: 1rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    resize: none;

    @media (max-device-width: 440px) {
        width: 90vw;
        border: 2px solid #d1d7e0;
        border-radius: 0.7rem;
        max-height: 80%;
        height: 12rem;
    }

    @media (max-device-width: 380px) {
        width: 90vw;
        border: 2px solid ${({ background }) => background};
        border-radius: 0.7rem;
        max-height: 80%;
        height: 6rem;
    }
`

const Span = styled.span`
    display: block;
    float: left;
    padding: 0.1rem;
    color: ${({ text }) => text};
    font-weight: 700;
    font-size: 1.2rem;
    background: none;

    @media (max-device-width: 440px) {
        height: 14%;
        font-size: 1rem;
    }
`
