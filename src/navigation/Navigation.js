import React, {useContext, useMemo} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from 'styled-components';
import {SCREEN_NAMES} from '../app/constants';

import DashboardScreen from '../features/dashboard/DashboardScreen';
import Settingsscreen from '../features/settings/SettingsScreen';
import ContactScreen from '../features/contact/ContactScreen';
import RocketsScreen from '../features/rockets/RocketsScreen';
import NerdStuffScreen from '../screens/NerdStuff.screen';

const Tab = createBottomTabNavigator();

function getTabIcon(screen) {
  let name;

  switch (screen.name) {
    case SCREEN_NAMES.DASHBOARD:
      name = 'home';
      break;

    case SCREEN_NAMES.SETTINGS:
      name = 'cog';
      break;

    case SCREEN_NAMES.CONTACT:
      name = 'book';
      break;

    case SCREEN_NAMES.ROCKETS:
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
        initialRouteName={SCREEN_NAMES.DASHBOARD}
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
            borderTopColor: 'transparent', // remove ugly line
            backgroundColor: theme.screenBackgrounds.primary,
          },
        }}>
        <Tab.Screen name={SCREEN_NAMES.ROCKETS} component={RocketsScreen} />
        <Tab.Screen
          name={SCREEN_NAMES.NERD_STUFF}
          component={NerdStuffScreen}
        />
        <Tab.Screen name={SCREEN_NAMES.DASHBOARD} component={DashboardScreen} />
        <Tab.Screen name={SCREEN_NAMES.CONTACT} component={ContactScreen} />
        <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={Settingsscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
