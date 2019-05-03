import React from 'react';
import styled from 'styled-components'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const S_TopBar=styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const S_TopBarContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const S_TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  `;

const S_TopBarContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const S_TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
  `;

const S_TopBarContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const S_TopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  `;

  const S_TopBarContainerRightSpan = styled.span`
  cursor: pointer;
  `;

const TopBar = () => {
  return (
    <S_TopBar>
      <S_TopBarContainer>
        <S_TopBarContainerLeft>
          <S_TopBarContainerLeftSpan>TOPICS</S_TopBarContainerLeftSpan><S_TopBarContainerLeftSpan>SEARCH</S_TopBarContainerLeftSpan>
        </S_TopBarContainerLeft>
        <S_TopBarContainerCenter>
          <S_TopBarContainerCenterSpan>GENERAL</S_TopBarContainerCenterSpan>
          <S_TopBarContainerCenterSpan>BROWNBAG</S_TopBarContainerCenterSpan>
          <S_TopBarContainerCenterSpan>RANDOM</S_TopBarContainerCenterSpan>
          <S_TopBarContainerCenterSpan>MUSIC</S_TopBarContainerCenterSpan>
          <S_TopBarContainerCenterSpan>ANNOUNCEMENTS</S_TopBarContainerCenterSpan>
        </S_TopBarContainerCenter>
        <S_TopBarContainerRight>
          <S_TopBarContainerRightSpan>LOG IN</S_TopBarContainerRightSpan>
        </S_TopBarContainerRight>
      </S_TopBarContainer>
    </S_TopBar>
  )
}

export default TopBar;