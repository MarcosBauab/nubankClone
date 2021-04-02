import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import { Container, Content, Card, CardContent, CardHeader, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY : translateY,
        }
      }
    ],
    { useNativeDriver: true }
  )

  function onHandlerStateChanged(event){
    //QUANDO O USUÁRIO FINALIZOU A ANIMAÇÃO
    if (event.nativeEvent.oldState === State.ACTIVE){
      let opened = false
      const {translationY} = event.nativeEvent
      offset += translationY

      if (translationY >= 100){
        opened = true        
      } else {
        translateY.setOffset(0)
        translateY.setValue(offset)
        offset = 0
      }

      Animated.timing(translateY, {
        toValue: opened ? 350 : 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 350 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu translateY={translateY}/>

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Card style={{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350,0,350],
                outputRange: [-50,0,350],
                extrapolate: 'clamp',
              }),
            }]
          }}>
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
        </PanGestureHandler>
      </Content>
      <Tabs translateY= {translateY} />
    </Container>
  );
}
