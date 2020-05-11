import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/Home';
import GiftsScreen from '../screens/GiftsScreen';
import Cart from '../screens/Cart';
import BookScreen from '../screens/BooksScreen';
import ElectronicsScreen from '../screens/ElectronicsScreen'

const HomeStack = createStackNavigator(
  {
    Home: { screen: Home },
    Gifts: { screen: GiftsScreen },
    Books:{ screen: BookScreen},
    Electronics:{screen: ElectronicsScreen},
  },
  {
    defaultNavigationOptions: {
      title: 'Ecommerce App',
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    Cart: { screen: Cart },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Cart',

      //Header title
    },
  }
);
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Cart: { screen: Cart },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cart') {
          iconName = `md-basket${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#00BFFF',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);