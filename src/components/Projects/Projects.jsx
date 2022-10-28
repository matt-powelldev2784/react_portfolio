import React from 'react'
import styled from 'styled-components'
import { FullPageSection } from '../ui/standard/FullPageSection'
import { FlipCard } from '../Projects/Card/FlipCard'

export const Projects = () => {
    return (
        <StyledSection>
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
        </StyledSection>
    )
}

const StyledSection = styled.section`
    position: relative;
    display: block;
    width: 100vw;
    text-align: center;
`

const StyledFlexBox = styled.div`
    display: flex;
    min-height: 100vh;
    text-align: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0rem auto 0rem auto;
    background: blue;

    @media (max-device-width: 440px) {
    }
`

const StyledFlexItem = styled.div`
    display: block;
    padding: 1rem;
`
