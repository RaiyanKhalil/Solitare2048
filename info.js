import React, { Component, useState, useEffect,  } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler} from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class info extends Component {
    render(){
        const {navigate} = this.props.navigation
      
          return(
              <View>
                  <TouchableOpacity>
                      <View style={styles.view}>
                      <Text style = {{color: '#000000', fontSize: 30, textAlignVertical: 'center', fontWeight: 'bold', textAlignVertical: "center", }}>CONTINUE</Text>
                      </View>
                  </TouchableOpacity>
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