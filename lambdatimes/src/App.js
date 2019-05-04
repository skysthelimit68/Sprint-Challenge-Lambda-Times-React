import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import LoginPrompt from './components/Login/LoginPrompt';
import withAuthenticate from './authentication/withAuthenticate';
import styled from 'styled-components'




const S_App = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #f1f1f1;
  color: #333;
  font-family: 'PT Sans', sans-serif;
  height:100vh;
  `;

let ComponentWithAuthentication = withAuthenticate(Content)(LoginPrompt)  

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
  }

  updateLoginStatus = status => {
    this.setState({
      isLoggedIn : status
    })
  }

  render() {
    return (
    <S_App>
      <TopBar updateLoginStatus = {this.updateLoginStatus} />
      <Header />
      <ComponentWithAuthentication />
    </S_App>
  );
  }
}


export default App;
