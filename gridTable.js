import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Image, TouchableOpacity, Alert, Button, Text, Dimensions, BackHandler } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType } from '@react-native-firebase/admob';


let randItem, items
var RandomNumber, power, discardCount = 4, addCount = 0

// Ad IDs
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const adUnitId2 = __DEV__ ? TestIds.BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});

//Ad function
function Ad() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const eventListener = interstitial.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        setLoaded(true);
      }
    });

    // Start loading the interstitial straight away
    // interstitial.load();

    // Unsubscribe from events on unmount
    return () => {
      eventListener();
    };
  }, []);

  // No advert ready to show yet
  if (!loaded) {
    return null;
  }

  return (
    <View>
      {interstitial.show()}
    </View>
  )
}
export default class GridTable extends Component {
  constructor() {
    super();
    this.backButtonClick = this.backButtonClick.bind(this);

    this.state = {
      dataSource: {},
      randSource: {}, updateCount: [], topSection: [], sumValue: 0, flag: false, index2: 0, points: 0, second: 30, flag2: false
    };

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitleStyle: {
        textAlign: "center",
        flex: 1
      },
      headerStyle: {
        backgroundColor: '#FFFFFF',
      },
      title: "২০৪৮",
      headerLeft: null
    }
  }

  _interval: any;

  //Function to start the timer and game on pressing the BLACK box
  onStart = () => {
    // var flag = this.state.flag
    const { navigate, state } = this.props.navigation
    var points = this.state.points
    this._interval = setInterval(() => {
      this.checkSum()
      this.setState({
        second: this.state.second - 1,

      })
      if (this.state.second == 0) {
        this.setState({
          second: 0, flag: true, flag2: false
        });
        // this.setState({flag: true})
        clearInterval(this._interval);
        Alert.alert(
          'খেলা শেষ',
          ' ',
          [
            {
              text: 'CONTINUE', onPress: () => navigate(
                "Over", { points: this.state.points }
              )
            },

            // {text: 'বন্ধু', onPress: () => this.props.navigation.navigate('NewKeyboard', {reload:this.props.navigation.getParam("reload"), gameName: this.state.text, value: this.state.gametype,bot:false})}

          ],
          { cancelable: false })
        { interstitial.show() }

       

      }
    }, 1000);
  }
  componentDidMount() {
    var that = this;
    var second = this.state.second
    var points = this.state.points
    updateCount = { value: '' }
    topSection = { value: '' }
    // RandomNumber = Math.floor(Math.random() * 16) + 1 ;
    interstitial.load();
    BackHandler.addEventListener('hardwareBackPress', this.backButtonClick);


    discardCount = 4
    // this.advert
    items = Array.apply(null, Array(16)).map((v, i) => {
      let topSection = this.state.topSection
  
      var a = Math.floor(Math.random() * 8) + 1;
      power = Math.pow(2, a)
  
      topSection.push({ value: 0 })
      return { id: i, src: "                        " };

    });
    that.setState({
      dataSource: items,
    });

    randItem = Array.apply(null, Array(2)).map((v, i) => {
      var a = Math.floor(Math.random() * 8) + 1;
      let updateCount = this.state.updateCount

      power = Math.pow(2, a)
      
      updateCount.push({ value: power })
   
      if (i == 1) {
        return { id: i, src: this.banglaConverter(power) };
      }
      else {
        return { id: i, src: this.banglaConverter(power) };
      }

    });
    that.setState({
      randSource: randItem,
    });
  }

  backButtonClick() {
    clearInterval(this._interval);
    this.props.navigation.navigate('Basic');
    return true;
  }

  //Function for sound
  sound() {

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

  //Converts English numbers to Bangla
  banglaConverter(sValue) {
    var source
    if (sValue == 2) {
      source = '  ২  '
    }
    else if (sValue == 4) {
      source = '  ৪  '
    }
    else if (sValue == 8) {
      source = '  ৮  '
    }
    else if (sValue == 16) {
      source = '  ১৬  '
    }
    else if (sValue == 32) {
      source = '  ৩২  '
    }
    else if (sValue == 64) {
      source = '  ৬৪  '
    }
    else if (sValue == 128) {
      source = '  ১২৮  '
    }
    else if (sValue == 256) {
      source = '  ২৫৬  '
    }
    else if (sValue == 512) {
      source = '  ৫১২  '
    }
    else if (sValue == 1024) {
      source = '১০২৪'
    }
    else if (sValue == 2048) {
      source = '২০৪৮'
    }
    return source
  }

  //Sets the number in the top most possible position
  setAbove(i, sValue, topSection) {

    var initialSource = "                        "
    var source = this.banglaConverter(sValue)

    if (i >= 12 && i <= 15) {
      if (items[i - 12].src != initialSource) {
        if (items[i - 8].src != initialSource) {
          if (items[i - 4].src != initialSource) {
            //console.log("ALL GOOD")
          }
          else {
            items[i - 4].src = source
            topSection[i - 4].value = sValue
            this.setState({ uri: source })
          }
        }
        else {
          items[i - 8].src = source
          topSection[i - 8].value = sValue
          this.setState({ uri: source })
        }
      }
      else {
        items[i - 12].src = source
        topSection[i - 12].value = sValue
        this.setState({ uri: source })
      }
    }
    else if (i >= 8 && i <= 11) {
      if (items[i - 8].src != initialSource) {
        if (items[i - 4].src != initialSource) {
          //console.log("ALL GOOD")
        }
        else {
          items[i - 4].src = source
          topSection[i - 4].value = sValue
          this.setState({ uri: source })
        }
      }
      else {
        items[i - 8].src = source
        topSection[i - 8].value = sValue
        this.setState({ uri: source })
      }
    }
    else if (i >= 4 && i <= 7) {
      if (items[i - 4].src != initialSource) {
        //console.log("ALL GOOD")
      }
      else {
        items[i - 4].src = source
        topSection[i - 4].value = sValue
        this.setState({ uri: source })
      }
    }

  }

  //Sets number below the other number in the same column
  setBelow(i, sValue, topSection) {

    var source = this.banglaConverter(sValue)
    var initialSource = "                        "
    var index2 = this.state.index2
    // var flag = this.state.flag

    if (i == 0 || i == 1 || i == 2 || i == 3) {
      if (items[i + 4].src != initialSource) {
        if (items[i + 8].src != initialSource) {
          if (items[i + 12].src != initialSource) {
            // Alert.alert("FULL")
          }
          else {
            items[i + 12].src = source
            topSection[i + 12].value = sValue
            this.setState({ uri: source })
            this.slideValue(index2)
          }
        }
        else {
          items[i + 8].src = source
          topSection[i + 8].value = sValue
          this.setState({ uri: source })
          this.slideValue(index2)
        }

      }
      else {
        items[i + 4].src = source
        topSection[i + 4].value = sValue
        this.setState({ uri: source })
        this.slideValue(index2)
      }
    }
    else if (i == 4 || i == 5 || i == 6 || i == 7) {

      if (items[i + 4].src != initialSource) {
        if (items[i + 8].src != initialSource) {
          // Alert.alert("FULL")
        } else {
          items[i + 8].src = source
          topSection[i + 8].value = sValue
          this.setState({ uri: source })
          this.slideValue(index2)
        }
      }
      else {
        items[i + 4].src = source
        topSection[i + 4].value = sValue
        this.setState({ uri: source })
        this.slideValue(index2)
      }
    }
    else if (i == 8 || i == 9 || i == 10 || i == 11) {
      if (items[i + 4].src != initialSource) {
        // Alert.alert("FULL")
      } else {
        items[i + 4].src = source
        topSection[i + 4].value = sValue
        this.setState({ uri: source })
        this.slideValue(index2)
      }
    }
    else if (i == 12 || i == 13 || i == 14 || i == 15) {
      if (items[i].src != initialSource) {
        // Alert.alert("FULL")
        // this.setState({flag: true})
      }
    }
    return source
  }

  //Slide value function slides the next playable number from the GRAY box to the BLACK box
  slideValue(index2) {
    var updateCount = this.state.updateCount
    var a = Math.floor(Math.random() * 8) + 1;
    var powerOf2 = Math.pow(2, a)
    // if(index2 == 3){
    updateCount[index2].value = updateCount[index2 - 1].value
    //Doubt
    randItem[index2].src = (randItem[index2 - 1].src)

    updateCount[index2 - 1].value = powerOf2
    randItem[index2 - 1].src = this.banglaConverter(powerOf2)

    this.setState({ index2: 0 })
  }

  //Check sum function to check and add numbers repeatedly, each second.
  checkSum() {
    var topSection = this.state.topSection
    var points = this.state.points
    var initialSource = "                        "
    var newSum = 0
    var second = this.state.second
    var index2 = this.state.index2
    // console.log("CHECK SUM")

    for (var j = 4; j <= 15; j++) {
      //console.log(items.length)
      if (j >= 4 && j <= 7) {
        if (items[j - 4].src != initialSource) {
          if (topSection[j - 4].value == topSection[j].value) {
            newSum = topSection[j].value + topSection[j - 4].value
            //To set the max limit to 2048
            if (newSum > 2048) {
              newSum = 2048
            }
            var newSource = this.banglaConverter(newSum)
            // this.slideValue(index2)
            // addCount = addCount + 1
            // console.log(addCount, "ADD COUNT")
            if (discardCount < 4) {
              addCount = addCount + 1
              if (addCount >= 4) {
                discardCount = discardCount + 1
                addCount = 0
                console.log(addCount, 'should be zero')
              }
            }


            topSection[j - 4].value = newSum
            items[j - 4].src = newSource

            topSection[j].value = topSection[j + 4].value
            items[j].src = items[j + 4].src

            topSection[j + 4].value = topSection[j + 8].value
            items[j + 4].src = items[j + 8].src
            points = points + 1
            this.setState({ points: points, second: this.state.second + 5 })
            // console.log("Points: ", points)
            this.checkSum()
          }
        }
      }
      if (j >= 8 && j <= 11) {
        if (items[j - 4].src != initialSource) {
          if (topSection[j - 4].value == topSection[j].value) {
            newSum = topSection[j].value + topSection[j - 4].value
            //To set the max limit to 2048
            if (newSum > 2048) {
              newSum = 2048
            }
            //console.log(newSum, "New Sum")
            var newSource = this.banglaConverter(newSum)
           
           
            if (discardCount < 4) {
              addCount = addCount + 1
              if (addCount >= 4) {
                discardCount = discardCount + 1
                addCount = 0
                console.log(addCount, 'should be zero')
              }
            }

            topSection[j - 4].value = newSum
            items[j - 4].src = newSource

            topSection[j].value = topSection[j + 4].value
            items[j].src = items[j + 4].src

            topSection[j + 4].value = 0
            items[j + 4].src = initialSource
            points = points + 1
            this.setState({ points: points, second: this.state.second + 5 })
            // console.log("Points: ", points)
            this.checkSum()
          }
        }

      }
      if (j >= 12 && j <= 15) {
        if (items[j - 4].src != initialSource) {
          if (topSection[j - 4].value == topSection[j].value) {
            newSum = topSection[j].value + topSection[j - 4].value
            //To set the max limit to 2048
            if (newSum > 2048) {
              newSum = 2048
            }
            var newSource = this.banglaConverter(newSum)
          
            if (discardCount < 4) {
              addCount = addCount + 1
              if (addCount >= 4) {
                discardCount = discardCount + 1
                addCount = 0
                console.log(addCount, 'should be zero')
              }
            }

            topSection[j - 4].value = newSum
            items[j - 4].src = newSource

            topSection[j].value = 0
            items[j].src = initialSource
            points = points + 1
            this.setState({ points: points, second: this.state.second + 5 })
            // console.log("Points: ", points)
            this.checkSum()
          }
        }
      }

    }

  }

  //Discard function
  discard() {
    var updateCount = this.state.updateCount
    // var discardCount = this.state.discardCount
    var a = Math.floor(Math.random() * 8) + 1;
    var powerOf2 = Math.pow(2, a)

    updateCount[1].value = updateCount[0].value
    updateCount[0].value = powerOf2

    randItem[1].src = randItem[0].src
    randItem[0].src = this.banglaConverter(powerOf2)

    discardCount = discardCount - 1
    // Alert.alert(JSON.stringify(this.state.discardCount))
    this.setState({ uri: randItem[0].src })
  }

  //Game Over function
  gameOver() {
    var initialSource = "                        "
    var topSection = this.state.topSection
    var updateCount = this.state.updateCount
    var count = 0
    for (var j = 12; j <= 15; j++) {
      if (items[j].src != initialSource) {
        if (topSection[j].value != updateCount[1].value) {
          count += 1
          console.log("DIDN'T MATCH")
        }
      }
    }
    if (count == 4) {
      return true
    }
    else {
      return false
    }
  }

  bannerError(e) {
    alert(e);
  }

  //Alerts Player when game is over
  gameOverAlert() {
    const { navigate, state } = this.props.navigation
    var points = this.state.points

    Alert.alert(
      'খেলা শেষ',
      ' ',
      [
        {
          text: 'CONTINUE', onPress: () => navigate(
            "Over", { points: this.state.points }
          )
        },

        // {text: 'বন্ধু', onPress: () => this.props.navigation.navigate('NewKeyboard', {reload:this.props.navigation.getParam("reload"), gameName: this.state.text, value: this.state.gametype,bot:false})}

      ],
      { cancelable: false })
    { interstitial.show() }
  }

  getTextStyle(id) {
    if (id == 1) {
      return {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / 4, // approximate a square
        paddingTop: 0,
        borderRadius: 30
      }
    } else if(id == 0){
      return {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / 4, // approximate a square
        paddingTop: 0,
        borderRadius: 30
      }
    }
    else if(id == 2){
      return {
        backgroundColor: '#FFFF00',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / 4, // approximate a square
        paddingTop: 0,
        borderRadius: 30
      }
    }
    else if(id == 3){
      return {
        backgroundColor: '#C0C0C0',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / 4, // approximate a square
        paddingTop: 0,
        borderRadius: 30
      }
    }
  }

  getTimeStyle(time){
    if(time <= 10){
      return{
        textAlign: 'center',
        height: 50,
        width: 50,
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 20,
        backgroundColor: "#FF0000",
        fontSize: 23, fontWeight: "bold",
        textAlignVertical: "center"
      }
    }
    else if(time >= 100){
      return{
        textAlign: 'center',
        height: 50,
        width: 50,
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 20,
        backgroundColor: "#00FF00",
        fontSize: 23, fontWeight: "bold",
        textAlignVertical: "center"
      }
    }
    else{
      return{
        textAlign: 'center',
        height: 50,
        width: 50,
        borderWidth: 5,
        borderColor: '#000000',
        borderRadius: 20,
        backgroundColor: "#FFFF00",
        fontSize: 23, fontWeight: "bold",
        textAlignVertical: "center"
      }
    }
  }


  render() {
    let topSection = this.state.topSection
    let updateCount = this.state.updateCount
    var sumValue = this.state.sumValue
    var flag = this.state.flag
    var flag2 = this.state.flag2
    var index2 = this.state.index2
    var points = this.state.points
    var second = this.state.second

    const { navigate, state } = this.props.navigation

    return (
      <View>
        {/* <Ad /> */}
        <View>
        {/* <BannerAd unitId={TestIds.BANNER} /> */}
        <BannerAd
          unitId={adUnitId2}
          size={BannerAdSize.SMART_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,

          }}
        />
        </View>
        {/* <View style={{ top: 10}}>  */}
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 23, fontWeight: "bold", alignItems: "center", textAlign: "center", textAlignVertical: "center", bottom: 0, flex: 1 }}>
            পয়েন্ট: {this.state.points}
          </Text>
          <View style={{
            // flex: 1,
            // flexDirection: 'row',
            margin: 0
          }}>
            <Text style={this.getTimeStyle(this.state.second)}>{this.state.second}</Text>
          </View>
          <Text style={{ fontSize: 23, fontWeight: "bold", alignItems: "center", textAlign: "center", textAlignVertical: "center", bottom: 0, flex: 1 }}>
          বাতিল: {discardCount}
          </Text>
        </View>
      
      {/* </View> */}
        {/* Gameboard Section */}
        <View style={{ top: 0 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => {
                  this.sound()
                  // this.checkSum()
                  var initialSource = ("                        ")
                  var cleanSum = 0
                  var index1 = item.id
                  var val2 = topSection[index1].value

                  if (flag && flag2) {
                    // this.slideValue(index2)
                    let cloneSum = JSON.parse(JSON.stringify(this.state.sumValue))

                    //Checks if pressed index matches with                         
                    if (item.src == initialSource) {
                      this.slideValue(index2)

                      //Finding out the pressed index and checks if it is empty
                      if (item.id >= 0 && item.id <= 3) {
                        item.src = this.banglaConverter(this.state.sumValue)
                        topSection[index1].value = sumValue
                        this.setState({ uri: item.src, sumValue: cleanSum, flag: false })
                      }
                      else if (item.id >= 4 && item.id <= 7) {
                        if (items[item.id - 4].src == initialSource) {
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({ sumValue: cleanSum, flag: false })
                        }
                        else {
                          item.src = this.banglaConverter(this.state.sumValue)
                          topSection[index1].value = sumValue
                          this.setState({ uri: item.src, sumValue: cleanSum, flag: false })
                        }
                      }

                      else if (item.id >= 8 && item.id <= 11) {
                        if (items[item.id - 8].src != initialSource) {
                          if (items[item.id - 4].src != initialSource) {
                            item.src = this.banglaConverter(this.state.sumValue)
                            topSection[index1].value = sumValue
                            this.setState({ uri: item.src, sumValue: cleanSum, flag: false })
                          }
                          else {
                            this.setAbove(item.id, this.state.sumValue, topSection)
                            this.setState({ sumValue: cleanSum, flag: false })
                          }
                        }
                        else {
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({ sumValue: cleanSum, flag: false })
                        }
                      }

                      else if (item.id >= 12 && item.id <= 15) {
                        if (items[item.id - 12].src != initialSource) {
                          if (items[item.id - 8].src != initialSource) {
                            if (items[item.id - 4].src != initialSource) {
                              item.src = this.banglaConverter(this.state.sumValue)
                              topSection[index1].value = sumValue
                              this.setState({ uri: item.src, sumValue: cleanSum, flag: false })
                            }
                            else {
                              this.setAbove(item.id, this.state.sumValue, topSection)
                              this.setState({ sumValue: cleanSum, flag: false })
                            }
                          }
                          else {
                            this.setAbove(item.id, this.state.sumValue, topSection)
                            this.setState({ sumValue: cleanSum, flag: false })
                          }
                        }
                        else {
                          this.setAbove(item.id, this.state.sumValue, topSection)
                          this.setState({ sumValue: cleanSum, flag: false })
                        }
                      }
                      // this.checkSum(cloneSum, item.id, sumValue)
                    }
                    else {
                      // this.slideValue(index2)
                      //Checks if the box below is empty OR if the index is within the range of 12 and 15
                      if (topSection[index1 + 4] == initialSource || (index1 >= 12 && index1 <= 15)) {

                        //If the selected value from the "Random Section" is equal to the existing number on the Gameboard
                        if (this.state.sumValue == parseInt(val2)) {
                          this.slideValue(index2)
                        
                          if (discardCount < 4) {
                            addCount = addCount + 1
                            if (addCount >= 4) {
                              discardCount = discardCount + 1
                              addCount = 0
                              console.log(addCount, 'should be zero')
                            }
                          }

                          var sum2 = this.state.sumValue + parseInt(val2)
                          if (sum2 > 2048) {
                            sum2 = 2048
                          }
                          topSection[index1].value = sum2
                          points = points + 1
                          this.setState({ sumValue: sum2, second: this.state.second + 5 }, () => {
                            item.src = this.banglaConverter(sum2)
                            this.setState({ uri: item.src, points: points })
                          })
                        }
                      }
                      else {
                        this.setBelow(item.id, this.state.sumValue, topSection)
                      }

                      cleanSum = 0;
                      this.setState({ sumValue: cleanSum, flag: false, index2: cleanSum })
                    }
                  }
                  if (this.gameOver() && discardCount == 0) {
                    // <Ad />
                    //When game is over time is set to ZERO so that time function (onStart) doesn't keep running
                    //This setState section will prevent the AD to render twice, as the show Ad function is also called in the time function
                    this.setState({ second: 0 }, () => {
                      clearInterval(this._interval);
                    })
                    //Shows Ad and Navigates to Game Over Page
                    this.gameOverAlert()
             
                  }
                }}>

                  <Text style={styles.itemText}>{item.src}</Text>
                </TouchableOpacity>

              </View>
            )}
            //Setting the number of column
            numColumns={4}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        {/* Random Number generator section */}
        <View style={{ paddingTop: 15, top: -10 }}>
          <FlatList
            data={this.state.randSource}
            renderItem={({ item }) => (
              <View style={this.getTextStyle(item.id)}>
                <TouchableOpacity onPress={() => {

                  var index = item.id
                  var val1 = updateCount[index].value
                  if (index == 1) {
                    if (!flag) {
                      if (!flag2) {
                        this.onStart()
                        this.setState({ flag2: true })
                      }
                      // <Ad />

                      // interstitial.show()

                      // this.checkSum()
                      console.log("Final Points: ", points)
                      var sum = this.state.sumValue + parseInt(val1)
                      var passIndex = this.state.index2 + index
                      this.setState({ sumValue: sum, flag: true, updateCount: this.state.updateCount, index2: this.state.index2 + passIndex })


                    }

                  }
                  if (discardCount == 0) {
                    if (this.gameOver()) {
                      // <Ad />
                      //When game is over time is set to ZERO so that time function (onStart) doesn't keep running
                      //This setState section will prevent the AD to render twice, as the show Ad function is also called in the time function
                      this.setState({ second: 0 }, () => {
                        clearInterval(this._interval);
                      })
                      this.gameOverAlert()

                    }
                  }


                  // })

                }}
                onPressOut  = {() => {
                 this.getTextStyle(3)
                }
              }
                  onLongPress={() => {
                    this.getTextStyle(4)
                    // var jsonDiscardCount = JSON.stringify(discardCount)
                    this.setState({ flag: false, sumValue: 0, index2: 0 })
                    if (item.id == 1 && discardCount > 0) {
                      this.discard()
                    }
                    else if (discardCount == 0) {
                      Alert.alert("বাতিল করার লিমিট শেষ")
                      if (this.gameOver()) {
                        // <Ad />
                        //When game is over time is set to ZERO so that time function (onStart) doesn't keep running
                        //This setState section will prevent the AD to render twice, as the show Ad function is also called in the time function
                        this.setState({ second: 0 }, () => {
                          clearInterval(this._interval);
                        })
                        //Shows Ad and Navigates to Game Over Page
                        this.gameOverAlert()
                      }
                      // this.gameOver()
                    }
                  }}>
                  <Text style={styles.itemText2}>{item.src}</Text>
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
    backgroundColor: '#FFB6C1',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
    height: Dimensions.get('window').width / 4, // approximate a square,
    borderRadius: 6
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
  secondText: {
    paddingTop: 15,
    fontSize: 30,
    fontWeight: "bold",
    // alignItems: "center", 
    textAlign: "center",
    textAlignVertical: "center",
    // bottom: 20
  },
  MainContainer1: {

    // Setting up View inside content in Vertically center.
    // justifyContent: 'center',
    // flex: 1,
    // flexDirection: 'row',
    margin: 0

  },

  TextInputStyleClass: {

    // Setting up Hint Align center.
    textAlign: 'center',

    // Setting up TextInput height as 50 pixel.
    height: 50,
    width: 50,

    // Set border width.
    borderWidth: 5,

    // Set border Hex Color Code Here.
    borderColor: '#000000',

    // Set border Radius.
    borderRadius: 20,

    //Set background color of Text Input.
    backgroundColor: "#FFFF00",
    fontSize: 23, fontWeight: "bold",
    textAlignVertical: "center"

  },
  item3: {
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 3,
        height: Dimensions.get('window').width / 4, // approximate a square
        paddingTop: 0,
        borderRadius: 30
  }
});