import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import { Container, Content, Card, CardContent, CardHeader, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#ccc" />
            <Icon name="visibility-off" size={28} color="#ccc" />
          </CardHeader>
          <CardContent>
            <Title>Saldão disponível</Title>
            <Description>R$ 1.000.000,99</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 500.000 recebida de Marcos hoje às 8h.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
