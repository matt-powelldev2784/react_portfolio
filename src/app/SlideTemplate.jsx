import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { ThemeContext } from './App'
import { FullPageSection } from '../components/ui/standard/FullPageSection'
import { NeonArrow } from '../components/ui/custom/NeonArrow'
import { BlocksLeft } from '../components/ui/custom/BlocksLeft'
import { BlocksRight } from '../components/ui/custom/BlocksRight'

const Slide = ({ scrollToComponent, pageInfo, triggerAnimation, children }, ref) => {
    const { theme } = React.useContext(ThemeContext)
    const { themeLetter } = pageInfo
    const { THEME_BLOCK_FG, THEME_BLOCK_BG, THEME_BG } = theme?.colors?.[themeLetter]
    const { blocksRight, blocksLeft } = pageInfo.blocksImage

    return (
        <StyledSection ref={ref}>
            <FullPageSection cssProps={{ background: THEME_BG }}>
                {children}
                {blocksRight && <BlocksRight fill4={THEME_BLOCK_FG} fill5={THEME_BLOCK_BG} />}
                {blocksLeft && <BlocksLeft fill6={THEME_BLOCK_FG} fill7={THEME_BLOCK_BG} />}
                <NeonArrow char={'❮'} rotateDeg={'-90'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
            </FullPageSection>
        </StyledSection>
    )
}

export const SlideTemplate = forwardRef(Slide)

const StyledSection = styled.section``
