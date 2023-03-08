import React from 'react';
import {View} from 'react-native';
/**
 *
 * select a block > shift+Alt+down
 *
 */
function FlexConcept(props) {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column', //left to right //horizontal
        justifyContent: 'center', //Primary
        alignItems: 'flex-start', //Secondary
        //  alignSelf: 'center', //It overwrites the alignitems
      }}>
      <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />

      {/* <View
        style={{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,
          // position: 'absolute',
          //alignSelf: 'flex-start',
        }}
      />
      <View
        style={{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'grey',
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: 'greenyellow',
          width: 100,
          height: 100,
        }}
      /> */}
    </View>
  );
}

export default FlexConcept;
