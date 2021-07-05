import React from 'react'
import styled from 'styled-components'

export default function CategoryItem({ text, color, bgColor, children }) {
  return (
    <StyledCategoryItem color={color ? color : 'gray'} bgColor={bgColor ? bgColor : 'lightgray'}>
      {text ? text : children}
    </StyledCategoryItem>
  )
}

const StyledCategoryItem = styled.div`
  border-radius: 16px;
  padding: 6px 16px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-family: Pretendard;
  font-weight: 600;
  font-size: 0.75em;
`;