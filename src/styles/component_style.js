import {StyleSheet, Dimensions} from 'react-native';

const device_size = Dimensions.get('window');

const vertical_tab_bar = StyleSheet.create({
  container: {
    backgroundColor: '#7BA05B',
    flexDirection: 'column',
    width: device_size.width / 5,
    height: device_size.height,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button_container: {
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 25,
    transform: [{rotate: '-90deg'}],
  },
  circle: {
    width: 40,
    height: 75,
    borderTopLeftRadius: 200 / 2,
    borderBottomLeftRadius: 200 / 2,
    backgroundColor: '#fff',
    elevation: 5,
  },
});

const category_card = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',

    height: device_size.height / 2,

    backgroundColor: 'white',
    padding: 2,
    margin: 5,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 20,
  },
  image: {
    height: device_size.height / 3,
    width: device_size.width * 0.7,
  },
  footer: {
    flexDirection: 'row',
  },
  title: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#353233',
  },
  icon: {
    alignSelf: 'flex-end',
  },
});

const meal_card = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 2,
    margin: 5,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -5,
      height: 5,
    },
    elevation: 20,
  },
  image: {
    height: Dimensions.get('window').height / 3,
    borderRadius: 10,
  },
  text: {
    marginVertical: 5,
    alignSelf: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: '#353233',
  },
});

const search_bar = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 10,
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#353233',
    marginRight: 10,
  },
  inputContainer: {
    borderColor: '#353233',
    borderBottomWidth: 1,
    flex: 1,
    marginLeft: 10,
  },
});

export {vertical_tab_bar, category_card, meal_card, search_bar};
