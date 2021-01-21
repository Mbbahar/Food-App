import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CategoryList, FoodList, FoodDetail, Profile} from './containers';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="CategoryList" component={CategoryList} />
        <Stack.Screen name="FoodList" component={FoodList} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
