import * as React from 'react';
import {Dimensions, View} from 'react-native';
import styled from 'styled-components';

const WIDTH = Dimensions.get('window').width;
const SCREEN_WIDTH = (SCREEN_WIDTH - 50) / 2;
const HEIGHT = parseInt(Math.random() * 20 + 12) * 10;

const Card = styled.View`
  width: 180;
  height: 240;
  background-color: red;
  padding-top: 20;
  border-radius: 8;
`;

export default function RocketCard({key}) {
  return (
    <View
      key={key}
      style={{
        width: (SCREEN_WIDTH - 50) / 2,
        height: parseInt(Math.random() * 20 + 12) * 10,
        backgroundColor: 'rgb(92, 67, 155)',
        paddingTop: 20,
        borderRadius: 8,
      }}
    />
  );
}
