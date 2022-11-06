import React, { Fragment, useState, forwardRef } from 'react'
import { useSwipeable } from 'react-swipeable'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'
import { Background } from './Title_Background'
import { TitleLogo } from './TitleLogo'
import { TitleLine } from './TitleLine'
import { NeonText } from '../ui/NeonText'
import backgroundImage from '../../img/background_blocks.svg'

const Title = ({ scrollToComponent, triggerAnimation }, ref) => {
    const { theme, isDesktop } = React.useContext(ThemeContext)
    const { TITLE_BG, TITLE_H1, TITLE_H2 } = theme?.colors?.title

    const [lineAnimationStart, setLineAnimationStart] = useState(false)

    const swipeHandlers = useSwipeable({
        onSwipedUp: eventData => scrollToComponent()
    })

    setTimeout(() => {
        setLineAnimationStart(true)
    }, 2500)

    return (
        <Fragment>
            <StyledSection {...swipeHandlers}>
                <Background backgroundImage={backgroundImage} />
                <StyledFlexBox background={TITLE_BG} ref={ref}>
                    <TitleLogo fill1={TITLE_H1} fill2={TITLE_H2} fill3={TITLE_H2} />
                    {lineAnimationStart && <TitleLine />}
                </StyledFlexBox>
                {isDesktop && <NeonText char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />}
            </StyledSection>
        </Fragment>
    )
}

export const TitleForwardRef = forwardRef(Title)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    overflow: hidden;
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
