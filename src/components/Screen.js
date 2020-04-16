import React from 'react';
import styled from 'styled-components/native';

const DefaultScreen = styled.View`
  /* paddingTop: 60px; */
  flex: 1;
  background-color: ${props => props.theme.backgrounds.primary};
`;

export default function Screen({children}) {
  return <DefaultScreen>{children}</DefaultScreen>;
}
