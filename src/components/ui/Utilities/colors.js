import React, { Fragment } from 'react'
import styled from 'styled-components'

export const Title = () => {
  return (
    <Fragment>
      <StyledFlexbox>
        <Colors />
      </StyledFlexbox>
    </Fragment>
  )
}

const Colors = styled.div`
  color: #802bb1;
  color: #2d283e;
  color: #564f6f;
  color: #d1d7e0;
`

const StyledFlexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;

  font-size: 8rem;
  color: #802bb1;
`
