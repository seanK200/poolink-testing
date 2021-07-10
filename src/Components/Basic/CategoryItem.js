import React from 'react'
import styled from 'styled-components'

export default function CategoryItem({ color, bgColor, children }) {
  return (
    <StyledCategoryItem color={color} bgColor={bgColor}>
      {children}
    </StyledCategoryItem>
  )
}

const StyledCategoryItem = styled.div`
  border-radius: 16px;
  padding: 2px 13px;
  color: ${props => props.color};
  background-color: ${props => props.bgColor};
  font-family: Pretendard;
  font-weight: 600;
  font-size: 0.75em;
`;