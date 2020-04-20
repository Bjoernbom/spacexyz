import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import BackButton from '../../navigation/BackButton';
import {SharedElement} from 'react-navigation-shared-element';
import {getRocketDetailId} from './RocketIdSlice';

const source = '../../assets/rockets/falcon_heavy.jpg';

const Screen = styled.View`
  flex-grow: 1;
  /* padding: 20; */
  background-color: ${props => props.theme.screenBackgrounds.primary};
`;

const Content = styled.ScrollView`
  margin-top: 30px;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
`;

const HeaderImage = styled.Image`
  width: 100%;
  height: 400;
`;
let id;
function RocketDetailScreen({navigation, route}) {
  id = route.params.id;

  return (
    <Screen>
      <Content>
        <BackButton navigation={navigation} />
        <Header>Rocket details</Header>
        <SharedElement id={id}>
          <HeaderImage source={require(source)} />
        </SharedElement>
      </Content>
    </Screen>
  );
}

RocketDetailScreen.sharedElements = ({route}) => {
  console.log('params 2', route);
  return [id];
};

export default RocketDetailScreen;
