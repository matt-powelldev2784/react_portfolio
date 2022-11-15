import React from 'react'
import styled from 'styled-components'
import { MenuElements } from './MenuElements'

export const MenuDesktop = () => {
    return (
        <Flexbox>
            <MenuElements />
        </Flexbox>
    )
}

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0rem auto 0.3rem auto;
    z-index: 10000;

    @media only screen and (max-width: 451px) {
        display: none;
    }

    @media only screen and (max-height: 400px) {
        display: none;
    }
`
