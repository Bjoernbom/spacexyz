import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import testAction from '../store/actions/testAction';

function Homescreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Homescreen</Text>
    </View>
  );
}

export default Homescreen;
