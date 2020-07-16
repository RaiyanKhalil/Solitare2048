import React, { Component } from 'react';
//import rect in our project
import {
  StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions
} from 'react-native';
//import all the components we will need
let randItem, items
var RandomNumber, power, discardCount = 0
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
                // return { id: i, src:  power };
                return { id: i, src: "                        " };
                // return { id: i, src: '১০২৪' };


            // }
        // }
        // else{
        //     return { id: i, src:  '' };
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
                //     return { id: i, src:  "Discard" };

                // }
                // else{
                  // //console.log(i, 'Power')
                  // updateCount = {value:}
                  updateCount.push({value: power})
                  // if(power == 2){
                  //  console.log('২')
                  //   // var powerBangla = '২'
                  // }
                  // //console.log(updateCount)
                  if(i == 1){
                    return { id: i, src: this.banglaConverter(power) };
                  }
                  else{
                    return { id: i, src:  this.banglaConverter(power) };
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
      console.log('successfully finished playing');
    } else {
      console.log('playback failed due to audio decoding errors');
    }
  });

});
// whoosh.setNumberOfLoops(-1);
whoosh.release()
  }

  banglaConverter(sValue){
    var source 
    if(sValue == 2){
      source = '  ২  '
    }
    else if(sValue == 4){
      source = '  ৪  '
    }
    else if(sValue == 8){
      source = '  ৮  '
    }
    else if(sValue == 16){
      source = '  ১৬  '
    }
    else if(sValue == 32){
      source = '  ৩২  '
    }
    else if(sValue == 64){
      source = '  ৬৪  '
    }
    else if(sValue == 128){
      source = '  ১২৮  '
    }
    else if(sValue == 256){
      source = '  ২৫৬  '
    }
    else if(sValue == 512){
      source = '  ৫১২  '
    }
    else if(sValue == 1024){
      source = ' ১০২৪ '
    }
    else if(sValue == 2048){
      source = ' ২০৪৮ '
    }
    return source
  }

  setAbove(i, sValue, topSection){
     
    var initialSource = "                        "
    var source = this.banglaConverter(sValue)

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
    
  }

  setBelow(i, sValue, topSection){

    var source =  this.banglaConverter(sValue)
    var initialSource = "                        "
    // var flag = this.state.flag

    if(i == 0 || i == 1 || i == 2 || i == 3){
      if(items[i + 4].src != initialSource){
        if(items[i + 8].src != initialSource){
          if(items[i + 12].src != initialSource){
            // Alert.alert("FULL")
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
            // Alert.alert("FULL")
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
        // Alert.alert("FULL")
      }else{
        items[i + 4].src = source 
        topSection[i + 4].value = sValue 
        this.setState({ uri: source})
      }
    }
    else if(i == 12 || i == 13 || i == 14 || i == 15){
      if(items[i].src != initialSource){
        // Alert.alert("FULL")
        // this.setState({flag: true})
      }
    }
    return source
  }

  slideValue(index2){
    var updateCount = this.state.updateCount
    var a = Math.floor(Math.random() * 8) + 1 ;
    var powerOf2 = Math.pow(2, a)
    // if(index2 == 3){
      updateCount[index2].value = updateCount[index2 - 1].value
      //Doubt
      randItem[index2].src = (randItem[index2 - 1].src)

      updateCount[index2 - 1].value = powerOf2
      randItem[index2 - 1].src =  this.banglaConverter(powerOf2)
    
    this.setState({index2: 0})
  }

  checkSum(){
    var topSection = this.state.topSection
    var points = this.state.points
    var initialSource = "                        "
    var newSum = 0
    console.log("CHECK SUM")
    
    for(var j = 4; j <= 15; j++){
      //console.log(items.length)
      if(j >= 4 && j <= 7){
        if(items[j - 4].src != initialSource){
          if(topSection[j - 4].value == topSection[j].value){
            newSum = topSection[j].value + topSection[j - 4].value
            //console.log(newSum, "New Sum")
            var newSource =  this.banglaConverter(newSum)
    
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
            var newSource =  this.banglaConverter(newSum)
    
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
        
      }
      if(j >= 12 && j <= 15){
        if(items[j - 4].src != initialSource){
          if(topSection[j - 4].value == topSection[j].value){
            newSum = topSection[j].value + topSection[j - 4].value
            //console.log(newSum, "New Sum")
            var newSource =  this.banglaConverter(newSum)
    
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
    }
    
  }
  
}

discard(){
var updateCount = this.state.updateCount
// var discardCount = this.state.discardCount
var a = Math.floor(Math.random() * 8) + 1 ;
var powerOf2 = Math.pow(2, a)

updateCount[1].value = updateCount[0].value
updateCount[0].value = powerOf2

randItem[1].src = randItem[0].src
randItem[0].src = this.banglaConverter(powerOf2)

discardCount = discardCount + 1
// Alert.alert(JSON.stringify(this.state.discardCount))
this.setState({uri: randItem[0].src})
}

gameOver(){
  var initialSource = "                        "
  var topSection = this.state.topSection
  var updateCount = this.state.updateCount
  var count = 0
  for(var j = 12; j <= 15; j++){
    if(items[j].src != initialSource){
      if(topSection[j].value != updateCount[1].value){
        count += 1
        console.log("DIDN'T MATCH")
      }
    }
  }
  if(count == 4){
    return true
  }
  else{
    return false
  }
}

  render() {
    let topSection = this.state.topSection
    let updateCount = this.state.updateCount
    var sumValue = this.state.sumValue
    var flag = this.state.flag
    var index2 = this.state.index2
    var points = this.state.points
    // var discardCount = this.state.discardCount
    // var whoosh = whoosh

    return (
      <View>
        <View style = {{paddingTop: 35}}>
              <Text style = {{fontSize: 30, fontWeight: "bold", alignItems: "center", textAlign: "center", textAlignVertical: "center", bottom: 20}}>
                Points: {this.state.points}       Discarded: {discardCount}
              </Text>
        </View>
        {/* Gameboard Section */}
        <View>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={styles.item}>
                <TouchableOpacity onPress = {() => {
                  this.sound()
                  var initialSource = ( "                        ")
                  var cleanSum = 0
                  var index1 = item.id
                  var val2 = topSection[index1].value

                  if(flag){
                    // this.slideValue(index2)
                    let cloneSum = JSON.parse(JSON.stringify(this.state.sumValue))
                    
                    //Checks if pressed index matches with                         
                    if(item.src == initialSource){
                      this.slideValue(index2)

                      //Finding out the pressed index and checks if it is empty
                      if(item.id >= 0 && item.id <= 3){
                          item.src =  this.banglaConverter(this.state.sumValue)
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                      }
                      else if(item.id >= 4 && item.id <= 7){
                        if(items[item.id - 4].src == initialSource){
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false})  
                        }
                        else{
                          item.src =  this.banglaConverter(this.state.sumValue)
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                        }
                      }
                      
                      else if(item.id >= 8 && item.id <= 11){
                        if(items[item.id - 8].src != initialSource){
                          if(items[item.id - 4].src != initialSource){
                            item.src =  this.banglaConverter(this.state.sumValue)
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
                              item.src =  this.banglaConverter(this.state.sumValue)
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
                      //Checks if the box below is empty OR if the index is within the range of 12 and 15
                      if(topSection[index1 + 4] == initialSource || (index1 >= 12 && index1 <= 15)){
                        
                        //If the selected value from the "Random Section" is equal to the existing number on the Gameboard
                      if(this.state.sumValue == parseInt(val2)){
                        this.slideValue(index2)

                        var sum2 = this.state.sumValue + parseInt(val2)
                        topSection[index1].value = sum2
                        points = points + 1
                        this.setState({sumValue: sum2}, () => {
                          item.src =  this.banglaConverter(sum2)
                          this.setState({uri: item.src, points: points})
                        })
                      }
                      }
                      else{
                        this.setBelow(item.id, this.state.sumValue, topSection)      
                      }
                    
                      cleanSum = 0;
                      this.setState({sumValue: cleanSum, flag: false, index2: cleanSum})
                    }
                  }
                  if(this.gameOver() && discardCount > 3){
                    Alert.alert("GAME OVER")
                  }
                //   if(item.src == 2){item.src = "২"
                // this.setState({uri: item.src})}
                // if(items[index1].src == 2){
                  // items[index1].src = "২"
                  // item.src = "২"
                  // this.setState({uri: item.src})
                // }
                }}>
                  
                <Text style = {styles.itemText}>{item.src}</Text>
                </TouchableOpacity>
              
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
    </View>


      {/* Random Number generator section */}
       <View style = {{paddingTop: 60}}>
      <FlatList
          data={this.state.randSource}
          renderItem={({ item }) => (
            <View style={styles.item2}>
                <TouchableOpacity onPress={() => {
                  var index = item.id
                    var val1 = updateCount[index].value
                    if(!flag ){
                      if(index == 1){
                        this.checkSum()
                        console.log("Final Points: ",points)
                          var sum = this.state.sumValue + parseInt(val1)
                          var passIndex = this.state.index2 + index
                          this.setState({sumValue: sum, flag: true, updateCount : this.state.updateCount, index2 : this.state.index2 + passIndex})
                        
                        
                      }
                   
                  }
                  

                  // })
                  
                }}
                onLongPress= {() => {
                  // var jsonDiscardCount = JSON.stringify(discardCount)
                  this.setState({flag: false, sumValue: 0, index2 : 0})
                  if(item.id == 1 && discardCount <= 3){
                    this.discard()
                  }
                  else if(discardCount > 3){
                    Alert.alert("DISCARD LIMIT HAS BEEN REACHED")
                    // this.gameOver()
                  }
                  // else if(this.gameOver()){
                  //   Alert.alert("GAME OVER")
                  // }
                }}>
                <Text style = {styles.itemText2}>{item.src}</Text>
                </TouchableOpacity>
              
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(randItem, index) => index.toString()}
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
  itemText: {
    color: '#000000',
    fontSize: 34
  },
  itemText2: {
    color: '#fff',
    fontSize: 50
  },
  item: {
    backgroundColor: '#FF4500',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 4, // approximate a square
  },
  item2: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 3,
    height: Dimensions.get('window').width / 4, // approximate a square
    paddingTop: 0
  },
});