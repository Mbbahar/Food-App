import React, {useState, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import axios from 'axios';
import {food_detail} from '../styles/page_style';
import Icon from 'react-native-vector-icons/Ionicons';
import {WebView} from 'react-native-webview';

const api_url = 'https://www.themealdb.com/api/json/v1/1/search.php';

function FoodDetail({navigation, route}) {
  const {meal} = route.params;
  const [mealDetail, setMealDetail] = useState({});
  const [showWebView, setShowWebView] = useState(false);

  const [integredientList, setintegredientList] = useState([]);

  async function getMeals() {
    response = await axios.get(api_url, {
      params: {
        s: meal.strMeal,
      },
    });
    console.log(response.data.meals[0]);
    setMealDetail(response.data.meals[0]);
  }

  useEffect(() => {
    getMeals();
  }, []);

  if (showWebView) {
    return <WebView source={{uri: mealDetail.strYoutube}} />;
  } else {
    return (
      <ScrollView>
        <View style={food_detail.header_component}>
          <Icon
            name="arrow-undo-circle"
            color="#7BA05B"
            size={40}
            onPress={() => navigation.goBack()}
          />
          <Text style={food_detail.title}>{mealDetail.strMeal}</Text>
        </View>

        <Image
          resizeMode="contain"
          source={{uri: mealDetail.strMealThumb}}
          style={food_detail.image}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <Text style={food_detail.title}>Instructions</Text>
          <Icon
            name="logo-youtube"
            onPress={() => setShowWebView(true)}
            color="red"
            size={40}
          />
        </View>

        <Text style={food_detail.instructions}>
          {mealDetail.strInstructions}
        </Text>
      </ScrollView>
    );
  }
}
export {FoodDetail};
