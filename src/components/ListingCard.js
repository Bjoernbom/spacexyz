import React from 'react';
import styled from 'styled-components/native';
import {SharedElement} from 'react-navigation-shared-element';

const src = '../assets/spacex.jpg';

const Content = styled.TouchableOpacity`
  background-color: ${props => props.theme.backgrounds.secondary};
  height: 400;
  margin-right: 10;
  margin-left: 10;
  padding-bottom: 20;
  margin-bottom: 20;
  border-radius: 7;
`;

const HeaderImage = styled.Image`
  height: 180;
  width: 390;
  overflow: hidden;
  overflow: hidden;
  align-self: center;
`;

const TextWrapper = styled.View`
  margin: 10px;
  align-items: flex-start;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
  font-size: 24px;
  align-self: flex-start;
`;

const Label = styled.Text`
  align-self: flex-start;
  margin-top: 6px;
  color: ${props => props.theme.text.primary};
  font-size: 16px;
  overflow: hidden;
`;

export default function ListingCard({onPress}) {
  return (
    <Content onPress={onPress}>
      <SharedElement id="image">
        <HeaderImage source={require(src)} />
      </SharedElement>
      <TextWrapper>
        <SharedElement id="header">
          <Header>Mission Name</Header>
        </SharedElement>
        <Label>Datum</Label>
        <Label>Flown before</Label>
        <Label>Landing site</Label>
        <Label>Mission</Label>
      </TextWrapper>
    </Content>
  );
}
