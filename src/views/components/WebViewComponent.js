import React from 'react';
import {WebView,View} from 'react-native';

function WebViewComponent(props) {
    return (
       <View style = {{flex:1}}>
       <WebView source = {{uri:'https://www.google.com'}}></WebView>
       </View>
    );
}

export default WebViewComponent;