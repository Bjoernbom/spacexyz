import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Homescreen from '../screens/Home.screen.js';
import Settingsscreen from '../screens/Settings.screen.js';


const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: Homescreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name="home" color={tintColor} size={25} />
        ),
      }),
    },
    Settings: {
      screen: Settingsscreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, forcused}) => (
          <Icon name="cog" color={tintColor} size={25} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'transparent',
      },
    },
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
