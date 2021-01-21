import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {meal_card} from '../styles/component_style';

function MealCard({meal, onCard}) {
  return (
    <View style={meal_card.container}>
      <TouchableOpacity onPress={() => onCard(meal)}>
        <Image
          resizeMode="contain"
          source={{uri: meal.strMealThumb}}
          style={meal_card.image}
        />

        <Text style={meal_card.text}>{meal.strMeal}</Text>
      </TouchableOpacity>
    </View>
  );
}
export {MealCard};
