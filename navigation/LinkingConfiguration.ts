/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linking = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Home: 'Home',        
      Dashboard: 'Dashboard',
      Reminders: 'Reminders',
      Friends: 'Friends',
      SafeWalk: 'SafeWalk',
      EmergencyContacts: 'EmergencyContacts',
      GetInspired: 'GetInspired',
      NotFound: '*',
    },
  },
};

export default linking;
