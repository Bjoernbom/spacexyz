import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Wrapper = styled.View`
  padding-top: 45;
  margin-bottom: 15px;
  padding-horizontal: 5px;
  position: absolute;
  zIndex: 100;
`;

const Button = styled.TouchableOpacity`
  padding-vertical: 5px;
  border-radius: 5px;
`;

const Row = styled.View`
  flex-direction: row;
  padding-horizontal: 20px;
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

const BackHeader = styled.Text`
  font-size: 20;
  color: ${props => props.theme.text.primary};
`;

const ItemIcon = styled(Icon).attrs(props => ({
  color: props.theme.text.primary,
}))`
  font-size: 25px;
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

  return (
    <Wrapper>
      <Button onPress={handleButtonPress}>
        <Row>
          <IconColumn>
            <ItemIcon name="close" />
          </IconColumn>
        </Row>
      </Button>
    </Wrapper>
  );
}
