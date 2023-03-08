import React from 'react';
import {View} from 'react-native';

function PositionConcept(props) {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{backgroundColor: 'dodgerblue', width: 100, height: 100}} />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          position: 'relative', //Default postioning without affecting the current layout
        }}
      />
      <View style={{backgroundColor: 'tomato', width: 100, height: 100}} />
    </View>
  );
}

export default PositionConcept;
