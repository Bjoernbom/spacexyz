import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

const Screen = styled.View`
  flex-grow: 1;
  padding: 20px;
  background-color: ${props => props.theme.screenBackgrounds.primary};
`;

const Content = styled.View`
  position: absolute;
  top: 50%;
  left: 45%;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
`;

export default function CoolStuffScreen() {
  return (
    <Screen>
      <Content>
        <Header>Cool Stuff</Header>
      </Content>
    </Screen>
  );
}
