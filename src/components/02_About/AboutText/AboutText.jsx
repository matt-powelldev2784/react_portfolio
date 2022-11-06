import React, { useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../../app/App'
import Typewriter from 'typewriter-effect'
import { textArray } from '../aboutTextInfo'
import { AboutStatic } from './AboutStatic'

export const AboutText = ({ triggerAnimation }) => {
    const [typingEffectEnd, setTypingEffectEnd] = useState(false)
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { ABOUT_TEXT } = theme?.colors?.about

    const onClickToEndTypingEffect = () => {
        setTypingEffectEnd(true)
    }

    return (
        <StyledSection onClick={onClickToEndTypingEffect}>
            <StyledContainer text={ABOUT_TEXT}>
                {!typingEffectEnd && isDesktop && triggerAnimation && (
                    <Typewriter
                        onInit={typewriter => {
                            typewriter.typeString().callFunction(() => {
                                setTypingEffectEnd(true)
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
                {!isDesktop && <AboutStatic triggerAnimation={triggerAnimation} />}
                {typingEffectEnd && isDesktop && <AboutStatic />}
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
