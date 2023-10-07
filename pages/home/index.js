import React from 'react';
import { Ionicons } from 'react-native-vector-icons';
import {
  PrimaryButton
} from '../../components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';

// Buat komponen layar untuk setiap tab
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <PrimaryButton 
            title="logout"
            onPress={() => navigation.push('Login')}
            />
    </View> 
  );
}

export default HomeScreen;