import React from 'react';
import styled from 'styled-components/native';
import {SharedElement} from 'react-navigation-shared-element';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';

const src = '../assets/spacex.jpg';

const Content = styled.TouchableOpacity`
  background-color: ${props => props.theme.backgrounds.secondary};
  height: 330;
  padding-bottom: 20;
  margin-bottom: 20;
  border-radius: 8;
  overflow: hidden;
`;

const HeaderImage = styled.Image`
  height: 180;
  width: 100%;
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

const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
`;

const ItemIcon = styled(Icon).attrs(props => ({
  color: props.theme.text.white,
}))`
  font-size: 20px;
  padding-top: 4px;
  margin-right: 10px;
`;

export default function ListingCard({onPress, data}) {
  console.log('data', data);
  const {
    missionName,
    flightNumber,
    localLaunchDate,
    hasFlewnBefore,
    willAttemptLanding,
    rocketName,
  } = data;
  const reused = hasFlewnBefore ? 'Has flewn before' : 'First flight';
  const landingIntent = willAttemptLanding
    ? 'Will attempt landing'
    : 'Will not attempt landing';
  const launchDate = Moment(localLaunchDate).format('YYYY-MM-DD');

  function IconAndLabel({icon, label}) {
    return (
      <LabelWrapper>
        <ItemIcon name={icon} />
        <Label>{label}</Label>
      </LabelWrapper>
    );
  }

  return (
    <Content onPress={onPress}>
      <SharedElement id="image">
        <HeaderImage source={require(src)} />
      </SharedElement>
      <TextWrapper>
        <Header numberOfLines={1}>{missionName}</Header>
        <IconAndLabel label={rocketName} icon="rocket" />
        <IconAndLabel label={launchDate} icon="calendar" />
        <IconAndLabel label={reused} icon="recycle" />
        <IconAndLabel  label={landingIntent} icon="road" />
      </TextWrapper>
    </Content>
  );
}
