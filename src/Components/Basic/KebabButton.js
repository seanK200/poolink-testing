import React from 'react'
import styled from 'styled-components'

export default function KebabButton(props) {
  return (
    <StyledKebabButton {...props}>
      <img 
        src={process.env.PUBLIC_URL + '/assets/Kebab.svg'}
      />
    </StyledKebabButton>
    
  )
}

const StyledKebabButton = styled.div`
  width: 16px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  & svg {
    fill: #BEBEBE;
    stroke: white;
    stroke-width: 0.2;
    cursor: pointer;
  }
  &:hover svg {
    fill: black;
  }
`;

// const KebabMenuContainer = styled.div`
//   position: absolute;
//   display: flex;
//   flex-direction: column;
//   background: white;
//   flex-shrink: 0;
//   right: 0;
//   top: 16px;
//   border: 1px solid black;
// `;

// const KebabMenuItem = styled.div`
//   flex-shrink: 0;
//   width: 100%;
//   margin: 0;
//   padding: 5px 10px;
//   font-family: Pretendard;
//   font-weight: 400;
//   color: black;
// `;