import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

export default function LinkItem() {
  // const [ogData, setOgData] = useState(null);

  return (
    <StyledLinkItem>
      <Thumbnail src={ process.env.PUBLIC_URL + '/images/LinkItem/LinkThumbnail.png' }/>
      <LinkInfo>
        <Favicon src={ process.env.PUBLIC_URL + '/images/LinkItem/favicon.ico' }/>
        <LinkText>
          <LinkName>네이버</LinkName>
          <LinkURL>www.naver.com</LinkURL>
        </LinkText>
      </LinkInfo>
    </StyledLinkItem>
  )
}

const StyledLinkItem = styled.div`
  width: 312px;
  height: 240px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background: white;
  padding: 0;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 176px;
`;

const LinkInfo = styled.div`
  width: 100%;
  height: 64px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
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
`;

const LinkName = styled.div`
  font-size: 1em;
  font-family: Pretendard;
  font-weight: 700;
`;

const LinkURL = styled.div`
  font-size: 0.75em;
  font-family: Pretendard;
  font-weight: 100;
`;

