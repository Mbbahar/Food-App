import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import {vertical_tab_bar} from '../styles/component_style';

function VerticalTabBar({routeHome, routeProfile, page}) {
  if (page == 'Category') {
    return (
      <View style={vertical_tab_bar.container}>
        <View style={{flexDirection: 'row', margin: 7}}>
          <TouchableHighlight
            underlayColor="#7BA05B"
            onPress={routeHome}
            style={vertical_tab_bar.button_container}>
            <Text style={vertical_tab_bar.text}>Home</Text>
          </TouchableHighlight>

          <View style={vertical_tab_bar.circle}></View>
        </View>
        <TouchableHighlight
          underlayColor="#7BA05B"
          onPress={routeProfile}
          style={vertical_tab_bar.button_container}>
          <Text style={vertical_tab_bar.text}>Profile</Text>
        </TouchableHighlight>
      </View>
    );
  } else {
    return (
      <View style={vertical_tab_bar.container}>
        <TouchableHighlight
          underlayColor="#7BA05B"
          onPress={routeHome}
          style={vertical_tab_bar.button_container}>
          <Text style={vertical_tab_bar.text}>Home</Text>
        </TouchableHighlight>
        <View style={{flexDirection: 'row', margin: 5}}>
          <TouchableHighlight
            underlayColor="#7BA05B"
            onPress={routeProfile}
            style={vertical_tab_bar.button_container}>
            <Text style={vertical_tab_bar.text}>Profile</Text>
          </TouchableHighlight>

          <View style={vertical_tab_bar.circle}></View>
        </View>
      </View>
    );
  }
}
export {VerticalTabBar};
