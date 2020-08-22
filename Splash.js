import React, { Component, useState, useEffect } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber


const Splash = ({
    navigation,
  }) => {
    useEffect(() => {
      console.log("OKAY")
      setTimeout(() => {
        navigation.navigate('Basic')
      }, 2000)
    }, [])
  
    return(
    <View style ={styles.home}>
      <Image source = {require('./Assets/logo.png')} resizeMode = "contain" style ={{width: 400}}></Image>
    </View>
    );
  }

  const styles = StyleSheet.create({

  home:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Splash