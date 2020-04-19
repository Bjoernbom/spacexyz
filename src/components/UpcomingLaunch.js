import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
const src = '../assets/header.jpg';

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
  font-size: 22px;
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

export default function UpcomingLaunchComponent() {
  return (
    <Wrapper>
      <TextContainer>
        <TitleWrapper>
          <ItemIcon name="info" />
          <Title>Time to next Launch</Title>
          <MissionTitle>Crs-III</MissionTitle>
        </TitleWrapper>
        <Countdown>1 day, 13 hours and 25 seconds </Countdown>
      </TextContainer>
      <HeaderImage source={require(src)} reziseMode="stretch" />
    </Wrapper>
  );
}
