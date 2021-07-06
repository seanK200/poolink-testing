import React from 'react'
import styled from 'styled-components';
import CategoryItem from '../Basic/CategoryItem';
import CopyButton from '../Basic/CopyButton';
import GotoButton from '../Basic/GotoButton';
import KebabButton from '../Basic/KebabButton';
import LargeButton from '../Basic/LargeButton';

const linkInfo = {
  label: '네이버: 세상의 모든 검색, 네이버',
  url: 'https://www.naver.com',
  favicon: process.env.PUBLIC_URL + '/images/LinkItem/favicon.ico',
  thumbnail: process.env.PUBLIC_URL + '/images/LinkItem/LinkThumbnail.png'
}

function getDomainName(url) {
  let domainName = url;
  if (domainName.includes('://')) domainName = domainName.split('://')[1];
  if (domainName.includes('/')) domainName = domainName.split('/')[0];
  return domainName;
}

const boardInfo = {
  name: '검색 모음',
  category: [
    {
      label: '검색',
      color: '#F58B29',
      bgColor: '#FFE6C1'
    },
    {
      label: '사이트',
      color: '#A89D32',
      bgColor: '#FDF7C1'
    }
  ]
}

export default function LinkItem() {
  return (
    <StyledLinkItem>
      <Thumbnail src={ linkInfo.thumbnail }/>
      <FloatingControls className="floating-controls">
        <CopyButton className="copy-button" text={linkInfo.url} onCopy={()=> { alert("주소가 클립보드로 복사되었습니다.") }}/>
      </FloatingControls>
      <LinkInfo>
        <Favicon src={ linkInfo.favicon }/>
        <LinkText>
          <LinkLabel href={linkInfo.url}>{linkInfo.label}</LinkLabel>
          <LinkURL href={linkInfo.url}>{getDomainName(linkInfo.url)}</LinkURL>
        </LinkText>
        <KebabButton />
      </LinkInfo>
      {boardInfo ? <BoardInfo boardInfo={boardInfo} /> : ''}
    </StyledLinkItem>
  )
}

function BoardInfo({boardInfo}) {
  return (
    <StyledBoardInfo>
      <DividerLine>
        <CategoryContainer>
          {boardInfo.category.map( c => <CategoryItem color={c.color} bgColor={c.bgColor}>{c.label}</CategoryItem>)}
        </CategoryContainer>
        <BoardLink>
          <BoardName>{boardInfo.name}</BoardName>
          <GotoButton />
        </BoardLink>
      </DividerLine>
    </StyledBoardInfo>
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
  padding: 16px 12px;
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

const LinkLabel = styled.a`
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

const StyledBoardInfo = styled.div`
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
  overflow: scroll;
  display: flex;
  flex-grow: 1;
  & div {
    flex-shrink: 0;
    margin-right: 8px;
  }
`;

const BoardLink = styled.div`
  display: flex;
  flex-shrink: 0;
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
