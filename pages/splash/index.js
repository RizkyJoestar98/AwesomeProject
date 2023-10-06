import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  } from '../../assets'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login'); // Ganti dengan rute halaman login
    }, 2000); // Durasi splash screen (2 detik)
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/pngwing.png')}
        style={styles.splashImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Latar belakang putih
  },
  splashImage: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
