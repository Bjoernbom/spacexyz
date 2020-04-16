import React from 'react';
import styled from 'styled-components/native';
import ListingCard from '../../components/ListingCard';
import Screen from '../../components/Screen';
import {SCREEN_NAMES} from '../../app/constants';

const Content = styled.View`
  margin-top: 80px;
  align-content: center;
  flex: 1;
`;

export default function DashboardScreen({navigation}) {
  return (
    <Screen>
      <Content>
        <ListingCard
          onPress={() => navigation.navigate(SCREEN_NAMES.DETAILED_LISTING)}
        />
      </Content>
    </Screen>
  );
}
