import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const S_Tabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  
  @media (min-width: 1280px) {
    width: 1280px;
  }
  `;

const S_Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;`;

const S_Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;`;




const Tabs = props => {
  return (
    <S_Tabs>
      <S_Topics>
        <S_Title>TRENDING TOPICS:</S_Title>
        {props.tabs.map(tab => (
          <Tab
            tab={tab}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        ))
        }
      </S_Topics>
    </S_Tabs>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propType = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func
}



export default Tabs;
