import React from "react";
import {StyleSheet} from 'react-native';
import { View,Text } from "./Themed";


export default function GenericHeader({title}:{title:string}) {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
        //flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        width:'100%',
        height:45,
        //backgroundColor:'lightblue'
    },
    textStyle:{
     // fontWeight:"bold",
      fontSize:30
    }
  });