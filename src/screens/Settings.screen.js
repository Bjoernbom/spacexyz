import React from 'react';
import DarkThemeToggle from '../services/theme/DarkThemeToggle';
import styled from 'styled-components/native';

const Screen = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.screenBackgrounds.primary};
  alignitems: center;
`;

const Content = styled.View`
  position: absolute;
  alignitems: center;
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
