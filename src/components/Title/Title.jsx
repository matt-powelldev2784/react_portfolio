import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { Background } from './Background'
import { TitleLogo } from './TitleLogo'
import { TitleLine } from './TitleLine'
import { NeonArrow } from '../ui/custom/NeonArrow'

export const Title = ({ scrollToComponent }) => {
    const { theme } = React.useContext(ThemeContext)
    const { TITLE_BG, TITLE_H1, TITLE_H2 } = theme?.colors?.title

    const [lineAnimationStart, setLineAnimationStart] = useState(false)

    setTimeout(() => {
        setLineAnimationStart(true)
    }, 2500)

    return (
        <Fragment>
            <StyledSection>
                <Background />
                <StyledFlexBox cssProps={{ background: TITLE_BG }}>
                    <TitleLogo fill1={TITLE_H1} fill2={TITLE_H2} fill3={TITLE_H2} />
                    {lineAnimationStart && <TitleLine />}
                </StyledFlexBox>
                <NeonArrow char={'⏷'} onClick={scrollToComponent} />
            </StyledSection>
        </Fragment>
    )
}

const StyledSection = styled.section`
    position: relative;
    display: block;
`

const StyledFlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: ${({ background }) => background};
`
