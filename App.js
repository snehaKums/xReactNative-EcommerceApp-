import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeNav from './src/Components/HomeNav';

export default class App extends React.Component {
  render() {
    return (
     <HomeNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});