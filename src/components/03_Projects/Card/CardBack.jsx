import React, { Fragment } from 'react'
import styled from 'styled-components'
import otsLogo from '../../../img/ots_logo.svg'

export const CardBack = ({ title, text1, text2, img, href }) => {
    return (
        <Fragment>
            <StyledBack>
                <StyledLogoImg src={otsLogo} />
                <StyledH1>Football Player Registration App</StyledH1>
                <StyledP>Frontend built with React, TypeScript, Redux Toolkit and Styled Components.</StyledP>
                <StyledP>Backend created with NodeJS, Express, Mongo DB, Express Validator, Bcrypt and JWT</StyledP>
                <StyledButton>Visit Site</StyledButton>
            </StyledBack>
        </Fragment>
    )
}

const StyledBack = styled.div`
    position: absolute;
    overflow: visible;
    width: 22rem;
    height: 30rem;
    border-radius: 20px;
    background: #ffffff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.7), 1px 2px 4px 0px rgba(0, 0, 0, 0.7), 2px 4px 8px 0px rgba(0, 0, 0, 0.7),
        2px 4px 16px 0px rgba(0, 0, 0, 0.7);
    transform: rotateY(180deg);

    @media (max-device-width: 440px) {
        width: 100%;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    margin: auto;
    padding: 0.5rem;
    text-align: center;
    font-size: 2rem;
    font-weight: 700;

    @media (max-device-width: 440px) {
        font-size: 1.5rem;
        font-weight: 700;
    }
`

const StyledP = styled.p`
    display: block;
    margin: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 300;

    @media (max-device-width: 440px) {
        font-size: 1rem;
    }
`

const StyledLogoImg = styled.img`
    position: relative;
    margin: 0.5rem;
    width: 7rem;
`

const StyledButton = styled.button`
    position: relative;
    margin: 0.5rem;
    width: 10rem;
    font-size: 1.5rem;
`

const headingCss = {
    color: '#003a68',
    'font-size': '2rem'
}

const paragraphCss = {
    color: '#000000',
    'font-size': '1.2rem'
}
