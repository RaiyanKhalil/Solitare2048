import React, { Component, useState, useEffect,  } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class info extends Component {

render(){
  const {navigate} = this.props.navigation

    return(
        <View>
            <View style={{ paddingLeft: 30}}>
                  <Image
                    // source={require('./Assets/load2.gif')}
                    source={require('./Assets/load.gif')}
                    style={{ width: 300, height: 500 }}
                  />
                  </View>
                  <View style ={styles.view}>
                    <TouchableOpacity
                      style={styles.button}

                   onPress={() => {
                    navigate(
                      "Game"
                    )                     
                   }
                   
                  }
                  >
                    <Text style = {{color: '#FFFFFF', fontSize: 40, }}>Next</Text>
                  </TouchableOpacity>
                  </View>
                  
        </View>
    )
}
}

// const slides = [
//     {
//       key: 'Avro keyboard',
//       title: 'কীবোর্ড সিলেক্ট করুণ',
//       text: 'অভ্র অথবা বাংলা কীবোর্ডের মধ্য থেকে আপনার পছন্দ মত কীবোর্ড সিলেক্ট করুন।',
//       //icon: 'ios-images-outline',
//       image: require('./Assets/Images/avro.jpg'),
//       colors: ['#63E2FF', '#B066FE'],
//     },
//     {
//       key: 'somethun1',
//       title: 'নতুন গেইম বানান',
//       text: 'নতুন গেইম বানাতে হলে, আপনার পছন্দ মত "গেইম অপশন" সিলেক্ট করে, "গেইম তৈরি করুন" বাটনটি চাপ দিন।',
//       //icon: 'ios-options-outline',
//       image: require('./Assets/Images/create.jpg'),
//       colors: ['#A3A1FF', '#3A3897'],
//     },
//     {
//         key: 'public',
//         title: 'পাবলিক গেইম জয়েন করুণ',
//         text: 'লিস্টের মধ্য থেকে আপনার পছন্দ মত যেকোনো একটি গেইম সিলেক্ট করুন।',
//         image: require('./Assets/Images/gameList.jpg'),
//         colors: ['#63E2FF', '#B066FE'],
//       },
//     {
//       key: 'private',
//       title: 'প্রাইভেট গেইম জয়েন করুণ',
//       text: 'কোডটি দিয়ে "প্রাইভেট গেইম সার্চ করুন" বাটনটি চাপ দিন। তারপর, প্রথম খেলোয়াড় এর বানানো গেইমটি সার্চ করুন। এরপর গেইমটি সিলেক্ট করে খেলা শুরু করুন',
//       //icon: 'ios-beer-outline',
//       image: require('./Assets/Images/private.jpg'),
//       colors: ['#29ABE2', '#4F00BC'],
//     },
//   ];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    
  },
  button: {
    paddingBottom: 0,
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  view: {
    paddingTop: 35
  }
});
