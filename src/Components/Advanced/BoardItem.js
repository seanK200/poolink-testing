import React from 'react'
import styled from 'styled-components'
import CopyButton from '../Basic/CopyButton'

export default function BoardItem() {
  return (
    <StyledBoardItem>
      <Thumbnail />
      <BoardInfo>
        <BoardNameContainer>
          <BoardName>호캉스 계획</BoardName>
          <ButtonContainer>
            <CopyButton />
            <KebabButton>
              <img src={process.env.PUBLIC_URL + '/assets/Kebab.svg'} />
            </KebabButton>
          </ButtonContainer>
        </BoardNameContainer>
      </BoardInfo>
    </StyledBoardItem>
  )
}

const StyledBoardItem = styled.div`
  width: 488px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(97, 131, 190, 0.3);
  background: white;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease;
  display: flex;
  flex-direction: row;
  &:hover {
    box-shadow: 0px 0px 10px rgba(97, 131, 190, 0.8);
  }
`

const Thumbnail = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: blue;
`

const BoardInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const BoardNameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const BoardName = styled.div`
  font-size: 1.5em;
  font-family: Pretendard;
  font-weight: 700;
  &:hover {
    text-decoration: underline;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const KebabButton = styled.div`
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
`