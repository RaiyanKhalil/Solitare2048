import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';


export default class BasicTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Head1', 'Head2', 'Head3', 'Head4'],
      DataTable: [
        ['1', '2', '3', '4'],
        ['', '', '7', ''],
        ['', '', '', ''],
        ['', '', '', ''],
        ['', '', '', '']
      ],

      RandomTable:[ "randomNumber2", "randomNumber1", "Discard"]
    }
    
  }
  
  
  render() {
    const state = this.state;
    console.log(this.state.DataTable[1][2])
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
          <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
          <Rows data={state.DataTable} textStyle={styles.TableText}/>
        </Table>
        <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
            <Row data={state.RandomTable} style={styles.HeadStyle} textStyle={styles.TableText}/> 
        </Table>
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