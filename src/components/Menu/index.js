import React from 'react'

import QRCode from 'react-native-qrcode-svg';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles'

export default function Menu(){
    return (
        <Container>
            <Code>
                <QRCode 
                    value="https://insejecsjc.com.br"
                    size={80}
                    backgroundColor="#8b10ae"
                    color="#fff"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#fff"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#fff"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#fff"/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#fff"/>
                    <NavText>Configurar app</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>SAIR DO APP</SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}