import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
//import all the components we will need

var RandomNumber, power
export default class GridTable extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
      randSource: {}
    };
  }
  componentDidMount() {
    var that = this;
    // RandomNumber = Math.floor(Math.random() * 16) + 1 ;

    let items = Array.apply(null, Array(16)).map((v, i) => {
        // if((i + 1) % 2 == 0){
            // if((RandomNumber % 2) == 0){
                // console.log(RandomNumber)
                var a = Math.floor(Math.random() * 8) + 1 ;
                // while(a < 8){
                power = Math.pow(2, a)
                // }
                return { id: i, src: 'http://placehold.it/200x200?text=' + power };

            // }
        // }
        // else{
        //     return { id: i, src: 'http://placehold.it/200x200?text=' + '' };
        // }
      
    });
    that.setState({
      dataSource: items,
    });

    let randItem = Array.apply(null, Array(4)).map((v, j) => {  
        var a = Math.floor(Math.random() * 8) + 1 ;
                // while(a < 8){
                power = Math.pow(2, a)
                // }
                if((j == 2) && (j == 3)){
                    return { id: j, src: 'http://placehold.it/200x200?text=' + "Discard" };

                }
                else{
                    return { id: j, src: 'http://placehold.it/200x200?text=' + power };

                }
      });
    that.setState({
      randSource: randItem,
    });
  }
  randCard(){
    RandomNumber = Math.floor(Math.random() * 17) + 2 ;
    var a = Math.floor(Math.random() * 9) + 1 ;
    while(a < 8){
        power = Math.pow(2, i)
    }
    return power

  }
  render() {
    return (
      <View style={styles.MainContainer}>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                </TouchableOpacity>
              
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
      
      <View>
      <FlatList
          data={this.state.randSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                </TouchableOpacity>
              
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    paddingTop: 0,
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});