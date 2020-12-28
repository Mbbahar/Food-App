import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#eceff1',
  },
  text: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#353233'
  },
  container_without_bar: {
    flex: 1,
    backgroundColor: '#eceff1',
  }
});

const food_detail = StyleSheet.create({
  image: {
    height: device_size.height / 2,
    borderRadius: 10
  },
  title: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
    color: '#353233',
    
  },
  instructions: {
    fontSize: 17,
    fontWeight: '600',
    margin: 20
  }
})

export {main, food_detail};
