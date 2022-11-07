import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { useIsInViewport } from '../../Utilities/useIntersection'
import { ThemeContext } from '../../../app/App'
import Typewriter from 'typewriter-effect'
import { textArray } from '../aboutTextInfo'
import { AboutStatic } from './AboutStatic'

export const AboutText = () => {
    const typewriterRef = useRef(null)
    const [displayTypingEffect, setDisplayTypingEffect] = useState(false)
    const [disableTypingEffect, setDisableTypingEffect] = useState(false)
    const [displayStaticText, setDisplayStaticText] = useState(false)
    const { theme } = React.useContext(ThemeContext)
    const { ABOUT_TEXT } = theme?.colors?.about

    const onClickToEndTypingEffect = () => {
        setDisplayTypingEffect(false)
        setDisplayStaticText(true)
        setDisableTypingEffect(true)
    }

    const typewriterIsInViewport = useIsInViewport(typewriterRef)
    useEffect(() => {
        if (typewriterIsInViewport) {
            setDisplayTypingEffect(true)
        }
    }, [typewriterIsInViewport, setDisplayTypingEffect])

    return (
        <StyledSection onClick={onClickToEndTypingEffect}>
            <StyledContainer text={ABOUT_TEXT} ref={typewriterRef}>
                {displayTypingEffect && !disableTypingEffect && (
                    <Typewriter
                        onInit={typewriter => {
                            typewriter.typeString().callFunction(() => {
                                setDisplayTypingEffect(false)
                                setDisplayStaticText(true)
                                setDisableTypingEffect(true)
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
                {displayStaticText && <AboutStatic />}
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
    font-size: 3rem;
    font-weight: 700;
    color: ${({ text }) => text};
    padding: 2rem 7.5rem;

    @media (max-device-width: 440px) {
        font-size: 1.5rem;
        padding: 0rem 1rem;
    }

    @media (max-device-width: 380px) {
        font-size: 1.2rem;
    }
`
