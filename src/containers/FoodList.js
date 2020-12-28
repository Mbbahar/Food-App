import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {VerticalTabBar, MealCard} from '../components';
import {main} from '../styles/page_style';

const api_url = 'https://www.themealdb.com/api/json/v1/1/filter.php';

function FoodList({navigation, route}) {
  const {categoryName} = route.params;
  const [mealList, setMealList] = useState([]);

  async function getMeals() {
    const response = await axios
      .get(api_url, {
        params: {
          c: categoryName,
        },
      })
      setMealList(response.data.meals);
  }

  const renderItem = ({item}) => <MealCard meal={item} onCard={() => navigation.navigate('FoodDetail',{meal:item})}/>;

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <View style={main.container_without_bar}>
      <FlatList
        ListHeaderComponent={<Text style={main.text}>Meals</Text>}
        keyExtractor={(item) => item.idMeal}
        data={mealList}
        renderItem={renderItem}
        numColumns={2}
      />
    </View>
  );
}
export {FoodList};
