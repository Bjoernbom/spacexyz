import React, {useContext, useMemo} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ThemeContext} from 'styled-components';

import Homescreen from '../screens/Home.screen.js';
import Settingsscreen from '../screens/Settings.screen.js';

const Tab = createBottomTabNavigator();

function getTabIcon(screen) {
  let name;

  switch (screen.name) {
    case 'Home':
      name = 'home';
      break;
    case 'Settings':
      name = 'Settings';
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

            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: theme.text.primary,
          inactiveTintColor: theme.text.primary,
          style: {
            borderTopColor: 'transparent',
            backgroundColor: theme.screenBackgrounds.primary,
          },
          initialRouteName: 'Home',
        }}>
        <Tab.Screen name="Home" component={Homescreen} />
        <Tab.Screen name="Settings" component={Settingsscreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const Router = createAppContainer(RootStack);
// export default Router;
