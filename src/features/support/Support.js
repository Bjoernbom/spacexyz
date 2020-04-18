import * as React from 'react';
import {Switch} from 'react-native'
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const Label = styled.Text`
  color: ${props => props.theme.text.primary};
  align-self: center;
  margin-right: 10px;
  font-size: 18;
`;

const ToggleWrapper = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
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

export default function Support({label, onPress}) {
  return (
    <ToggleWrapper onPress={onPress}>
      <LabelWrapper>
        <InfoButton>
          <ItemIcon name="info" />
        </InfoButton>
        <Label>{label}</Label>
      </LabelWrapper>
    </ToggleWrapper>
  );
}
