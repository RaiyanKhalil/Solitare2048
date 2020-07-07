import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
//import all the components we will need
let randItem, items
var RandomNumber, power
export default class GridTable extends Component {
  constructor() {
    super();
    
  // this.randCard = this.randCard.bind(this);
  // this.randCard2 = this.randCard2.bind(this);
    this.state = {
      dataSource: {},
      randSource: {}, updateCount: [], topSection: [], sumValue: 0, flag: false, index2: 0, points: 0
    };
  }
  componentDidMount() {
    var that = this;
    updateCount = {value: ''}
    topSection = {value: ''}
    // RandomNumber = Math.floor(Math.random() * 16) + 1 ;



    items = Array.apply(null, Array(16)).map((v, i) => {
      let topSection = this.state.topSection
        // if((i + 1) % 2 == 0){
            // if((RandomNumber % 2) == 0){
                // //console.log(RandomNumber)
                var a = Math.floor(Math.random() * 8) + 1 ;
                // while(a < 8){
                power = Math.pow(2, a)
                // }
                // var zero = 0
                topSection.push({value: 0})
                // return { id: i, src: 'http://placehold.it/200x200/FFB6C1/000000?text=' + power };
                return { id: i, src: 'http://placehold.it/200x200/FFB6C1/000000?text=' + "<>" };


            // }
        // }
        // else{
        //     return { id: i, src: 'http://placehold.it/200x200/FFB6C1/000000?text=' + '' };
        // }
      
    });
    that.setState({
      dataSource: items,
    });

    randItem = Array.apply(null, Array(2)).map((v, i) => {  
        var a = Math.floor(Math.random() * 8) + 1 ;
        let updateCount = this.state.updateCount

                // while(a < 8){
                power = Math.pow(2, a)
                // }
                // if((i == 2) || (i == 3)){
                //     // //console.log(i, 'Discard')
                //     return { id: i, src: 'http://placehold.it/200x200/FFB6C1/000000?text=' + "Discard" };

                // }
                // else{
                  // //console.log(i, 'Power')
                  // updateCount = {value:}
                  updateCount.push({value: power})
                  // //console.log(updateCount)
                  if(i == 1){
                    return { id: i, src: 'http://placehold.it/200x200/FFFF00/000000?text=' + power };
                  }
                  else{
                    return { id: i, src: 'http://placehold.it/200x200/FFB6C1/000000?text=' + power };
                  }

                // }
      });
    that.setState({
      randSource: randItem,
    });
  }
  
  sound(){
    // Import the react-native-sound module
var Sound = require('react-native-sound');
 
// Enable playback in silence mode
Sound.setCategory('Playback');
 
// Load the sound file 'whoosh.mp3' from the app bundle
// See notes below about preloading sounds within initialization code below.
var whoosh = new Sound('water.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    //console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  // //console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
 
  // Play the sound with an onEnd callback
  whoosh.play((success) => {
    if (success) {
      //console.log('successfully finished playing');
    } else {
      //console.log('playback failed due to audio decoding errors');
    }
  });

});
// whoosh.setNumberOfLoops(-1);

whoosh.release()
  }

  setAbove(i, sValue, topSection){
    var source = 'http://placehold.it/200x200/FFB6C1/000000?text=' + sValue
    var initialSource = ('http://placehold.it/200x200/FFB6C1/000000?text=' + "<>")

    // if( i >= 11 && i <= 15){
    //   if(items[i - 12].src == initialSource){
    //     items[i - 12].src = source
    //     topSection[i - 12].value = sValue 
    //     this.setState({ uri: source})
    //   }
    //   else if(items[i - 8].src == initialSource){
    //     items[i - 8].src = source
    //     topSection[i - 8].value = sValue 
    //     this.setState({ uri: source})
    //   }
    //   else if(items[i - 4].src == initialSource){
    //     items[i - 4].src = source
    //     topSection[i - 4].value = sValue 
    //     this.setState({ uri: source})
    //   }
    // }
    if(i >= 12 && i <= 15){
      if(items[i - 12].src != initialSource){
        if(items[i - 8].src != initialSource){
          if(items[i - 4].src != initialSource){
            //console.log("ALL GOOD")
          }
          else{
            items[i - 4].src = source
            topSection[i - 4].value = sValue 
            this.setState({ uri: source})
          }
        }
        else{
          items[i - 8].src = source
          topSection[i - 8].value = sValue 
          this.setState({ uri: source})
        }
      }
      else{
        items[i - 12].src = source
          topSection[i - 12].value = sValue 
          this.setState({ uri: source})
      }
    }
    else if(i >= 8 && i <= 11){
      if(items[i - 8].src != initialSource){
        if(items[i - 4].src != initialSource){
          //console.log("ALL GOOD")
        }
        else{
          items[i - 4].src = source
          topSection[i - 4].value = sValue 
          this.setState({ uri: source})
        }
      }
      else{
        items[i - 8].src = source
        topSection[i - 8].value = sValue 
        this.setState({ uri: source})
      }
    }
    else if(i >= 4 && i <= 7){
      if(items[i - 4].src != initialSource){
        //console.log("ALL GOOD")
      }
      else{
        items[i - 4].src = source
        topSection[i - 4].value = sValue 
        this.setState({ uri: source})
      }
    }
    
    // else if(items[i - 8].src == initialSource){
    //   items[i - 8].src = source
    //   topSection[i - 8].value = sValue 
    //   this.setState({ uri: source})
    // }
    // else if(items[i - 12].src == initialSource){
    //   items[i - 12].src = source
    //   topSection[i - 12].value = sValue 
    //   this.setState({ uri: source})
    // }
  }

  setBelow(i, sValue, topSection){

    // //console.log(i, sValue, items[i].id)
    var source = 'http://placehold.it/200x200/FFB6C1/000000?text=' + sValue
    var initialSource = ('http://placehold.it/200x200/FFB6C1/000000?text=' + "<>")
    // //console.log(items[i].value, "VALUEEEE")
    if(i == 0 || i == 1 || i == 2 || i == 3){
      if(items[i + 4].src != initialSource){
        if(items[i + 8].src != initialSource){
          if(items[i + 12].src != initialSource){
            Alert.alert("FULL")
          }
          else{
            items[i + 12].src = source
            topSection[i + 12].value = sValue 
            this.setState({ uri: source})
          }
        }
        else{
          items[i + 8].src = source 
          topSection[i + 8].value = sValue 
          this.setState({ uri: source})
        }
        
      }
      else{
        items[i + 4].src = source 
        topSection[i + 4].value = sValue 
        this.setState({ uri: source})
      }
    }
    else if(i == 4 || i == 5 || i == 6 || i == 7){
        
        if(items[i + 4].src != initialSource){
          if(items[i + 8].src != initialSource){
            Alert.alert("FULL")
          }else{
            items[i + 8].src = source 
            topSection[i + 8].value = sValue 
            this.setState({ uri: source})
          }
        }
        else{
          items[i + 4].src = source 
          topSection[i + 4].value = sValue 
          this.setState({ uri: source})
        }
    }
    else if(i == 8 || i == 9 || i == 10 || i == 11){
      if(items[i + 4].src != initialSource){
        Alert.alert("FULL")
      }else{
        items[i + 4].src = source 
        topSection[i + 4].value = sValue 
        this.setState({ uri: source})
      }
    }
    else if(i == 12 || i == 13 || i == 14 || i == 15){
      if(items[i].src != initialSource){
        Alert.alert("FULL")
      }
    }
    
    
    // //console.log(id, source)
    return source

  }

  slideValue(index2){
    var updateCount = this.state.updateCount
    var a = Math.floor(Math.random() * 8) + 1 ;
    var powerOf2 = Math.pow(2, a)
    // if(index2 == 3){
      updateCount[index2].value = updateCount[index2 - 1].value
      randItem[index2].src = randItem[index2 - 1].src

      updateCount[index2 - 1].value = powerOf2
      randItem[index2 - 1].src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + powerOf2
      // updateCount[index2 - 1].value = updateCount[index2 - 2].value
      // randItem[index2 - 1].src = randItem[index2 - 2].src

      // updateCount[index2 -2].value = updateCount[index2 - 3].value
      // randItem[index2 - 2].src = randItem[index2 - 3].src

      // updateCount[index2 - 3].value = powerOf2
      // randItem[index2 - 3].src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + powerOf2
    // }
    
    this.setState({index2: 0})
  }

  checkSum(){
    var topSection = this.state.topSection
    var points = this.state.points
    var initialSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + "<>"
    var newSum = 0
    
    for(var j = 4; j <= 15; j++){
      //console.log(items.length)
      if(j >= 4 && j <= 7){
        if(items[j - 4].src != initialSource){
          if(topSection[j - 4].value == topSection[j].value){
            newSum = topSection[j].value + topSection[j - 4].value
            //console.log(newSum, "New Sum")
            var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
            topSection[j - 4].value = newSum
            items[j - 4].src = newSource
    
            topSection[j].value = topSection[j + 4].value 
            items[j].src = items[j + 4].src

            topSection[j + 4].value = topSection[j + 8].value 
            items[j + 4].src = items[j + 8].src
            points = points + 1
            this.setState({points: points})
            // console.log("Points: ", points)
            this.checkSum()
          }
        }
      }
      if(j >= 8 && j <= 11){
        if(items[j - 4].src != initialSource){
          if(topSection[j - 4].value == topSection[j].value){
            newSum = topSection[j].value + topSection[j - 4].value
            //console.log(newSum, "New Sum")
            var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
            topSection[j - 4].value = newSum
            items[j - 4].src = newSource
    
            topSection[j].value = topSection[j + 4].value 
            items[j].src = items[j + 4].src

            topSection[j + 4].value = 0
            items[j + 4].src = initialSource
            points = points + 1
            this.setState({points: points})
            // console.log("Points: ", points)
            this.checkSum()
          }
        }
        // if(items[j - 8].src != initialSource){
        //   if(topSection[j - 8].value == topSection[j].value){
        //     newSum = topSection[j].value + topSection[j - 8].value
        //     //console.log(newSum, "New Sum")
        //     var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
        //     topSection[j - 8].value = newSum
        //     items[j - 8].src = newSource
    
        //     topSection[j - 4].value = topSection[j].value 
        //     items[j - 4].src = items[j].src

        //     topSection[j].value = topSection[j + 4].value 
        //     items[j].src = items[j + 4].src

        //     topSection[j + 4].value = 0 
        //     items[j + 4].src = initialSource
        //     points = points + 1
        //     this.setState({points: points})
        //     // console.log("Points: ", points)
        //     this.checkSum()
        //   }
        // }
      }
      if(j >= 12 && j <= 15){
        if(items[j - 4].src != initialSource){
          if(topSection[j - 4].value == topSection[j].value){
            newSum = topSection[j].value + topSection[j - 4].value
            //console.log(newSum, "New Sum")
            var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
            topSection[j - 4].value = newSum
            items[j - 4].src = newSource
    
            topSection[j].value = 0
            items[j].src = initialSource
            points = points + 1
            this.setState({points: points})
            // console.log("Points: ", points)
            this.checkSum()
          }
        }
        // if(items[j - 8].src != initialSource){
        //   if(topSection[j - 8].value == topSection[j].value){
        //     newSum = topSection[j].value + topSection[j - 8].value
        //     //console.log(newSum, "New Sum")
        //     var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
        //     topSection[j - 8].value = newSum
        //     items[j - 8].src = newSource
    
        //     topSection[j - 4].value = topSection[j].value 
        //     items[j - 4].src = items[j].src

        //     topSection[j].value = 0
        //     items[j].src = initialSource
        //     points = points + 1
        //     this.setState({points: points})
        //     // console.log("Points: ", points)
        //     this.checkSum()
        //   }
        // }
        // if(items[j - 12].src != initialSource){
        //   if(topSection[j - 12].value == topSection[j].value){
        //     newSum = topSection[j].value + topSection[j - 12].value
        //     //console.log(newSum, "New Sum")
        //     var newSource = 'http://placehold.it/200x200/FFB6C1/000000?text=' + newSum
    
        //     topSection[j - 12].value = newSum
        //     items[j - 12].src = newSource
    
        //     topSection[j - 8].value = topSection[j - 4].value 
        //     items[j - 8].src = items[j - 4].src

        //     topSection[j - 4].value = topSection[j].value 
        //     items[j - 4].src = items[j].src

        //     topSection[j].value = 0
        //     items[j].src = initialSource
        //     points = points + 1
        //     this.setState({points: points})
        //     // console.log("Points: ", points)
        //     this.checkSum();
        //   }
        // }
      }
      // if(sValue == cloneSum){
      //   topSection[j].value = 0
      //   items[j].src = initialSource
      //   //console.log("HELLO")
      //   this.setState({uri: initialSource})
      // }
      // newSum = 0
    }
    
  }

  render() {
    let topSection = this.state.topSection
    let updateCount = this.state.updateCount
    var sumValue = this.state.sumValue
    var flag = this.state.flag
    var index2 = this.state.index2
    var points = this.state.points
    // var whoosh = whoosh
    return (
      <View style={styles.MainContainer}>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1, borderColor: '#000000'}}>
                <TouchableOpacity onPress = {() => {
                  this.sound()
                  var initialSource = ('http://placehold.it/200x200/FFB6C1/000000?text=' + "<>")
                  var cleanSum = 0
                  // //console.log(randItem[index].id, "rand")
                  // var passValue = updateCount[index].value
                  // //console.log(index, "PASS VALUE")
                  var index1 = item.id
                  var val2 = topSection[index1].value
                  if(flag){
                    this.slideValue(index2)
                    let cloneSum = JSON.parse(JSON.stringify(this.state.sumValue))
                    // updateCount[index2].value = updateCount[index2 - 1].value
                    // randItem[index2].src = randItem[index2 - 1].src
                    // //console.log(updateCount[index2].value, "update count index")
                    if(item.src == initialSource){

                      if(item.id >= 0 && item.id <= 3){
                          item.src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + this.state.sumValue
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                      }
                      else if(item.id >= 4 && item.id <= 7){
                        if(items[item.id - 4].src == initialSource){
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false})  
                        }
                        else{
                          item.src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + this.state.sumValue
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                        }
                      }
                      
                      else if(item.id >= 8 && item.id <= 11){
                        if(items[item.id - 8].src != initialSource){
                          if(items[item.id - 4].src != initialSource){
                            item.src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + this.state.sumValue
                            topSection[index1].value = sumValue
                            this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                          }
                          else{
                            this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false}) 
                          }
                        }
                        else{
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false}) 
                        }
                      }

                      else if(item.id >= 12 && item.id <= 15){
                        if(items[item.id - 12].src != initialSource){
                          if(items[item.id - 8].src != initialSource){
                            if(items[item.id - 4].src != initialSource){
                              item.src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + this.state.sumValue
                              topSection[index1].value = sumValue
                              this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                            }
                            else{
                              this.setAbove(item.id, this.state.sumValue, topSection)
                            this.setState({sumValue: cleanSum, flag: false}) 
                            } 
                          }
                          else{
                            this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false}) 
                          }
                        }
                        else{
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false}) 
                        }
                      }
                      this.checkSum(cloneSum, item.id, sumValue)
                    }
                    else{
                      // this.checkSum()
                      if(topSection[index1 + 4] == initialSource || (index1 >= 12 && index1 <= 15)){
                      if(this.state.sumValue == parseInt(val2)){
                        
                        var sum2 = this.state.sumValue + parseInt(val2)
                        topSection[index1].value = sum2
                        points = points + 1
                        this.setState({sumValue: sum2}, () => {
                          // //console.log(sum2, ',,,,,')
                          // Alert.alert("SUM OF NUMBER ", sum2.toString())
                          item.src = 'http://placehold.it/200x200/FFB6C1/000000?text=' + sum2
                          this.setState({uri: item.src, points: points})
                        })
                        // this.checkSum()
                      }
                      }
                      else{
                        // //console.log(items[item.id].src)
                        this.setBelow(item.id, this.state.sumValue, topSection)      
                      }
                    
                     //console.log(JSON.parse(JSON.stringify(cloneSum)), 'clone')
                      cleanSum = 0;
                      // this.checkSum()
                      this.setState({sumValue: cleanSum, flag: false, index2: cleanSum})
                      // this.checkSum()
                    }
                    // this.checkSum()
                    // this.checkSum(initialSource, item.id)
                  }


                  // Alert.alert(val2 + val1, "SUM")
                  // this.sum
                  // console.log("Points: ",points)
                }}>
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
                <TouchableOpacity onPress={() => {
                  var index = item.id
                  // this.setState({flag: false})
                  // let val1 = this.randCard(index)
                  // let sumValue = this.state.sumValue
                    var val1 = updateCount[index].value
                    if(!flag){
                      if(index == 1){
                        this.checkSum()
                        console.log("Final Points: ",points)

                        var sum = this.state.sumValue + parseInt(val1)
                        var passIndex = this.state.index2 + index
                        // updateCount[index].value = updateCount[index - 1].value
                        // randItem[index].src = randItem[index - 1].src
                        this.setState({sumValue: this.state.sumValue + sum, flag: true, updateCount : this.state.updateCount, index2 : this.state.index2 + passIndex})
                          // //console.log(index, updateCount[index - 1].value, ',,,,,')
                      }
                   
                  }
                  

                  // })
                  
                }}>
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
    // backgroundColor: "#FFB6C1"
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    // borderColor: '#000000'
    // backgroundColor: "#FFB6C1",
  },
});