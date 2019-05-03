import React from 'react';
import styled from 'styled-components'

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

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

class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            usernameField: "",
            passwordField: ""
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    updateInputField = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        if (this.state.usernameField !== "") {
            localStorage.setItem("user", this.state.usernameField)
        }
        this.setState({
            usernameField: "",
            passwordField: "",
            modal: false
        })
        this.props.updateLoginStatus(true);
    }

    logout = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user")
        }
        this.props.updateLoginStatus(false);
    }

    render() {

        if (!localStorage.getItem("user")) {
            return (
                <S_TopBarContainerRight>
                    <S_TopBarContainerRightSpan onClick={this.toggle}>LOG IN</S_TopBarContainerRightSpan>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Log in to gain access</ModalHeader>
                        <ModalBody>
                            <input
                                type="text"
                                onChange={this.updateInputField}
                                name="usernameField"
                                value={this.state.usernameField}
                            />
                            <input
                                type="password"
                                onChange={this.updateInputField}
                                name="passwordField"
                                value={this.state.passwordField}
                            />
                            <button onClick={this.login}></button>
                        </ModalBody>

                    </Modal>
                </S_TopBarContainerRight>
            )
        } else {
            return (
                <S_TopBarContainerRight>
                    <S_TopBarContainerRightSpan onClick={this.logout}>LOG OUT</S_TopBarContainerRightSpan>
                </S_TopBarContainerRight>
            )
        }  
    }
}

export default LoginModal;