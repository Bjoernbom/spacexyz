/* eslint-disable react-hooks/exhaustive-deps */
import React, {useRef, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
import tz from 'moment-timezone';
import CountDown from '../components/CountDown';
const src = '../assets/header_night_2.jpg';

const Wrapper = styled.View`
  width: 100%;
  flex-basis: 160;
  overflow: hidden;
  border-radius: 8;
  align-self: center;
  justify-content: center;
  flex-direction: column;
`;

const TextContainer = styled.View`
  flex-direction: column;
  margin: 15px;
  z-index: 10;
  position: absolute;
  align-self: center;
  justify-content: center;
  top: 0;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-self: center;
`;

const Title = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 24px;
  color: ${props => props.theme.text.white};
`;

const MissionTitle = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 16px;
  color: ${props => props.theme.text.white};
`;

const Countdown = styled.Text`
  justify-content: center;
  align-self: center;
  font-size: 18px;
  color: ${props => props.theme.text.white};
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const ItemIcon = styled(Icon).attrs(props => ({
  color: props.theme.text.white,
}))`
  font-size: 18px;
  align-self: center;
  justify-content: center;
  margin-right: 6px;
`;

const CountdownContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

export default function UpcomingLaunchComponent() {
  function CountdownStuff() {
    const launchMoment = Moment('2020-08-01T07:43:01.065Z')
      .utc(true)
      .unix();
    const toSeconds = Moment.duration(launchMoment).asSeconds();

    return (
      <CountdownContainer>
        <CountDown
          size={22}
          until={toSeconds}
          digitStyle={{backgroundColor: '#222222'}}
          digitTxtStyle={{color: '#ffffff'}}
          timeLabelStyle={{color: '#ffffff'}}
        />
      </CountdownContainer>
    );
  }

  return (
    <Wrapper>
      <TextContainer>
        <TitleWrapper>
          <ItemIcon name="info" />
          <Title>Time until next Launch</Title>
        </TitleWrapper>
        <MissionTitle>CRS-III</MissionTitle>
        <CountdownStuff />
      </TextContainer>
      <HeaderImage source={require(src)} reziseMode="stretch" />
    </Wrapper>
  );
}
