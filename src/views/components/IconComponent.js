import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppButton from './AppButton';
import Color from '../../config/Color';
function IconComponent(props) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Icon name ={"mail"} size ={200} color = {'blue'}>
            </Icon>
            <AppButton/>
        </View>
      
    );
}

export default IconComponent;