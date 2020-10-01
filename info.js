import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image,
  Linking 
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

class info extends Component {
  static navigationOptions = ({navigation}) => ({
    headerLeft: null,
      headerStyle: {
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 0,
        elevation:0,
      },

    })
  state = {
    modalVisible: false, modalVisible2: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setModalVisible2 = (visible2) => {
    this.setState({ modalVisible2: visible2 });
  }

  render() {
    const { modalVisible, modalVisible2 } = this.state;
    return (
      <View style={styles.centeredView}>
        {/* Modal for About Us */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <Text style = {{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', color:'black'}}>About Us</Text>
            <View style = {{paddingTop: 60}}>
              <Image
              source={require('./Assets/reikriyalogo.png')}
              style={{ width: 100, height: 100 }}
              />
              </View>
            
              {/* <Text style={styles.modalText}>TechDojo</Text> */}
              <View style = {{paddingTop: 20}}>
            <TouchableHighlight
                style={styles.openButton3}
                onPress={() => {
                  Linking.openURL('https://play.google.com/store/apps/dev?id=8774935651829597111&hl=en')
                }}
              >
                <Text style={styles.textStyle}>More Games</Text>
              </TouchableHighlight>
              </View>
              <View style = {{flex: 1, paddingTop: 20}}>
            <TouchableHighlight
                style={styles.openButton2}
                onPress={() => {
                  Linking.openURL('https://www.facebook.com/Reikriya-726064067787183/')
                }}
              >
                <Text style={styles.textStyle}>Facebook</Text>
              </TouchableHighlight>
              </View>
              {/* <View style = {{paddingBottom: 10}}> */}

              
              <Text style = {{fontWeight: "bold", fontSize: 20, paddingBottom: 20, color:'black'}} onPress = {() => Linking.openURL('http://www.reikriya.com/')}>Reikriya ©2020</Text>
              
              {/* </View> */}
              <View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#000000" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle2}>Close</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        
        {/* Modal for About Game */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          //style = {{borderWidth: 10}}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style = {{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline', color:'black'}}>About Game</Text>
              <View>
              <Text style={styles.modalText}>A simple Bangla number game. A brain training game to enhance your Math skills. Start adding similar numbers and become a math Genius.</Text>
              </View>
              <Text style = {{fontWeight: "bold", fontSize: 20, paddingBottom: 20, color:'black'}} onPress = {() => Linking.openURL('http://www.reikriya.com/')}>Reikriya ©2020</Text>
              <View>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#000000" }}
                onPress={() => {
                  this.setModalVisible2(!modalVisible2);
                }}
              >
                
                <Text style={styles.textStyle2}>Close</Text>
              </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>

        {/* Button for About Us */}
        <View style = {{ paddingBottom: 50}}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.textStyle}>About Us</Text>
        </TouchableHighlight>
        </View>

        {/* Button for About Game */}
        <View style = {{ paddingBottom: 50}}>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible2(true);
          }}
        >
          <Text style={styles.textStyle}>About Game</Text>
        </TouchableHighlight>
        </View>
        <View>
        <TouchableHighlight
          style={{...styles.openButton, backgroundColor: '#707070'}}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        >
          <Text style={styles.textStyle}>Go Back</Text>
        </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#FFFF99",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 5
  },
  openButton: {
    backgroundColor: "#000000",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 200
  },
  openButton2: {
    backgroundColor: "#4267B2",
    //borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    
  },
  openButton3: {
    backgroundColor: "#000000",
    //borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20

  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    textAlignVertical: 'center',


  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    height: 250,
    width: 250,
    textAlignVertical: 'center',
    fontSize: 20, 
    color:'black'
  }
});

export default info;
