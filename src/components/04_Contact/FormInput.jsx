import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const FormInput = ({ width, height, label, type, placeholder, name, value, onChange, error, autocomplete, required }) => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_TEXT } = theme?.colors?.contact
    const labelUppercase = label?.toUpperCase()

    return (
        <StyledContainerDiv width={width} height={height}>
            <Label htmlFor={name}></Label>
            <Span text={CONTACT_TEXT}>{labelUppercase}</Span>
            {error && (
                <ErrorSpan error={error} text={CONTACT_TEXT}>
                    {error}
                </ErrorSpan>
            )}
            <Input
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
    min-width: 27.5rem;
    margin: 1rem auto;

    @media only screen and (max-width: 451px) {
        min-width: 90vw;
        margin: 0.3rem 0rem;
    }
`

const Label = styled.label`
    position: relative;
    display: block;
    margin: 1rem 0rem;
    float: left;
`

const Input = styled.input`
    position: relative;
    display: block;
    margin: 0rem auto 0rem auto;
    min-width: 27.5rem;
    width: 100%;
    height: 80%;
    padding: 0.5rem;
    background: #ffffff;
    border: 5px solid ${({ error, text }) => (error ? 'red' : text)};
    border-radius: 1rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;

    @media only screen and (max-width: 451px) {
        border: 2px solid ${({ error, text }) => (error ? 'red' : text)};
        border-radius: 0.7rem;
        max-height: 80%;
        min-width: 90vw;
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

    @media only screen and (max-width: 451px) {
        font-size: 1rem;
    }
`

const ErrorSpan = styled.span`
    display: block;
    float: left;
    margin: 0rem 0.1rem 0.1rem 0.5rem;
    padding: 0.05rem 0.7rem;
    background: red;
    color: white;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    border-radius: 0.5rem;

    @media only screen and (max-width: 451px) {
        font-size: 0.8rem;
    }
`
