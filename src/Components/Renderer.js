import React from 'react'
import styled from 'styled-components'

export default function Renderer(props) {
  return (
    <StyledRenderer {...props}>
      {props.component ? props.component : props.children}
    </StyledRenderer>
  )
}

const getColor = (value) => {
  if (value[0] === '#') return value;
  switch(value) {
    case 'pl-lightblue':
      return '#EEF4FF';
    default:
      return value;
  }
}

const StyledRenderer = styled.div`
  background: ${props => (props.bg ? getColor(props.bg) : '#FFFFFF')};
  box-shadow: ${props => (props.noshadow ? '' : '0 0 5px rgba(0, 0, 0, 0.1)')};
  padding: 30px 20px;
  margin: 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;