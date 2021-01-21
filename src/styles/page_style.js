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
    color: '#353233',
  },
  container_without_bar: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_component: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  header_title: {
    fontSize: 20,
    fontWeight: '700',
  },
  header_text: {
    fontSize: 15,
  },
  image: {
    height: device_size.height / 5,
    width: device_size.width / 5,
    borderRadius: 500,
  },
});

const food_detail = StyleSheet.create({
  image: {
    height: device_size.height / 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#353233',
  },
  instructions: {
    fontSize: 15,
    fontWeight: '600',
    marginHorizontal: 30,
  },
  header_component: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
});

export {main, food_detail};
