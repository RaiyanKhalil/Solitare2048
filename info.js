import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";

class info extends Component {
  static navigationOptions = ({navigation}) => ({
    // headerTitleStyle: { 
    //   textAlign:"center", 
    //   flex:1,
    //   },
      headerStyle: {
        backgroundColor: '#FFFFFF',
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
            <Text style = {{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline'}}>About Us</Text>
              <Text style={styles.modalText}>TechDojo</Text>

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
              <Text style = {{fontSize: 20, fontWeight: 'bold', textDecorationLine: 'underline'}}>About Game</Text>
              <Text style={styles.modalText}>A simple Bangla number game. A brain training game to enhance your Math skills. Start adding similar numbers and become a math Genius.</Text>

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
        <View>
        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible2(true);
          }}
        >
          <Text style={styles.textStyle}>About Game</Text>
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
    backgroundColor: "#FFB6C1",
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
  }
});

export default info;
