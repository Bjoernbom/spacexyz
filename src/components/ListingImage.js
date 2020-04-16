import React from 'react';
import styled from 'styled-components/native';
import {SharedElement} from 'react-navigation-shared-element';

const ImageWrapper = styled.View`
  margin-top: 2;
  margin-bottom: 4;
`;

const HeaderImage = styled.Image`
  height: 200;
  width: 350;
  overflow: hidden;
  margin-top: 10;
  align-self: center;
`;

const src = '../assets/spacex.jpg';
export default function ListingImage() {
  return (
    <>
      <SharedElement>
        <HeaderImage source={require(src)} resizeMode="center" />;
      </SharedElement>
    </>
  );
}
