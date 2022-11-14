import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import atSvg from '../../img/at.svg'
import githubLogo from '../../img/github_logo.svg'
import { ListItem } from './ListItem'

export const ContactDetails = () => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_H1_BG, CONTACT_H1_TEXT, CONTACT_TEXT } = theme?.colors?.contact

    return (
        <StyledFlexItem>
            <StyledLi>
                <StyledH1 background={CONTACT_H1_BG} text={CONTACT_H1_TEXT}>
                    CONTACT DETAILS
                </StyledH1>
            </StyledLi>
            <StyledLi>
                <StyledPBold text={CONTACT_TEXT}>Matthew Powell</StyledPBold>
            </StyledLi>
            <StyledLi>
                <ListItem image={atSvg} text={'matt.powell2784@gmail.com'} href={'mailto:matt.powell2784@gmail.com'} />
            </StyledLi>
            <StyledLi>
                <ListItem image={githubLogo} text={'github.com/matt-powelldev2784'} href={'https://github.com/matt-powelldev2784'} />
            </StyledLi>
        </StyledFlexItem>
    )
}

const StyledFlexItem = styled.div`
    position: relative;
    display: block;
    margin: auto;
    min-width: 27.5rem;

    @media only screen and (max-width: 451px) {
        min-width: 90vw;
    }
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

const StyledLi = styled.li`
    position: relative;
    display: block;
    margin: 0.5rem auto;
`

const StyledPBold = styled.p`
    display: block;
    padding: 0.3rem;
    font-size: min(calc(1.5vw + 1rem), 1.7rem);
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};
`
