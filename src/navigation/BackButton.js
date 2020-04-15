import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wrapper = styled.View`
  margin-bottom: 15px;
  padding-horizontal: 10px;
`;

const Button = styled.TouchableOpacity`
  padding-vertical: 5px;
  border-radius: 5px;
`;

const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 10px;
`;

const Column = styled.View`
  align-items: center;
  flex-direction: row;
`;

const IconColumn = styled(Column)`
  flex-shrink: 0;
  flex-basis: 32px;
  justify-content: center;
  margin-right: 5px;
`;

const LabelColumn = styled(Column)`
  flex-grow: 1;
  align-items: center;
  flex-direction: row;
`;

export default function BackButton({navigation}) {
  function handleButtonPress() {
    navigation.pop();
  }
  const styledIcon = (
    <Icon
      name="arrow-left"
      style={{
        color: props => props.theme.text.secondary,
      }}
    />
  );

  return (
    <Wrapper>
      <Button onPress={handleButtonPress}>
        <Row>
          <IconColumn>{styledIcon}</IconColumn>
          <LabelColumn>
            <Text>Back</Text>
          </LabelColumn>
        </Row>
      </Button>
    </Wrapper>
  );
}
