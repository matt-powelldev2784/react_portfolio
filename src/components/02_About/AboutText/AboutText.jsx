import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useIsInViewport } from '../../Utilities/useIntersection'
import { ThemeContext } from '../../../app/App'
import { aboutContext } from '../02_About'
import Typewriter from 'typewriter-effect'
import { textArray } from '../aboutTextInfo'
import { AboutStatic } from './AboutStatic'

export const AboutText = () => {
    const typewriterRef = useRef(null)
    const { theme } = React.useContext(ThemeContext)
    const { displayTyping, setDisplayTyping } = React.useContext(aboutContext)
    const { ABOUT_TEXT } = theme?.colors?.about

    const typewriterIsInViewport = useIsInViewport(typewriterRef)
    useEffect(() => {
        if (typewriterIsInViewport) {
            setDisplayTyping(true)
        }
    }, [typewriterIsInViewport, setDisplayTyping])

    return (
        <StyledSection>
            <StyledContainer text={ABOUT_TEXT} ref={typewriterRef}>
                {displayTyping && (
                    <Typewriter
                        onInit={typewriter => {
                            typewriter.typeString().callFunction(() => {
                                setDisplayTyping(false)
                            })
                        }}
                        options={{
                            strings: textArray,
                            autoStart: true,
                            loop: false,
                            deleteSpeed: 1
                        }}
                    />
                )}
                {!displayTyping && <AboutStatic />}
            </StyledContainer>
        </StyledSection>
    )
}

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100%;
`

const StyledContainer = styled.section`
    position: relative;
    display: block;
    font-size: calc(2vw + 0.5rem);
    margin: calc(2vw + 0.5rem);
    font-weight: 700;
    color: ${({ text }) => text};

    @media only screen and (max-width: 451px) {
        font-size: calc(1vw + 1rem);
        margin: min(0.5rem, 6rem);
    }
`
