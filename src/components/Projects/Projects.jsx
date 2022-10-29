import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { FlipCard } from '../Projects/Card/FlipCard'
import { NeonArrow } from '../ui/custom/NeonArrow'

const Projects = ({ scrollToComponent, triggerAnimation }, ref) => {
    return (
        <StyledSection ref={ref}>
            <StyledFlexBox>
                <StyledFlexItem>
                    <FlipCard />
                </StyledFlexItem>
                <StyledFlexItem>
                    <FlipCard />
                </StyledFlexItem>
                <StyledFlexItem>
                    <FlipCard />
                </StyledFlexItem>
            </StyledFlexBox>
            <NeonArrow char={'⏷'} onClick={scrollToComponent} triggerAnimation={triggerAnimation} />
        </StyledSection>
    )
}

export const ProjectsForwardRef = forwardRef(Projects)

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
`

const StyledFlexBox = styled.div`
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 4rem;
    background: blue;

    @media (max-device-width: 440px) {
        width: 100vw;
        padding: 0rem;
    }
`

const StyledFlexItem = styled.div`
    display: block;
    padding: 1rem;
    min-width: 26rem;

    @media (max-device-width: 440px) {
        width: 100vw;
        min-width: 100vw;
        padding: 2rem 0rem 2rem 0rem;
    }
`
