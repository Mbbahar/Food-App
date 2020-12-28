import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {MealCard, SearchBar} from '../components';
import Icon from 'react-native-vector-icons/Ionicons';
import {main} from '../styles/page_style';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php';

function FoodList({navigation, route}) {
  const {categoryName} = route.params;
  const [mealList, setMealList] = useState([]);
  const [searchList, setSearchList] = useState([]);

  async function getMeals() {
    const response = await axios.get(api_url, {
      params: {
        c: categoryName,
      },
    });
    setMealList(response.data.meals);
    setSearchList(response.data.meals);
  }

  const renderItem = ({item}) => (
    <MealCard
      meal={item}
      onCard={() => navigation.navigate('FoodDetail', {meal: item})}
    />
  );

  function searchMeal(text) {
    const filteredList = searchList.filter((meal) => {
      const itemName = meal.strMeal.toUpperCase();
      const searchWord = text.toUpperCase();

      return itemName.indexOf(searchWord) > -1;
    });

    setMealList(filteredList);
  }
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <View style={main.container_without_bar}>
      <View>
        <View style={main.header_component}>
          <Icon
            name="arrow-undo-circle"
            color="#7BA05B"
            size={40}
            onPress={() => navigation.goBack()}
          />
          <Text style={main.text}>{categoryName}</Text>
        </View>
        <SearchBar onSearch={searchMeal} />
      </View>
      <FlatList
        //ListHeaderComponent={headerComponent}
        keyExtractor={(item) => item.idMeal}
        data={mealList}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
export {FoodList};
