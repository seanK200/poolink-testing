import React from 'react'
import styled from 'styled-components';
import CategoryItem from '../Basic/CategoryItem';
import CopyButton from '../Basic/CopyButton';
import GotoButton from '../Basic/GotoButton';
import KebabButton from '../Basic/KebabButton';


export default function LinkItem() {
  return (
    <StyledLinkItem>
      <Thumbnail src={ process.env.PUBLIC_URL + '/images/LinkItem/LinkThumbnail.png' }/>
      <FloatingControls className="floating-controls">
        <CopyButton className="copy-button" text='www.naver.com' onCopy={()=> { alert("주소가 클립보드로 복사되었습니다.") }}/>
      </FloatingControls>
      <LinkInfo>
        <FaviconContainer>
          <Favicon src={ process.env.PUBLIC_URL + '/images/LinkItem/favicon.ico' }/>
        </FaviconContainer>
        <LinkText>
          <LinkName href="https://www.naver.com">네이버</LinkName>
          <LinkURL href="https://www.naver.com">www.naver.com</LinkURL>
        </LinkText>
        <LinkAction>
          <KebabButton />
        </LinkAction>
      </LinkInfo>
      <BoardInfo>
        <CategoryContainer>
          <CategoryItem color="#F58B29" bgColor="#FFE6C1">검색</CategoryItem>
        </CategoryContainer>
        <BoardLink>
          <BoardName>여행 리스트</BoardName>
          <GotoButton />
        </BoardLink>
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
  overflow: hidden;
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
  top: 143px;
  right: 12px;
  transition: 0.3s ease;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 176px;
  object-fit: cover;
  object-position: 50% 0;
`;

const LinkInfo = styled.div`
  width: 100%;
  height: 64px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 -3px 3px rgba(100, 100, 100, 0.1);
  z-index: 1;
`;

const FaviconContainer = styled.div`
  width: 16px;
  height: 100%;
  margin-right: 8px;
  padding-top: 2px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Favicon = styled.img`
  width: 16px;
  height: auto;
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

const LinkAction = styled.div`
  flex-shrink: 1;
  height: 100%;
  display: flex;
  align-items: flex-start;
  padding-top: 2px;
`;

const BoardInfo = styled.div`
  width: 100%;
  border-top: 0.5px solid #D7D7D7;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CategoryContainer = styled.div`

`;

const BoardLink = styled.div`
  display: flex;
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
