import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber

import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';





class GameOver extends Component {

  static navigationOptions = {
    title: "Game Over",
  }

  constructor(props) {
    super(props);
    
    
  }

  componentDidMount(){

  }
  render() {

    const {navigate, state} = this.props.navigation

    return (
     <View>
       <Text>Game Over</Text>
    <Text>Points: {state.params.points}</Text>
      {/* <App /> */}
       {/* <TouchableOpacity><Text>Time Trial</Text></TouchableOpacity>
       <Button
        title="Go to Details"
        onPress={() => navigate( 
         "Grid" , {name: "Jane"}
        )}
      /> */}
     </View>
    )
  }

}

const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#ffffff' 
    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
      backgroundColor: '#ffe0f0'
    },
    TableText: { 
      margin: 10
    }
  });

  export default GameOver