import React from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../app/App'

export const ListItem = ({ image, text, href }) => {
    const { theme } = React.useContext(ThemeContext)
    const { CONTACT_TEXT } = theme?.colors?.contact

    return (
        <StyledFlexBox>
            <StyledImgDiv>
                <StyledImg src={image} />
            </StyledImgDiv>
            <StyledTextDiv>
                <StyledA color={CONTACT_TEXT} href={href}>
                    {text}
                </StyledA>
            </StyledTextDiv>
        </StyledFlexBox>
    )
}

const StyledFlexBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
const StyledImgDiv = styled.div`
    width: 20%;
`

const StyledTextDiv = styled.div`
    width: 90%;
`

const StyledImg = styled.img`
    position: relative;
    display: inline-block;
    width: calc(3vw + 1rem);
`

const StyledA = styled.a`
    position: relative;
    display: inline-block;
    font-size: max(calc(0.7vw + 0.7rem), 1.3rem);
    white-space: nowrap;
    color: ${({ color }) => color};

    @media only screen and (max-width: 451px) {
        font-size: calc(2.5vw + 0.6rem);
    }
`
