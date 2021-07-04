import React from 'react'
import styled from 'styled-components'

export default function Renderer({ component, bg }) {
  const StyledRenderer = styled.div`
    background: ${ bg ? bg : 'white' };
    padding: 30px 20px;
    margin: 30px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <StyledRenderer>
      {component}
    </StyledRenderer>
  )
}