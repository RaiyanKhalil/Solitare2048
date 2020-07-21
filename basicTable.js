import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import {StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions} from 'react-native';
// import CountDown from 'react-native-countdown-component';
// var RandomNumber

class BasicTable extends Component {
  constructor(props) {
    super(props);
    
    
  }

  render() {
    return (
     <View>
       <Text>HomeScreen</Text>

       <TouchableOpacity><Text>Time Trial</Text></TouchableOpacity>
       <Button
        title="Go to Details"
      />
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
    }
  });

  export default BasicTable