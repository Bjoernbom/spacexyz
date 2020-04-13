import React, {useContext, useMemo} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from 'styled-components';
import {SCREEN_NAMES} from '../constants';

import Homescreen from '../screens/Home.screen.js';
import Settingsscreen from '../screens/Settings.screen.js';
import ContactScreen from '../screens/Contact.screen';
import CoolStuffScreen from '../screens/CoolStuff.screen';
import NerdStuffScreen from '../screens/NerdStuff.screen';

const Tab = createBottomTabNavigator();

function getTabIcon(screen) {
  let name;

  switch (screen.name) {
    case SCREEN_NAMES.HOME:
      name = 'home';
      break;

    case SCREEN_NAMES.SETTINGS:
      name = 'cog';
      break;

    case SCREEN_NAMES.CONTACT:
      name = 'book';
      break;

    case SCREEN_NAMES.COOL_STUFF:
      name = 'rocket';
      break;

    case SCREEN_NAMES.NERD_STUFF:
      name = 'music';
      break;

    default:
  }

  return name;
}

export default function Router() {
  const theme = useContext(ThemeContext);

  const navTheme = useMemo(
    () => ({
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        background: theme.screenBackgrounds.primary,
      },
    }),
    [theme.screenBackgrounds.primary],
  );

  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            const iconName = getTabIcon(route);

            return (
              <Icon
                name={iconName}
                color={color}
                size={iconName === 'home' ? 36 : 22}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.tabBar.active,
          inactiveTintColor: theme.tabBar.inActive,
          style: {
            borderTopColor: 'transparent',
            backgroundColor: theme.screenBackgrounds.primary,
          },
          initialRouteName: 'Home',
        }}>
        <Tab.Screen name={SCREEN_NAMES.CONTACT} component={ContactScreen} />
        <Tab.Screen
          name={SCREEN_NAMES.COOL_STUFF}
          component={CoolStuffScreen}
        />
        <Tab.Screen name={SCREEN_NAMES.HOME} component={Homescreen} />
        <Tab.Screen
          name={SCREEN_NAMES.NERD_STUFF}
          component={NerdStuffScreen}
        />
        <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={Settingsscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
