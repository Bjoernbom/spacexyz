import React from 'react';
import {useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';
import styled from 'styled-components/native';
import AutoResponsive from 'autoresponsive-react-native';
import RocketCard from '../rockets/RocketCard';
import {SCREEN_NAMES} from '../../app/constants';
import {SharedElement} from 'react-navigation-shared-element';
import {setRocketDetailId} from './RocketIdSlice';

const FH = '../../assets/rockets/falcon_heavy.jpg';

const SCREEN_WIDTH = Dimensions.get('window').width;
const padding = '20px';

const styles = StyleSheet.create({
  items: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 8,
    overflow: 'hidden',
  },
});

const Screen = styled.View`
  flex-grow: 1;
  padding: ${padding};
  background-color: ${props => props.theme.screenBackgrounds.primary};
`;

const Content = styled.ScrollView`
  margin-top: 30px;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
`;

const Child = styled.View`
  width: 180;
  height: 240;
  background-color: red;
  padding-top: 20;
  border-radius: 8;
`;
const HeaderImage = styled.Image`
  height: 100%;
  width: 100%;
`;

export default function RocketsScreen({navigation}) {
  const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function getAutoResponsiveProps() {
    return {
      itemMargin: 8,
    };
  }

  function handleNavigateToRocketDetails(id) {
    navigation.navigate(SCREEN_NAMES.ROCKET_DETAILS, {id});
  }

  const items = array.map(key => {
    return (
      <TouchableOpacity
        key={key}
        onPress={() => handleNavigateToRocketDetails(key)}
        style={[
          styles.items,
          {
            width: (SCREEN_WIDTH - 50) / 2,
            height: parseInt(Math.random() * 20 + 12) * 10,
          },
        ]}>
        <SharedElement id={key}>
          <Image resizeMode="stretch" source={require(FH)} />
        </SharedElement>
      </TouchableOpacity>
    );
  });

  return (
    <Screen>
      <Content>
        <AutoResponsive {...getAutoResponsiveProps()}>{items}</AutoResponsive>
      </Content>
    </Screen>
  );
}
