import React from 'react'
import styled from 'styled-components';
import CategoryItem from '../Basic/CategoryItem';
import CopyButton from '../Basic/CopyButton';
import GotoButton from '../Basic/GotoButton';
import KebabButton from '../Basic/KebabButton';
import LargeButton from '../Basic/LargeButton';


export default function LinkItem() {
  return (
    <StyledLinkItem>
      <Thumbnail src={ process.env.PUBLIC_URL + '/images/LinkItem/LinkThumbnail.png' }/>
      <FloatingControls className="floating-controls">
        <CopyButton className="copy-button" text='www.naver.com' onCopy={()=> { alert("주소가 클립보드로 복사되었습니다.") }}/>
      </FloatingControls>
      <LinkInfo>
        <Favicon src={ process.env.PUBLIC_URL + '/images/LinkItem/favicon.ico' }/>
        <LinkText>
          <LinkName href="https://www.naver.com">네이버</LinkName>
          <LinkURL href="https://www.naver.com">www.naver.com</LinkURL>
        </LinkText>
        <KebabButton />
      </LinkInfo>
      <BoardInfo>
        <DividerLine>
          <CategoryContainer>
            <CategoryItem color="#F58B29" bgColor="#FFE6C1">검색</CategoryItem>
          </CategoryContainer>
          <BoardLink>
            <BoardName>여행 리스트</BoardName>
            <GotoButton />
          </BoardLink>
        </DividerLine>
      </BoardInfo>
    </StyledLinkItem>
  )
}

const StyledLinkItem = styled.div`
  width: 312px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(97, 131, 190, 0.3);
  background: white;
  padding: 0;
  cursor: pointer;
  transition: 0.3s ease;
  position: relative;

  &:hover {
    box-shadow: 0px 0px 10px rgba(97, 131, 190, 0.8);
    .floating-controls {
      opacity: 1;
    }
  }
`;

const FloatingControls = styled.div`
  opacity: 0;
  position: absolute;
  top: 130px;
  right: 12px;
  transition: 0.3s ease;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 176px;
  object-fit: cover;
  object-position: 50% 50%;
  border-radius: 10px 10px 0 0;
`;

const LinkInfo = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 -3px 3px rgba(100, 100, 100, 0.1);
  position: relative;
  z-index: 1;
`;

const Favicon = styled.img`
  width: 16px;
  height: auto;
  margin-right: 8px;
`;

const LinkText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-item: flex-start;
  flex-grow: 1;
  line-height: 1em;
`;

const LinkName = styled.a`
  font-size: 1em;
  font-family: Pretendard;
  font-weight: 700;
  margin-bottom: 2px;
  &:hover {
    text-decoration: underline;
  }
`;

const LinkURL = styled.a`
  font-size: 0.75em;
  font-family: Pretendard;
  font-weight: 400;
  color: #888888;
  &:hover {
    text-decoration: underline;
  }
`;

const BoardInfo = styled.div`
  width: 100%;
  padding: 0 12px;
`;

const DividerLine = styled.div`
  width: 100%;
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: 0.5px solid #D7D7D7
`;

const CategoryContainer = styled.div`
  flex-grow: 1;
`;

const BoardLink = styled.div`
  display: flex;
  flex-shrink: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  border-radius: 5px;
  &:hover {
    background-color: #EFEFEF;
  }
`;

const BoardName = styled.div`
  margin-right: 5px;
  font-family: Pretendard;
  font-weight: 600;
  color: #747474;
  font-size: 0.75em;
`;
