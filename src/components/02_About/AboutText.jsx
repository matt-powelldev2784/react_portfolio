import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import TypeWriterEffect from 'react-typewriter-effect'

export const AboutText = () => {
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_H1_BG, ABOUT_H1_TEXT, ABOUT_TEXT } = theme?.colors?.about

    const text =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    return (
        <StyledSection>
            <StyledH1 background={ABOUT_H1_BG} text={ABOUT_H1_TEXT}>
                ABOUT <StyledSpan text={ABOUT_H1_TEXT}>ME</StyledSpan>
            </StyledH1>

            <TypeWriterEffect
                textStyle={{ margin: '1rem', color: ABOUT_TEXT }}
                startDelay={100}
                cursorColor="black"
                text={text}
                typeSpeed={50}
                //scrollArea={myAppRef}
            />
        </StyledSection>
    )
}

const StyledSection = styled.section`
    position: relative;
    width: 50rem;
    min-width: 25rem;
    margin: auto;
    font-size: 2rem;
    color: #d1d7e0;

    @media (max-device-width: 440px) {
        width: 320px;
        min-width: 90%;
        font-size: 1rem;
    }
`

const StyledH1 = styled.h1`
    position: relative;
    display: block;
    width: 100%;
    min-width: 100%;
    font-size: 3rem;
    font-weight: 700;
    padding: 0.5rem;
    text-align: left;
    color: ${({ text }) => text};
    background: ${({ background }) => background};
    clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);

    @media (max-device-width: 440px) {
        margin: 1rem 0rem;
        padding: 0.3rem;
        font-size: 2rem;
        clip-path: unset;
    }
`

const StyledSpan = styled.span`
    display: inline;
    font-size: 3rem;
    font-weight: 700;
    text-align: left;
    color: ${({ text }) => text};

    @media (max-device-width: 440px) {
        font-size: 2rem;
    }
`
