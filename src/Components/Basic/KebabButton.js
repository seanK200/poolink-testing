import React from 'react'
import styled from 'styled-components'

export default function KebabButton(props) {
  return (
    <StyledKebabButton {...props}>
      <svg width="3" height="13" viewBox="0 0 3 13"  xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M2.9 11.5C2.9 11.8713 2.7525 12.2274 2.48995 12.4899C2.2274 12.7525 1.8713 12.9 1.5 12.9C1.1287 12.9 0.772601 12.7525 0.51005 12.4899C0.247499 12.2274 0.1 11.8713 0.1 11.5C0.1 11.1287 0.247499 10.7726 0.51005 10.5101C0.772601 10.2475 1.1287 10.1 1.5 10.1C1.8713 10.1 2.2274 10.2475 2.48995 10.5101C2.7525 10.7726 2.9 11.1287 2.9 11.5ZM2.9 6.5C2.9 6.8713 2.7525 7.2274 2.48995 7.48995C2.2274 7.7525 1.8713 7.9 1.5 7.9C1.1287 7.9 0.772601 7.7525 0.51005 7.48995C0.247499 7.2274 0.1 6.8713 0.1 6.5C0.1 6.1287 0.247499 5.7726 0.51005 5.51005C0.772601 5.2475 1.1287 5.1 1.5 5.1C1.8713 5.1 2.2274 5.2475 2.48995 5.51005C2.7525 5.7726 2.9 6.1287 2.9 6.5ZM2.9 1.5C2.9 1.8713 2.7525 2.2274 2.48995 2.48995C2.2274 2.7525 1.8713 2.9 1.5 2.9C1.1287 2.9 0.772601 2.7525 0.51005 2.48995C0.247499 2.2274 0.1 1.8713 0.1 1.5C0.1 1.1287 0.247499 0.772601 0.51005 0.510051C0.772601 0.2475 1.1287 0.1 1.5 0.1C1.8713 0.1 2.2274 0.2475 2.48995 0.510051C2.7525 0.772601 2.9 1.1287 2.9 1.5Z" 
        />
      </svg>
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

const KebabMenuContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: white;
  flex-shrink: 0;
  right: 0;
  top: 16px;
  border: 1px solid black;
`;

const KebabMenuItem = styled.div`
  flex-shrink: 0;
  width: 100%;
  margin: 0;
  padding: 5px 10px;
  font-family: Pretendard;
  font-weight: 400;
  color: black;
`;