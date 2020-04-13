import React from 'react';
import {Text} from 'react-native';
import DarkThemeToggle from '../services/theme/DarkThemeToggle';
import styled from 'styled-components/native';

const Screen = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.screenBackgrounds.primary};
  alignItems: center;
`;

const Content = styled.View`
  position: absolute;
  alignItems: center;
  top: 50%;
  left: 45%;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
`;

export default function SettingsScreen() {
  return (
    <Screen>
      <Content>
        <Header>Press to toggle theme></Header>
        <DarkThemeToggle />
      </Content>
    </Screen>
  );
}
