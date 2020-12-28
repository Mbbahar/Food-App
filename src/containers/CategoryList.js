import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {VerticalTabBar, CategoryCard} from '../components';
import {main} from '../styles/page_style';

const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';

function CategoryList(props) {
  const [categoryList, setCategoryList] = useState([]);

   async function getCategory() {
    const response = await axios.get(api_url)
    setCategoryList(response.data.categories);
  }

  const renderItem = ({item}) => (
    <CategoryCard category={item} onSelect={() => props.navigation.navigate('FoodList',{categoryName:item.strCategory})}/>
  );

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
     <View style={{flex:1, }} >
       <Text style={main.text}>Categories</Text>
       <FlatList
          horizontal
          keyExtractor={(item) => item.idCategory}
          data={categoryList}
          renderItem={renderItem}
        />
     </View>
      
     
    </View>
  );
}
export {CategoryList};
