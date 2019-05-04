import React from 'react';
import styled from 'styled-components'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const S_Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid lightgrey;
  width: 100%;
  height: 120px;
  margin-top: 44px;
  padding-bottom: 15px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const S_HeaderSpan = styled.span`
  align-self: flex-end;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  
  ${props => (props.type === 'date' ? `margin-left: 25px; flex: 1;` : null)}
  ${props => (props.type === 'temp' ? `text-align: right; margin-right: 25px; flex: 1;` : null)}
  `;

const S_HeaderH1 = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;`;



const Header = () => {
  return (
    <S_Header>
      <S_HeaderSpan type="date">MARCH 30, 2018</S_HeaderSpan>
      <S_HeaderH1>Lambda Times</S_HeaderH1>
      <S_HeaderSpan type="temp">98°</S_HeaderSpan>
    </S_Header>
  )
}

export default Header