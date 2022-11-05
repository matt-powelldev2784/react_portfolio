import React from 'react'
import styled from 'styled-components'

export const FormInput = ({ width, height, label, type, placeholder, name, value, onChange, error, autocomplete, required }) => {
    const labelUppercase = label?.toUpperCase()

    return (
        <StyledContainerDiv width={width} height={height}>
            <Label htmlFor={name}></Label>
            <Span>{labelUppercase}</Span>
            <Input
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
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background: #ffffff;
    border: 8px solid #d1d7e0;
    border-radius: 1rem;
    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);
    font-size: 1rem;

    @media (max-device-width: 440px) {
        width: 90vw;
        border: 2px solid #d1d7e0;
        border-radius: 0.7rem;
        max-height: 80%;
        height: 1.8rem;
    }
`

const Span = styled.span`
    display: block;
    float: left;
    padding: 0.1rem;
    color: #d1d7e0;
    font-weight: 700;
    font-size: 1.2rem;
    background: none;

    @media (max-device-width: 440px) {
        height: 14%;
        font-size: 1rem;
    }
`
