import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Typeography } from '../../ui/Typeogrpahy/Typeography'
import otsLogo from '../../../img/ots_logo.svg'

export const CardBack = ({ title, text1, text2, img, href }) => {
    return (
        <Fragment>
            <StyledBack>
                <StyledLogoImg src={otsLogo} />
                <Typeography variant={'h1'} cssProps={headingCss}>
                    Football Player Registration App
                </Typeography>
                <Typeography variant={'p'} cssProps={paragraphCss}>
                    Frontend built with React, TypeScript, Redux Toolkit and Styled Components.
                </Typeography>
                <Typeography variant={'p'} cssProps={paragraphCss}>
                    Backend created with NodeJS, Express, Mongo DB, Express Validator, Bcrypt and JWT
                </Typeography>
                <StyledButton>Visit Site</StyledButton>
            </StyledBack>
        </Fragment>
    )
}

const StyledBack = styled.div`
    position: absolute;
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
