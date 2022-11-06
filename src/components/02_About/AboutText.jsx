import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import TypeWriterEffect from 'react-typewriter-effect'

export const AboutText = () => {
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_H1_BG, ABOUT_H1_TEXT, ABOUT_TEXT } = theme?.colors?.about

    const text =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    const typeWritterCSS = { color: ABOUT_TEXT }

    return (
        <StyledSection>
            <StyledContainer>
                <TypeWriterEffect
                    textStyle={typeWritterCSS}
                    startDelay={100}
                    cursorColor="black"
                    text={text}
                    typeSpeed={50}
                    //scrollArea={myAppRef}
                />
            </StyledContainer>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    position: relative;
    display: block;

    @media (max-device-width: 440px) {
    }
`

const StyledContainer = styled.section`
    position: relative;
    display: block;
    margin: auto;
    font-size: 2rem;
    color: #d1d7e0;
    padding: 2rem 7.5rem;

    @media (max-device-width: 440px) {
        font-size: 1rem;
        padding: 0rem 2.5rem;
    }
`
