import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BasicTable from './basicTable';
import GridTable from './gridTable'
import GameOver from './gameOver'
import Splash from './Splash'
import tutorial from './tutorial'
import info from './info'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
const RootStack = createStackNavigator(
  {
    
    Game: GridTable,
    Basic: BasicTable,
    Over: GameOver,
    Splash: Splash,
    tutorial: tutorial,
    info: info
    
    
  },
  {
    initialRouteName: 'Splash',
  }
);
const AppContainer = createAppContainer(RootStack);

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: GridTable,
//   },
// });

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}