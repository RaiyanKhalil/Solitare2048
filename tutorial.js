import React, { Component, useState, useEffect,  } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class info extends Component {

render(){
  const {navigate} = this.props.navigation

    return(
        <View>
            <View style={{ paddingLeft: 30, borderColor: '#000000', borderWidth: 5, paddingTop: -10}}>
                  <Image
                    // source={require('./Assets/load2.gif')}
                    source={require('./Assets/load3.gif')}
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
                    <Text style = {{color: '#000000', fontSize: 30, textAlignVertical: 'center', fontWeight: 'bold', textAlignVertical: "center", }}>CONTINUE</Text>
                  </TouchableOpacity>
                  </View>
                  
        </View>
    )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    
  },
  button: {
    paddingBottom: 0,
    alignItems: "center",
    backgroundColor: "#FFB6C1",
    padding: 10,
    width: 200,
    borderRadius: 30,
    borderWidth: 5
    // justifyContent: 'center'
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  view: {
    paddingTop: 27,
    // justifyContent: 'center'
    alignItems: 'center'
  }
});
