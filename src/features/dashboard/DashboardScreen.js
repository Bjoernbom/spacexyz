import React, {useState} from 'react';
import styled from 'styled-components/native';
import ListingCard from '../../components/ListingCard';
import Screen from '../../components/Screen';
import {SCREEN_NAMES} from '../../app/constants';
import {dashboardData} from '../../api/mock';
import UpcomingLaunchComponent from '../../components/UpcomingLaunch';

const TopContent = styled.View`
  margin-top: 60px;
`;
const Content = styled.ScrollView``;

const Space = styled.View`
  height: 20px;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
  margin-bottom: 10px;
  font-size: 22;
`;

export default function DashboardScreen({navigation}) {

  return (
    <Screen>
      <TopContent>
        <Header>Dashboard</Header>
        <UpcomingLaunchComponent />
      </TopContent>
      <Content>
        <ListingCard
          data={dashboardData}
          onPress={() => navigation.navigate(SCREEN_NAMES.DETAILED_LISTING)}
        />
      </Content>
    </Screen>
  );
}
