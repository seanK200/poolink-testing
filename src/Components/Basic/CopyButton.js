import React from 'react'
import styled from 'styled-components'

export default function CopyButton(props) {
  return (
    <StyledCopyButton {...props}>
      <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M13.8871 5.54795C14.3784 5.54795 14.75 5.97278 14.75 6.50208V19.2122C14.75 19.7485 14.3658 20.1663 13.8871 20.1663H5.37728C4.89227 20.1663 4.51434 19.7485 4.51434 19.2122V15.4514H1.11295C0.621634 15.4514 0.25 15.0335 0.25 14.4973V1.78714C0.25 1.21605 0.665726 0.902652 1.03106 0.833008H9.62272C10.1077 0.833008 10.4857 1.25088 10.4857 1.78714V5.54795H13.8871ZM1.95069 13.571H4.51434V6.50904C4.51434 5.99367 4.87967 5.63152 5.2702 5.55491H8.78497V2.74823H1.95069V13.571ZM13.0493 7.43531H6.21503V18.2581H13.0493V7.43531Z" 
        />
      </svg>
    </StyledCopyButton>
  )
}

const StyledCopyButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 5px;
  background-color: #EBEBEB;
  padding: 4px 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    fill: #BEBEBE;
    transition: 0.3s ease;
  }
  &:hover {
    background-color: #DBDBDB;
    & svg {
      fill: #AEAEAE;
    }
  }
`;