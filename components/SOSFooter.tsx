import React from "react";
import {StyleSheet, TouchableOpacity} from 'react-native';
import { View,Text } from "./Themed";


export default function SOSFooter() {
    return (
    <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.SOSbtn}>
      <Text style={styles.textStyle}>SOS</Text>
    </TouchableOpacity>
    </View>
    );
  }

  function onPress(){
    //code to call emergency contact or emergency contact for that location e.g. 999
  }

  const styles = StyleSheet.create({
    container:{
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        width:'100%',
        height:150,
        //backgroundColor:'red',
        borderRadius:100,
        padding:20
        //bottom:20
    },
    SOSbtn:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:100,
        alignItems:'center',
        justifyContent:'center'
    },
    textStyle:{
      fontWeight:"bold",
      fontSize:30,
      color:'#fff'
    }
  });