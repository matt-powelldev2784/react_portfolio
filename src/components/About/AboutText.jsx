import React from 'react'
import styled from 'styled-components'
import TypeWriterEffect from 'react-typewriter-effect'

export const AboutText = () => {
    const text =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    return (
        <StyledSection>
            <TypeWriterEffect
                textStyle={{ margin: '1rem' }}
                startDelay={100}
                cursorColor="black"
                text={text}
                typeSpeed={1}
                //scrollArea={myAppRef}
            />
        </StyledSection>
    )
}

const StyledSection = styled.section`
    position: relative;
    width: 50%;
    min-width: 25rem;
    background: red;
    margin: auto;

    @media (max-device-width: 440px) {
        width: 90%;
        min-width: 90%;
        font-size: 0.9rem;
    }
`
