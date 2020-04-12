import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Homescreen from '../screens/Home.screen.js';
import DetailsScreen from '../screens/Details.screen.js';

const RootStack = createBottomTabNavigator(
  {
    Home: {
      screen: Homescreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, focused}) => (
          <Icon name="rocket" color={tintColor} size={25} />
        ),
      }),
    },
    Details: {
      screen: DetailsScreen,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor, forcused}) => (
          <Icon name="rocket" color={tintColor} size={25} />
          // <Text>Details</Text>
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
        backgroundColor: 'white',
      },
    },
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
