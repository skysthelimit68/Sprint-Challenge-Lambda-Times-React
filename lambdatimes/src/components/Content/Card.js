import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const S_Card = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;`;

const S_CardHeadline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;`;

const S_CardAuthor = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;`;

const S_CardImgContainer = styled.div`
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;`;

const S_Img = styled.img`
  width: 40px;
`;

const S_CardSpan = styled.span`
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;`;

const Card = props => {
  return (
    <S_Card>
      <S_CardHeadline>{props.card.headline}</S_CardHeadline>
      <S_CardAuthor>
        <S_CardImgContainer>
          <S_Img src={props.card.img}></S_Img>
        </S_CardImgContainer>
        <S_CardSpan>By {props.card.author}</S_CardSpan>
      </S_CardAuthor>
    </S_Card>
  );
};

// Make sure to include PropTypes.

Card.propType = {
  cards : PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })
}

export default Card;
