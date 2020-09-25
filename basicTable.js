import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash'

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, BackHandler, Modal, TouchableHighlight} from 'react-native';
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



class BasicTable extends Component{

  
  static navigationOptions = ({navigation}) => ({
    // headerTitleStyle: { 
    //   textAlign:"center", 
    //   flex:1,
    //   },
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      headerLeft: null,
    headerRight: (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <TouchableOpacity
      onPress={() => {  navigation.navigate("info")
    }}>
        <Image
          // style={styles.imageForHomeHeader}
          source={require('./Assets/rules2.png')}
        />
        </TouchableOpacity>
      </View>    )  
      })

  
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
// setModalVisible = (visible) => {
//   this.setState({ modalVisible: visible });
// }

  render() {
    // <Splash />
    const {navigate} = this.props.navigation
    // const { modalVisible } = this.state;


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
          <Image source = {require('./Assets/logo.png')} resizeMode = "contain" style ={{width: 300}}></Image>
        </View>
        {/* <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>২</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>০</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৪</Text></View>
        <View style={styles.titleContainer}><Text style = {{fontSize: 50,  textAlign: "center"}}>৮</Text></View> */}

      </View>
      <View style = {styles.playContainer}>
      <Text style = {styles.playText}>খেলুন</Text>
      <TouchableOpacity
        style = {styles.playButton}
        onPress={() => {
          const { navigate, state } = this.props.navigation
          Alert.alert(
            'DO YOU WANT TO WATCH THE TUTORIAL?',
            ' ',
            [
              {
                text: 'Yes', onPress: () => 
                navigate(
                  "tutorial"
                )

              },
              {
                text: 'No', onPress: () => navigate(
                  "Game"
                )
              },
      
              // {text: 'বন্ধু', onPress: () => this.props.navigation.navigate('NewKeyboard', {reload:this.props.navigation.getParam("reload"), gameName: this.state.text, value: this.state.gametype,bot:false})}
      
            ],
            { cancelable: false })
        }
        }
      >
        
        <Image source = {require('./Assets/play.png')} resizeMode = "contain" style ={{width: 300}}></Image>

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
      // height: 90,
      // width: 140,
      // backgroundColor: "#000000",
      // justifyContent: "center",
      // borderRadius: 30,
      // width: 0,
    // height: 0,
    // backgroundColor: 'transparent',
    // borderStyle: 'solid',
    // borderLeftWidth: 70,
    // borderRightWidth: 70,
    // borderBottomWidth: 120,
    // borderLeftColor: 'transparent',
    // borderRightColor: 'transparent',
    // borderBottomColor: '#000000',
    
      // transform: [
      //   {rotate: '90deg'}
      // ]
      
    },
    playContainer:{
      paddingTop: 200,
      alignItems: "center"
    },
    playText:{
      color: "#000000",
      fontSize: 50,
      textAlign: "center",
      // fontWeight: 'bold'
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

    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

  export default BasicTable