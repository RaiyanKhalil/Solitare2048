import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash'

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, BackHandler} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber

import { InterstitialAd, AdEventType, TestIds } from '@react-native-firebase/admob';

// const Splash = ({
//   navigation,
// }) => {
//   useEffect(() => {
//     console.log("OKAY")
//     setTimeout(() => {
//       navigation.navigate('Basic')
//     }, 2000)
//   }, [])

//   return(
//   <View style ={styles.home}>
//     <Image source = {require('./Assets/logo.png')} resizeMode = "contain" style ={{width: 200}}></Image>
//   </View>
//   );
// }


  
class BasicTable extends Component {

  static navigationOptions = {
    // headerTitleStyle: { 
    //   textAlign:"center", 
    //   flex:1,
    //   },
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerLeft: null  }

  constructor(props) {
    super(props);
    this.backButtonClick = this.backButtonClick.bind(this);
    
  }
   

  componentDidMount(){
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);

  }
  backButtonClick(){
    this.props.navigation.navigate('Basic');
    return true;
}

  render() {
    // <Splash />
    const {navigate} = this.props.navigation

    return (
      // <Splash />
     <View style = {{paddingTop: 50}}>
      
       {/* <Text>HomeScreen</Text> */}
      {/* <App /> */}
      {/* <Text style = {{fontSize: 90, fontStyle: 'italic', textAlign: "center", paddingTop: 60}}>২০৪৮</Text> */}
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <View style ={styles.home}>
      <     Image source = {require('./Assets/logo.png')} resizeMode = "contain" style ={{width: 300}}></Image>
        </View>
        {/* <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>২</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>০</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৪</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৮</Text></View> */}

      </View>
      <View style = {styles.playContainer}>
      <TouchableOpacity
        style = {styles.playButton}
        onPress={() => navigate(
         "Game" 
        )}
      ><Text style = {styles.playText}>খেলুন</Text>
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
      backgroundColor: '#000000'
    },
    TableText: { 
      margin: 10
    },
    playButton:{
      height: 90,
      width: 140,
      backgroundColor: "#000000",
      justifyContent: "center",
      borderRadius: 30
    },
    playContainer:{
      paddingTop: 200,
      alignItems: "center"
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

    },
    home:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 75

    }
  });

  export default BasicTable