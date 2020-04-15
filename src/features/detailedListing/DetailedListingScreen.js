import React from 'react';
import styled from 'styled-components/native';
import BackButton from '../../navigation/BackButton';
import {SharedElement} from 'react-native-shared-element';

const Screen = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgrounds.primary};
`;

const Header = styled.Text`
  padding-top: 60;
  align-self: center;
  color: ${props => props.theme.text.primary};
`;

export default function DetailedListingScreen({navigation}) {
  return (
    <Screen>
      <Header>Detailed Listing</Header>
      <BackButton navigation={navigation} />
    </Screen>
  );
}
