import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons'

import {Container, TabsContainer, TabsItem, TabText} from './styles'

export default function Tabs({ translateY }){
    return(
        <Container style={{
            transform: [{
                translateY: translateY.interpolate({
                    inputRange: [0,300],
                    outputRange: [0,30],
                    extrapolate: 'clamp'
                })
            }],
            opacity: translateY.interpolate({
              inputRange: [0,300],
              outputRange: [1,0.4],
              extrapolate: 'clamp',
            })
          }}>
            <TabsContainer>
                <TabsItem>
                    <Icon name="person-add" size={24} color="#fff"/>
                    <TabText>Indicar amigos</TabText>
                </TabsItem>
                <TabsItem>
                    <Icon name="chat-bubble-outline" size={24} color="#fff"/>
                    <TabText>Suporte</TabText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-downward" size={24} color="#fff"/>
                    <TabText>Depositar</TabText>
                </TabsItem>
                <TabsItem>
                    <Icon name="arrow-upward" size={24} color="#fff"/>
                    <TabText>Transferir</TabText>
                </TabsItem>
                <TabsItem>
                    <Icon name="lock" size={24} color="#fff"/>
                    <TabText>Bloquear</TabText>
                </TabsItem>
            </TabsContainer>
        </Container>
    )
}