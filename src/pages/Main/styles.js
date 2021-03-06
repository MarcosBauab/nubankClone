import { Animated } from 'react-native'
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #8B10AE;
`;

export const Content = styled.View`
    flex: 1;
    max-height: 400px;
    z-index: 5;
`

export const Card = styled(Animated.View)`
    flex: 1;
    height:100%;
    background-color: #fff;
    border-radius:4px;
    margin: 0 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`

export const CardContent = styled.View`
    flex: 1;
    padding: 0 30px;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: 13px;
    color: #ccc;
`

export const Description = styled.Text`
    font-size: 32px;
    margin-top: 3px;
    color: #333;
`

export const CardFooter = styled.View`
    padding: 30px;
    background: #eee;
    border-radius: 4px;
`

export const Annotation = styled.Text`
    font-size:12px;
    color: #333;
`

