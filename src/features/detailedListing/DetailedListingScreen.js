import React, {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import BackButton from '../../navigation/BackButton';
import {SharedElement} from 'react-navigation-shared-element';
import {dashboardData} from '../../api/mock';
import styled from 'styled-components/native';
const src = '../../assets/spacex.jpg';

const screenHeight = Dimensions.get('window').height;
const HEADER_SCROLL_DISTANCE = screenHeight / 3;

const Screen = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgrounds.primary};
`;
const Content = styled.View`
  height: 100%;
  background-color: ${props => props.theme.backgrounds.primary};
`;
const ScrollContainer = styled.ScrollView`
  height: 100%;
`;

const HeaderImage = styled.Image`
  height: 400;
  width: 100%;
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

const Description = styled.Text`
  align-self: flex-start;
  margin-top: 6px;
  color: ${props => props.theme.text.primary};
  font-size: 16px;
  overflow: hidden;
`;

const Reg = styled.Text`
  margin-top: 6px;
  font-size: 16px;
  color: ${props => props.theme.text.primary};
`;

function DetailedListingScreen({navigation}) {
  const [scrollY] = useState(new Animated.Value(0));
  const {missionName, flightNumber, hasFlewnBefore} = dashboardData;
  const reused = hasFlewnBefore ? 'Has flewn before' : 'First flight';

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  return (
    <Screen>
      <ScrollContainer
        scrollEventThrottle={2}
        stickyHeaderIndices={[1]}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}>
        <Content>
          <Animated.View
            style={{
              opacity: imageOpacity,
            }}>
            <BackButton navigation={navigation} />
            <SharedElement id="image">
              <HeaderImage source={require(src)} />
            </SharedElement>
          </Animated.View>
          <TextWrapper>
            <Header>{missionName}</Header>
            <Description>
              Raketer är coool! Raketer är coool! Raketer är coool! Raketer är
              coool! Raketer är coool!
            </Description>
            <Reg>Raketnamn</Reg>
            <Reg>2020-13-37</Reg>
            <Reg>Landningplats</Reg>
          </TextWrapper>
        </Content>
      </ScrollContainer>
    </Screen>
  );
}

DetailedListingScreen.sharedElements = () => {
  return ['image'];
};

export default DetailedListingScreen;
