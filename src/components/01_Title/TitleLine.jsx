import React from 'react'
import styled from 'styled-components'

export const TitleLine = () => (
    <StyledFlexItem>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x={0} y={0} viewBox="0 0 583.94 141.73" xmlSpace="preserve">
            <style>
                {
                    '@keyframes CiYOjQiP_draw{to{stroke-dashoffset:0}}@keyframes CiYOjQiP_fade{0%,94.44444444444444%{stroke-opacity:1}to{stroke-opacity:0}}'
                }
            </style>
            <path
                d="M7.5 132h569.05"
                style={{
                    strokeDasharray: '570 572',
                    strokeDashoffset: 571,
                    animation: 'CiYOjQiP_draw 2000ms linear 0ms forwards',
                    fill: 'none',
                    stroke: '#802bb1',
                    strokeWidth: 2,
                    strokeMiterlimit: 10
                }}
            />
        </svg>
    </StyledFlexItem>
)

const StyledFlexItem = styled.div`
    position: absolute;
    display: block;
    margin: auto;
    width: calc(72vw + 5rem);
    background: ${({ background }) => background};
`
