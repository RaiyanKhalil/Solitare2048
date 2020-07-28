import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber

import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from '@react-native-firebase/admob';

const adUnitId2 = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

class GameOver extends Component {

  static navigationOptions = {
    headerTitleStyle: { 
        textAlign:"center", 
        flex:1,
        },
    headerStyle: {
        backgroundColor: '#C71585',
        },    
    title: "Game Over",
    headerLeft: null
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
         <BannerAd
      unitId={adUnitId2}
      size={BannerAdSize.BANNER}
      requestOptions={{
      requestNonPersonalizedAdsOnly: true,
      
    }}
    />
       {/* <Text>Game Over</Text> */}
    <Text style = {{fontSize: 30, textAlign: "center"}}>Points: {state.params.points}</Text>
    <View style = {styles.homeButtonContainer}>
    <TouchableOpacity
        style = {styles.homeButton}
        onPress={() => navigate(
         "Basic" 
        )}
      ><Text style = {styles.homeText}>HOME</Text>
      </TouchableOpacity>
    </View>
    
      {/* <Button
        title="PLAY AGAIN"
        onPress={() => navigate(
         "Game" 
        )}
      /> */}
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
    },
    homeButton:{
      height: 100,
      width: 140,
      backgroundColor: "#000000",
      justifyContent: "center"
    },
    homeButtonContainer:{
      paddingTop: 150,
      paddingLeft: 120,
    },
    homeText:{
      color: "#ffffff",
      fontSize: 30,
      textAlign: "center",
    }
  });

  export default GameOver