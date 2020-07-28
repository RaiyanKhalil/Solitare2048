import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber

import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';





class BasicTable extends Component {

  static navigationOptions = {
    // headerTitleStyle: { 
    //   textAlign:"center", 
    //   flex:1,
    //   },
      headerStyle: {
        backgroundColor: '#C71585',
      },
    // title: "২০৪৮",
  }

  constructor(props) {
    super(props);
    
    
  }

  componentDidMount(){

  }
  render() {

    const {navigate} = this.props.navigation

    return (
     <View style = {{paddingTop: 50}}>
       {/* <Text>HomeScreen</Text> */}
      {/* <App /> */}
      {/* <Text style = {{fontSize: 90, fontStyle: 'italic', textAlign: "center", paddingTop: 60}}>২০৪৮</Text> */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>২</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>০</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৪</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৮</Text></View>

      </View>
      <View style = {styles.playContainer}>
      <TouchableOpacity
        style = {styles.playButton}
        onPress={() => navigate(
         "Game" 
        )}
      ><Text style = {styles.playText}>PLAY</Text>
      </TouchableOpacity>
      </View>
       
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
    playButton:{
      height: 90,
      width: 140,
      backgroundColor: "#000000",
      justifyContent: "center"
    },
    playContainer:{
      paddingTop: 200,
      paddingLeft: 120,
    },
    playText:{
      color: "#ffffff",
      fontSize: 30,
      textAlign: "center",
    },
    titleContainer: {
      margin: 1,
      backgroundColor: '#FFB6C1',
      alignItems: 'center',
      justifyContent: 'center',
      width: 85, 
      height: 85,

    }
  });

  export default BasicTable