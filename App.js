import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BasicTable from './basicTable';
import GridTable from './gridTable'

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
    
    Grid: GridTable,
    Basic: BasicTable
    
    
  },
  {
    initialRouteName: 'Grid',
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