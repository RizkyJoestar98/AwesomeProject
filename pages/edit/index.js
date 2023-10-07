import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function EditProfileScreen({ navigation }) {
  const [name, setName] = useState(''); // State untuk menyimpan Nama
  const [username, setUsername] = useState(''); // State untuk menyimpan Username
  const [bio, setBio] = useState(''); // State untuk menyimpan Bio
  const [pronouns, setPronouns] = useState(''); // State untuk menyimpan Pronouns

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Profil</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Pronouns"
        value={pronouns}
        onChangeText={(text) => setPronouns(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={(text) => setBio(text)}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert('Data berhasil diEdit')
          navigation.navigate('Profile');
        }}
      >
        <Text style={styles.buttonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
