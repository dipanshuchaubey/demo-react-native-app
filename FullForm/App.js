/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import FlatList from './src/screens/FlatList';
import ImageScreen from './src/screens/ImageScreen';
import Counter from './src/screens/Counter';
import ColorScreen from './src/screens/ColorScreen';
import ColorCounter from './src/screens/ColorCounter';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen';

const App = createStackNavigator(
  {
    Home: HomeScreen,
    List: FlatList,
    Image: ImageScreen,
    Counter: Counter,
    Color: ColorScreen,
    ColorCounter: ColorCounter,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'FullForm',
    },
  },
);

export default createAppContainer(App);
