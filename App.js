import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';

import { Ionicons } from 'react-native-vector-icons';

import {
  SplashScreen,
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  SearchScreen,
  ProfileScreen,
  VideoScreen,
  StoreScreen,
  EditProfileScreen,
  Pesan,
} from './pages'; // Pastikan path ke komponen-komponen ini benar

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainScreen() {
  return (
   
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          tabStyle: {
            justifyContent: 'center',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Video" component={VideoScreen} options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-circle-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Store" component={StoreScreen} options={{
          tabBarLabel: 'Store',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart-outline" color={color} size={size} />
          ),
        }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }} />

        
      </Tab.Navigator>
  
  );
}

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Main" component={MainScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Edit" component={EditProfileScreen} />
    <Stack.Screen name="Pesan" component={Pesan} />
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
  </NavigationContainer>
   
  );
}

export default App;
