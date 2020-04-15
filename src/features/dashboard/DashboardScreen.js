import React from 'react';
import styled from 'styled-components/native';
import ListingCard from '../../components/ListingCard';
import {SharedElement} from 'react-native-shared-element';
import {SCREEN_NAMES} from '../../app/constants';

const Screen = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.backgrounds.primary};
`;

const Content = styled.View`
  margin-top: 20;
  align-content: center;
  flex: 1;
`;

const Header = styled.Text`
  padding-top: 60;
  align-self: center;
  color: ${props => props.theme.text.primary};
`;

export default function DashboardScreen({navigation}) {
  return (
    <Screen>
      <Header>DashboardScreen</Header>
      <Content>
        <SharedElement>
          <ListingCard
            onPress={() => navigation.navigate(SCREEN_NAMES.DETAILED_LISTING)}
          />
        </SharedElement>
      </Content>
    </Screen>
  );
}
