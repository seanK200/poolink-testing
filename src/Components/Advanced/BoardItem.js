import React, { useState } from 'react';
import styled from 'styled-components';
import CopyButton from '../Basic/CopyButton';
import CategoryItem from '../Basic/CategoryItem';

const initialRecentLinkList = [
    {
      favicon: process.env.PUBLIC_URL + '/images/BoardItem/favicon1.png',
      label: '노보텔 엠베서더 용산 529,500원',
      url: 'https://www.ambatel.com/novotel/yongsan/ko/main.do'
    },
    {
      favicon: process.env.PUBLIC_URL + '/images/BoardItem/favicon2.png',
      label: '롯데시티호텔 명동 102,000원',
      url: 'https://www.lottehotel.com/myeongdong-city/ko.html'
    },
    {
      favicon: process.env.PUBLIC_URL + '/images/BoardItem/favicon3.png',
      label: '부산 관광명소 BEST 10',
      url: 'https://www.tripadvisor.co.kr/Attractions-g297884-Activities-Busan.html'
    }
  ]

const initialBoardInfo = {
  boardName: '호캉스 계획',
  thumbnail: process.env.PUBLIC_URL + '/images/BoardItem/BoardImage.png',
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

export default function BoardItem() {
  const [linkInfo, ] = useState(initialRecentLinkList);
  // const [boardInfo, ] = useState(initialboardInfo);

  return (
    <StyledBoardItem>
      <Thumbnail src={initialBoardInfo.thumbnail}/>
      <BoardInfo>
        <BoardNameContainer>
          <BoardName>{initialBoardInfo.boardName}</BoardName>
          <ButtonContainer>
            <CopyButton bgcolor="#FFFFFF" />
            <KebabButton>
              <img src={process.env.PUBLIC_URL + '/assets/Kebab.svg'} />
            </KebabButton>
          </ButtonContainer>
        </BoardNameContainer>
        <RecentLinkList>
          {initialRecentLinkList.map ((l,idx) => ( 
            <LinkInfo key={idx}>
              <Favicon src={l.favicon} />
              <LinkLabel href={l.url} >
                {l.label}
              </LinkLabel>
            </LinkInfo> 
          ))}
        </RecentLinkList>
        <DividerLine>
          {initialBoardInfo.category.map( (c, idx) => <CategoryItem key={idx} color={c.color} bgColor={c.bgColor}>{c.label}</CategoryItem>)}
        </DividerLine>
      </BoardInfo>
    </StyledBoardItem>
  )
}

const StyledBoardItem = styled.div`
  width: 488px;
  height: 200px;
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

const Thumbnail = styled.img`
  width: 200px;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background-color: #D6F3F5;
`

const BoardInfo = styled.div`
  width: 288px;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 14px 16px 0 16px;
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
  margin: 0 0 20px 0;
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

const RecentLinkList = styled.div`

`

const LinkInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 5px 0;
`

const Favicon = styled.img`
  width: 14px;
  height: 14px;
  margin: 3px 8px 0 3px;
`

const LinkLabel = styled.a`
  font-size: 0.75em;
  font-family: Pretendard;
  font-weight: 400;
  color: #A5A5A5;
  &:hover {
    text-decoration: underline;
  }
`

const DividerLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-top: 0.5px solid #D7D7D7;
  overflow-x: scroll;
  ::-webkit-scrollbar {
  display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  & div {
    flex-shrink: 0;
    margin-right: 8px;
  }
  margin: 10px 0 0 0;
  padding: 14px 0 0 0;
`;