import React from 'react'
import styled from 'styled-components'

export default function LargeButton({ props, children }) {
  return (
    <StyledLargeButton {...props}>{children}</StyledLargeButton>
  )
}

const StyledLargeButton = styled.button`
  background-color: #3D81F5;
  color: white;
  font-size: 0.75em;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px 15px;
  border: none;
`;
