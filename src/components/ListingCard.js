import * as React from 'react';
import styled from 'styled-components/native';

const src = '../assets/spacex.jpg';
const Content = styled.TouchableOpacity`
  background-color: ${props => props.theme.backgrounds.secondary};
  height: 400;
  margin-right: 10;
  margin-left: 10;
  align-items: center;
  padding-bottom: 20;
  margin-bottom: 20;
  border-radius: 7;
`;

const ImageWrapper = styled.View`
  margin-top: 2;
  margin-bottom: 4;
`;

const HeaderImage = styled.Image`
  height: 180;
  width: 350;
  max-width: 100%;
  overflow: hidden;
  margin-top: 10;
  margin-right: 10;
  margin-left: 10;
`;

export default function Listing({onPress}) {
  return (
    <Content onPress={onPress}>
      <ImageWrapper>
        <HeaderImage source={require(src)} resizeMode="center" />
      </ImageWrapper>
    </Content>
  );
}
