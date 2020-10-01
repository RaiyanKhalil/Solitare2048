import React, { Component, useState, useEffect,  } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler} from 'react-native';
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
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation:0,
        },    
    title: "Game Over",
    headerLeft: null
  }

  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);
  }

  // componentWillUnmount(){
  //   BackHandler.removeEventListener('hardwareBackPress', this.backButtonClick);
  // }
  backButtonClick(){
    this.props.navigation.navigate('Basic');
    return true;
}

  render() {

    const {navigate, state} = this.props.navigation

    return (
     <View style={{width:'100%'}}>
         <BannerAd
      unitId={adUnitId2}
      size={BannerAdSize.SMART_BANNER}
      requestOptions={{
      requestNonPersonalizedAdsOnly: true,
      
    }}
    />
       {/* <Text>Game Over</Text> */}
    <Text style = {{fontSize: 30, textAlign: "center"}}>পয়েন্ট: {state.params.points}</Text>
    <View style = {styles.homeButtonContainer}>
    <Text style = {styles.homeText}>হোম</Text>
    <TouchableOpacity
        // style = {styles.homeButton}
        onPress={() => navigate(
         "Basic" 
        )}
      >
        <Image source = {require('./Assets/home.png')} resizeMode = "contain" style ={{justifyContent: "center", alignItems: "center", alignContent: "center",}}></Image>
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
    // homeButton:{
    //   // height: 100,
    //   // width: 140,
    //   // backgroundColor: "#000000",
    //   // justifyContent: "center",
    //   // borderRadius: 30
    // },
    homeButtonContainer:{
      paddingTop: 150,
      // paddingLeft: 120,
      justifyContent: "center",
      alignItems: "center"
    },
    homeText:{
      color: "#000000",
      fontSize: 40,
      textAlign: "center",
      
    }
  });

  export default GameOver