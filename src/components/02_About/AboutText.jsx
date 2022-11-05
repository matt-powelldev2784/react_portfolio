import React from 'react'
import styled from 'styled-components'
import TypeWriterEffect from 'react-typewriter-effect'

export const AboutText = () => {
    const text =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    return (
        <StyledSection>
            <StyledH1>
                ABOUT <StyledSpan>ME</StyledSpan>
            </StyledH1>

            <TypeWriterEffect
                textStyle={{ margin: '1rem' }}
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
    color: #802bb1;
    background: #d1d7e0;
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
    color: #802bb1;

    @media (max-device-width: 440px) {
        font-size: 2rem;
    }
`
