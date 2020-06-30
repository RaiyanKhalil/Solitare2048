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
      randSource: {}, updateCount: [], topSection: [], sumValue: 0, flag: false
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
                // console.log(RandomNumber)
                var a = Math.floor(Math.random() * 8) + 1 ;
                // while(a < 8){
                power = Math.pow(2, a)
                // }
                topSection.push({value: power})
                // return { id: i, src: 'http://placehold.it/200x200?text=' + power };
                return { id: i, src: 'http://placehold.it/200x200?text=' + "<>" };


            // }
        // }
        // else{
        //     return { id: i, src: 'http://placehold.it/200x200?text=' + '' };
        // }
      
    });
    that.setState({
      dataSource: items,
    });

    randItem = Array.apply(null, Array(4)).map((v, i) => {  
        var a = Math.floor(Math.random() * 8) + 1 ;
        let updateCount = this.state.updateCount

                // while(a < 8){
                power = Math.pow(2, a)
                // }
                if((i == 2) || (i == 3)){
                    // console.log(i, 'Discard')
                    return { id: i, src: 'http://placehold.it/200x200?text=' + "Discard" };

                }
                else{
                  // console.log(i, 'Power')
                  // updateCount = {value:}
                  updateCount.push({value: power})
                  // console.log(updateCount)
                  return { id: i, src: 'http://placehold.it/200x200?text=' + power };

                }
      });
    that.setState({
      randSource: randItem,
    });
  }
  
  setAbove(i, sValue, topSection){
    var source = 'http://placehold.it/200x200?text=' + sValue
    var initialSource = ('http://placehold.it/200x200?text=' + "<>")

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
            console.log("ALL GOOD")
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
          console.log("ALL GOOD")
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
        console.log("ALL GOOD")
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

    // console.log(i, sValue, items[i].id)
    var source = 'http://placehold.it/200x200?text=' + sValue
    var initialSource = ('http://placehold.it/200x200?text=' + "<>")
    // console.log(items[i].value, "VALUEEEE")
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
    
    
    // console.log(id, source)
    return source

  }
  render() {
    let topSection = this.state.topSection
    let updateCount = this.state.updateCount
    var sumValue = this.state.sumValue
    var flag = this.state.flag
    return (
      <View style={styles.MainContainer}>
        
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity onPress = {() => {
                  var initialSource = ('http://placehold.it/200x200?text=' + "<>")
                  var cleanSum = 0

                  var index1 = item.id
                  var val2 = topSection[index1].value
                  if(flag){
                    if(item.src == initialSource){

                      // if(items[item.id - 4].src == initialSource){
                      //   //To check the pressed index
                      //   if(index1 >= 4 && index1 <= 7){
                      //     //To check if the above index is empty 
                      //     if(items[item.id - 4].src == initialSource){
                      //       this.setAbove(item.id, this.state.sumValue, topSection)
                      //       this.setState({sumValue: cleanSum, flag: false})  
                      //     }
                      //   }
                      //   else if(index1 >= 8 && index1 <= 11){
                      //     if(items[item.id - 8].src == initialSource){
                      //       this.setAbove(item.id, this.state.sumValue, topSection)
                      //       this.setState({sumValue: cleanSum, flag: false})
                      //     }
                      //   }
                      //   else if(index1 >= 12 && index1 <= 15){
                      //     if(items[item.id - 12].src == initialSource){
                      //       this.setAbove(item.id, this.state.sumValue, topSection)
                      //       this.setState({sumValue: cleanSum, flag: false})
                      //     }
                      //   }
                      // }
                      if(item.id >= 0 && item.id <= 4){
                          item.src = 'http://placehold.it/200x200?text=' + this.state.sumValue
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                      }
                      else if(item.id >= 4 && item.id <= 7){
                        if(items[item.id - 4].src == initialSource){
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({sumValue: cleanSum, flag: false})  
                        }
                        else{
                          item.src = 'http://placehold.it/200x200?text=' + this.state.sumValue
                          topSection[index1].value = sumValue
                          this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                        }
                      }
                      
                      else if(item.id >= 8 && item.id <= 11){
                        if(items[item.id - 8].src != initialSource){
                          if(items[item.id - 4].src != initialSource){
                            item.src = 'http://placehold.it/200x200?text=' + this.state.sumValue
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
                              item.src = 'http://placehold.it/200x200?text=' + this.state.sumValue
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
                      
                      // if(items[item.id - 4].src == initialSource || items[item.id - 8].src == initialSource || items[item.id - 12].src == initialSource || items[item.id].src == initialSource){
                        
                      //   this.setAbove(item.id, this.state.sumValue, topSection)
                      //   this.setState({sumValue: cleanSum, flag: false})
                      // }
                      // else{
                      //   item.src = 'http://placehold.it/200x200?text=' + this.state.sumValue
                      //   topSection[index1].value = sumValue
                      //   this.setState({uri: item.src, sumValue: cleanSum, flag:false}) 
                      // }
                    }
                    else{
                      // console.log("MATCHES", parseInt(val2))
                      // if(items[item.id - 4].src == )

                      if(this.state.sumValue == parseInt(val2)){
                        
                        var sum2 = this.state.sumValue + parseInt(val2)
                        topSection[index1].value = sum2
                        this.setState({sumValue: sum2}, () => {
                          // console.log(sum2, ',,,,,')
                          // Alert.alert("SUM OF NUMBER ", sum2.toString())
                          item.src = 'http://placehold.it/200x200?text=' + sum2
                          this.setState({uri: item.src})
                        })
                      }
                      else{
                        // console.log(items[item.id].src)
                        this.setBelow(item.id, this.state.sumValue, topSection)      
                      }
                    
                     
                      cleanSum = 0;
                      this.setState({sumValue: cleanSum, flag: false})
                    }
                    
                  }
                
                 
                  

                  // Alert.alert(val2 + val1, "SUM")
                  // this.sum
                }}>
                <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                </TouchableOpacity>
              
            </View>
          )}
          //Setting the number of column
          numColumns={4}
          keyExtractor={(item, index) => index.toString()}
        />
       <Button 
      title = "ADD"
      onPress={this.sum}></Button>
      <View>
     
      
      <FlatList
          data={this.state.randSource}
          renderItem={({ item }) => (
            <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                <TouchableOpacity onPress={() => {
                  var index = item.id
                  // let val1 = this.randCard(index)
                  // let sumValue = this.state.sumValue
                    var val1 = updateCount[index].value
                    if(!flag){
                    var sum = this.state.sumValue + parseInt(val1)
                    this.setState({sumValue: this.state.sumValue + sum, flag: true})
                      // console.log(sum, ',,,,,')
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
  },
  imageThumbnail: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});