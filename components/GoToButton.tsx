import * as React from 'react';
import {StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { Text, View } from './Themed';
import { useNavigation } from '@react-navigation/native';

export default function GoToButton({btnColour,title,onPress}:{btnColour:string,title:string,onPress:any}) {
  return (
    <TouchableOpacity onPress={onPress} style={getButtonStyle(btnColour).getStyle}>
      <Text style={styles.goToButtonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function getButtonStyle(btnColour:string){
  return StyleSheet.create({
    getStyle:{
      backgroundColor:btnColour,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginVertical:10,
      marginHorizontal:5,
      height:70,
      justifyContent:'center'
    }
  })
}

const styles = StyleSheet.create({
  // ...
  goToButtonText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "bold",
    alignSelf: "center",
    //textTransform: "uppercase"
  }
});