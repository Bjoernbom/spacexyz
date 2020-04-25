import React, {useState} from 'react';
import {Animated, Dimensions} from 'react-native';
import BackButton from '../../navigation/BackButton';
import {SharedElement} from 'react-navigation-shared-element';
import {dashboardData} from '../../api/mock';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';
import Moment from 'moment';
const src = '../../assets/spacex.jpg';

const screenHeight = Dimensions.get('window').height;
const HEADER_SCROLL_DISTANCE = screenHeight / 3;

const Screen = styled.View`
  flex: 1;
  background-color: ${props => props.theme.backgrounds.primary};
`;
const Content = styled.View`
  align-self: center;
  width: 100%;
  background-color: ${props => props.theme.backgrounds.primary};
`;
const ScrollContainer = styled.ScrollView`
  height: 100%;
`;

const HeaderImage = styled.Image`
  height: 250;
  width: 100%;
  align-self: center;
`;

const TextWrapper = styled.View`
  margin: 10px;
  align-items: flex-start;
`;

const MissionHeader = styled.Text`
  color: ${props => props.theme.text.primary};
  font-size: 20px;
  align-self: center;
  text-align: center;
`;

const RocketHeader = styled.Text`
  color: ${props => props.theme.text.primary};
  font-size: 24px;
  margin-bottom: 5px;
  align-self: center;
  text-align: center;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
  font-size: 26px;
  align-self: flex-start;
  text-align: center;
`;

const LineBreak = styled.View`
  margin-top: 20px;
  margin-bottom: 5px;
  width: 100%;
  height: 0.3px;
  align-self: center;
  background-color: ${props => props.theme.borders.secondary};
`;

const Text = styled.Text`
  margin-top: 6px;
  font-size: 20px;
  color: ${props => props.theme.text.primary};
`;

const EvilIcon = styled(EvilIcons).attrs(props => ({
  color: props.theme.text.primary,
}))`
  font-size: 35px;
  margin-right: 6px;
  align-self: center;
  justify-content: center;
`;

const MaterialCommunityIcon = styled(MaterialCommunityIcons).attrs(props => ({
  color: props.theme.text.primary,
}))`
  font-size: 35px;
  margin-right: 6px;
  align-self: center;
  justify-content: center;
`;

const ContentColumn = styled.View`
  flex-direction: column;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center;
`;
const QuickInfoRow = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
`;

const Row = styled.View`
  flex-direction: row;
`;

const QuickInfo = styled.View`
  border-radius: 10;
  margin-top: -50px;
  width: 95%;
  align-self: center;
  background-color: ${props => props.theme.backgrounds.secondary};
  shadow-color: ${props => props.theme.shadows.primary};
  /* shadow-color: red; */
  shadow-opacity: 0.7;
  shadow-radius: 6;
  elevation: 1;
`;

const Space = styled.View`
  height: 20px;
`;

function DetailedListingScreen({navigation}) {
  const [scrollY] = useState(new Animated.Value(0));
  const [opacity] = useState(new Animated.Value(0));
  const {
    missionName,
    flightNumber,
    hasFlewnBefore,
    rocketName,
    rocketBlock,
    launchSiteName,
    localLaunchDate,
    landingSite,
    orbit,
  } = dashboardData;
  const rocketString = `${rocketName} | Block ${rocketBlock}`;
  const formatDate = Moment(localLaunchDate).format('YYYY:MM:DD:HH:mm');
  const [year, month, days, hours, minutes] = formatDate.split(':').map(Number);

  const launchDateString = `${hours}:${minutes} on ${days}/${month}, ${year}`;

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
          <QuickInfo>
            <TextWrapper>
              <RocketHeader>{rocketString}</RocketHeader>
              <MissionHeader>{missionName}</MissionHeader>
              <LineBreak />
            </TextWrapper>
            <ContentColumn>
              <QuickInfoRow>
                <EvilIcon name="location" />
                <Text>{launchSiteName}</Text>
              </QuickInfoRow>
              <QuickInfoRow>
                <EvilIcon name="clock" />
                <Text>{launchDateString}</Text>
              </QuickInfoRow>
              <QuickInfoRow>
                <MaterialCommunityIcon name="airplane-landing" />
                <Text>{landingSite}</Text>
              </QuickInfoRow>
            </ContentColumn>
          </QuickInfo>
          <Space />
          <ContentColumn>
            <Header>Mission Details</Header>
            <Text numberOfLines={1}>{missionName}</Text>
            <Row>
              <Text>Type: </Text>
              <Text>Testtest</Text>
            </Row>
            <Row>
              <Text>Orbit: </Text>
              <Text>{orbit}</Text>
            </Row>
          </ContentColumn>
        </Content>
      </ScrollContainer>
    </Screen>
  );
}

DetailedListingScreen.sharedElements = () => {
  return ['image'];
};

export default DetailedListingScreen;
