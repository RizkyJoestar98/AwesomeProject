import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';

function Pesan({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchInput}
          placeholder="Cari pesan..."
          placeholderTextColor="grey"
        />
      </View>
      <ScrollView style={styles.scrollView}>
       

        {/* Tambahkan elemen teks dan gambar lainnya di bawah ini */}
        <View style={styles.content}>
          <Image
            source={require('../../assets/ido.jpeg')}
            style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 12, marginRight: 10 }}
          />
          <View>
            <Text style={styles.imageText}>ido raden</Text>
            <View style={styles.transparentTextContainer}>
              <Text style={styles.transparentText}>Active 25 m ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={require('../../assets/guna.jpeg')}
            style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 12, marginRight: 10 }}
          />
          <View>
            <Text style={styles.imageText}>styadi</Text>
            <View style={styles.transparentTextContainer}>
              <Text style={styles.transparentText}>Active 1 m ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <Image
            source={require('../../assets/rapid.jpeg')}
            style={{ width: 80, height: 80, borderRadius: 100, marginLeft: 12, marginRight: 10 }}
          />
          <View>
            <Text style={styles.imageText}>rapid</Text>
            <View style={styles.transparentTextContainer}>
              <Text style={styles.transparentText}>online</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
  },
  searchInput: {
    backgroundColor: 'rgb(220, 220, 220)',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20,
  },
  image: {
    marginLeft: 20,
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  imageText: {
    fontSize: 16,
    marginLeft: 5, // Menambahkan margin kiri
  },
  transparentTextContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
  },
  transparentText: {
    color: 'grey',
    fontSize: 12,
  },
});
export default Pesan;
