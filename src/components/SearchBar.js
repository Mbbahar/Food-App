import React from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {search_bar} from '../styles/component_style';

function SearchBar(props) {
  return (
    <View style={search_bar.container}>
      <View style={search_bar.inputContainer}>
        <TextInput placeholder="Search Meal..." onChangeText={props.onSearch} />
      </View>

      <Icon
        name="ios-search-outline"
        color="#353233"
        size={25}
        style={search_bar.iconContainer}
      />
    </View>
  );
}

export {SearchBar};
