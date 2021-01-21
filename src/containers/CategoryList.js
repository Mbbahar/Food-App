import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import {VerticalTabBar, CategoryCard} from '../components';
import {main} from '../styles/page_style';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function CategoryList(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [randomMeal, setRandomMeal] = useState({});

  async function getCategory() {
    const response = await axios.get(api_url);
    setCategoryList(response.data.categories);

    const random = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php',
    );
    //console.log(random.data.meals)
    var str = JSON.stringify(random.data.meals);
    var final = str.replace(/\[|\]/g, '');
    console.log(JSON.parse(final));
    setRandomMeal(JSON.parse(final));
  }

  const renderItem = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() =>
        props.navigation.navigate('FoodList', {categoryName: item.strCategory})
      }
    />
  );

  const ListHeaderComponent = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text style={main.header_title}>Most Popular Recipes</Text>
          <Text style={main.header_text}>{randomMeal.strMeal}</Text>
        </View>

        <Image
          resizeMode="contain"
          source={{uri: randomMeal.strMealThumb}}
          style={main.image}
        />
      </View>
    );
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <View style={main.container}>
      <VerticalTabBar
        page="Category"
        routeProfile={() => props.navigation.navigate('Profile')}
        routeHome={() => props.navigation.navigate('CategoryList')}
      />
      <View style={{flex: 1}}>
        <FlatList
          // horizontal
          ListHeaderComponent={ListHeaderComponent}
          keyExtractor={(item) => item.idCategory}
          data={categoryList}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}
export {CategoryList};
