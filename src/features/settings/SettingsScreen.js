import React from 'react';
import {Alert, Switch} from 'react-native';
import DarkThemeToggle from '../../services/theme/DarkThemeToggle';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Support from '../../features/support/Support';
import DeviceInfo from 'react-native-device-info';

const versionString = DeviceInfo.getVersion();
console.log(versionString)

const Screen = styled.View`
  flex-grow: 1;
  background-color: ${props => props.theme.screenBackgrounds.primary};
`;

const Content = styled.View`
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;

const List = styled.View`
  background-color: ${props => props.theme.backgrounds.secondary};
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 2px;
  padding-bottom: 2px;
  width: 100%;
  border-radius: 10;
`;

const Header = styled.Text`
  color: ${props => props.theme.text.primary};
  margin-bottom: 10px;
  font-size: 22;
`;

const Label = styled.Text`
  color: ${props => props.theme.text.primary};
  align-self: center;
  margin-right: 10px;
  font-size: 18;
`;

const ToggleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 45px;
  padding-bottom: 5px;
  padding-top: 5px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.borders.primary};
`;

const LabelWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const InfoButton = styled.TouchableHighlight`
  padding-right: 10px;
`;

const ItemIcon = styled(Icon).attrs(props => ({
  color: props.theme.text.primary,
}))`
  font-size: 18px;
`;

const Space = styled.View`
  height: 20px;
`;

const Version = styled.Text`
  font-size: 14;
  margin-top: 2px;
  color: ${props => props.theme.text.light};
  justify-content: center;
  align-self: center;
`;

export default function SettingsScreen() {
  function handleShowInfo() {
    Alert.alert(
      'App Theme',
      'Toggle the theme of the app to be either dark (default) or light',
    );
  }

  function handleBuyCoffeePress() {
    Alert.alert(
      'Buy coffee',
      'New features will need to be worked on by intoxicating myself with caffeine',
    );
  }

  function handleChatOnDiscordPress() {
    Alert.alert('Discord', 'Come chat with me and others in our own community');
  }

  function handleFollowTwitterPress() {
    Alert.alert('Twitter', 'I will soon be onT Twitter. Stay tuned!');
  }

  return (
    <Screen>
      <Content>
        <Header>Theme</Header>
        <List>
          <ToggleWrapper>
            <LabelWrapper>
              <InfoButton onPress={handleShowInfo}>
                <ItemIcon name="info" />
              </InfoButton>
              <Label>Dark Theme</Label>
            </LabelWrapper>
            <DarkThemeToggle />
          </ToggleWrapper>
        </List>
        <Space />
        <Header>Support me</Header>
        <List>
          <Support label="Buy me a coffee" onPress={handleBuyCoffeePress} />
          <Support
            label="Follow me on Twitter"
            onPress={handleFollowTwitterPress}
          />
          <Support label="Chat on Discord" onPress={handleChatOnDiscordPress} />
        </List>
        <Space />
        <Header>Time / Misc</Header>
        <List>
          <ToggleWrapper>
            <LabelWrapper>
              <InfoButton onPress={handleShowInfo}>
                <ItemIcon name="info" />
              </InfoButton>
              <Label>Use Utc</Label>
            </LabelWrapper>
            <Switch />
          </ToggleWrapper>
          <ToggleWrapper>
            <LabelWrapper>
              <InfoButton onPress={handleShowInfo}>
                <ItemIcon name="info" />
              </InfoButton>
              <Label>Use 24 hour format</Label>
            </LabelWrapper>
            <Switch />
          </ToggleWrapper>
          <ToggleWrapper>
            <LabelWrapper>
              <InfoButton onPress={handleShowInfo}>
                <ItemIcon name="info" />
              </InfoButton>
              <Label>Show events in mission</Label>
            </LabelWrapper>
            <Switch />
          </ToggleWrapper>
        </List>
        <Version>Version: {versionString}</Version>
      </Content>
    </Screen>
  );
}
