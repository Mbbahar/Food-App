import React from 'react';
import {View, Image, Text} from 'react-native';
import {category_card} from '../styles/component_style';
import Icon from 'react-native-vector-icons/Ionicons';

function CategoryCard({category, onSelect}) {
  return (
    <View style={category_card.container}>
      <Image
        resizeMode="contain"
        source={{uri: category.strCategoryThumb}}
        style={category_card.image}
      />

      <View style={category_card.footer}>
        <Text style={category_card.title}>{category.strCategory}</Text>
        <Icon
          name="arrow-redo-circle"
          color="#7BA05B"
          onPress={onSelect}
          size={35}
        />
      </View>
    </View>
  );
}
export {CategoryCard};
