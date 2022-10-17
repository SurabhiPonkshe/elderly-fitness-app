import React from "react";
import {StyleSheet} from 'react-native';
import { View,Text } from "../components/Themed";
import GenericHeader from "../components/GenericHeader";
import GoToButton from "../components/GoToButton";
import { useNavigation } from '@react-navigation/native';
import Navigation from "../navigation";
import SOSFooter from "../components/SOSFooter";

export default function HomeScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.containerStyle}>
            <GenericHeader title = 'Welcome,Surabhi!'></GenericHeader>
            <GoToButton btnColour='tomato' title='Dashboard' onPress={()=>{navigation.navigate('Dashboard');}}></GoToButton>
            <GoToButton btnColour='orange' title='Reminders' onPress={()=>{navigation.navigate('Reminders');}}></GoToButton>
            <GoToButton btnColour='yellow' title='Friends' onPress={()=>{navigation.navigate('Friends');}}></GoToButton>
            <GoToButton btnColour='lightgreen' title='Safe Walk' onPress={()=>{navigation.navigate('SafeWalk');}}></GoToButton>
            <GoToButton btnColour='skyblue' title='Get Inspired' onPress={()=>{navigation.navigate('GetInspired');}}></GoToButton>
            <GoToButton btnColour='violet' title='Emergency Contacts' onPress={()=>{navigation.navigate('EmergencyContacts');}}></GoToButton>
            <SOSFooter></SOSFooter>
        </View>
    );
  }

  const styles = StyleSheet.create({
    containerStyle:{
        paddingHorizontal:30,
        paddingVertical:10
    }
  });

  