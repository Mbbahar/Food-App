import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {VerticalTabBar, MealCard} from '../components';
import {main} from '../styles/page_style';

function Profile({navigation}) {
  return (
    <View style={main.container}>
      <VerticalTabBar
        routeProfile={() => navigation.navigate('Profile')}
        routeHome={() => navigation.navigate('CategoryList')}
      />
    </View>
  );
}
export {Profile};
