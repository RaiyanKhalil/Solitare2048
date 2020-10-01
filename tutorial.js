import React, { Component, useState, useEffect,  } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ScrollView, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class tutorial extends Component {
  
  static navigationOptions = ({navigation}) => ({
    header: null,
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation:0,
      },

    })
render(){
  const {navigate} = this.props.navigation

    return(
        <ScrollView style={{padding:10}}>
            <View style={{ borderColor: '#000000', borderWidth: 5, paddingTop: 10}}>
                  <Image
                    // source={require('./Assets/load2.gif')}
                    source={require('./Assets/load3.gif')}
                    style={{ width: 300, height: 500, alignSelf:'center' }}
                  />
                  </View>
                  <View style ={styles.view}>
                    <TouchableOpacity
                      style={{...styles.button,backgroundColor:'#90909a'}}

                   onPress={() => {
                    this.props.navigation.goBack()                    
                   }
                   
                  }
                  >
                    <Text style = {{color: '#000000', fontSize: 22, textAlignVertical: 'center', fontWeight: 'bold', textAlignVertical: "center", }}>BACK</Text>
                  </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.button}

                   onPress={() => {
                    navigate(
                      "Game"
                    )                     
                   }
                   
                  }
                  >
                    <Text style = {{color: '#000000', fontSize: 22, textAlignVertical: 'center', fontWeight: 'bold', textAlignVertical: "center", }}>CONTINUE</Text>
                  </TouchableOpacity>
                  </View>
                  <View style={{padding: 14, marginLeft:10, marginTop:6}}>
                    <Text style={styles.instruction}>Add numbers in a column within time limit</Text>
                    <Text style={styles.instruction}>Select number from black box to start your game</Text>
                    <Text style={styles.instruction}>Tap on any pink box to place selected number</Text>
                    <Text style={styles.instruction}>The next playable number is visible in the grey box</Text>
                    <Text style={styles.instruction}>Put same numbers in a column to add and double the value</Text>
                    <Text style={styles.instruction}>Adding numbers will increase points and time</Text>
                    <Text style={styles.instruction}>Empty space is created in the pink grid on an addition</Text>
                    <Text style={styles.instruction}>If you don't want to use the current number in the black box, discard it with a long press</Text>
                    <Text style={styles.instruction}>Number of discards is limited</Text>
                    <Text style={styles.instruction}>You can increase the number of discards by 1 after adding three times</Text> 
                    <Text style={styles.instruction}>The game will be over when time is 0, you run out of pink boxes or discard limit is 0 </Text>
                    <Text style={{textAlign:'center', fontSize:20, fontWeight:'600'}}>Enjoy!</Text>
                  </View>
        </ScrollView>
    )
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    
  },
  instruction: {
    color: 'black',
    fontSize: 18, 
    padding:7,
    marginLeft:5,
    marginBottom:4,
    backgroundColor: 'lightgrey'
  },
  button: {
    paddingBottom: 0,
    alignItems: "center",
    backgroundColor: "#FFB6C1",
    padding: 10,
    width: 150,
    borderRadius: 30,
    borderWidth: 5,
    margin: 4
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  view: {
    paddingTop: 14,
    // justifyContent: 'center'
    alignSelf: 'center',
    flexDirection:'row'
  }
});
