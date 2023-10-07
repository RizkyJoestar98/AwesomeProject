import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/profile.jpg')} // Ganti dengan path gambar profil Anda
          style={styles.profileImage}
        />
        <View style={styles.userInfo}>
          <Text style={styles.username}>Rizky</Text>
          <Text style={styles.bio}>MI 05431</Text>
        </View>
      </View>

      {/* Statistik pengikut dan diikuti */}
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>100</Text>
          <Text style={styles.statLabel}>Posting</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>1M</Text>
          <Text style={styles.statLabel}>Pengikut</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>100</Text>
          <Text style={styles.statLabel}>Mengikuti</Text>
        </View>
      </View>

      {/* Tombol-tombol */}
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Edit');
          }}
        >
          <Text style={styles.buttonText}>Edit Profil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('Pesan');
          }}
        >
          <Text style={styles.buttonText}>Pesan</Text>
        </TouchableOpacity>



        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            // Tambahkan logika untuk tombol Bagikan Profil di sini
          }}
        >
          <Text style={styles.buttonText}>Bagikan Profil</Text>
        </TouchableOpacity>
      </View>

      {/* Daftar posting */}
      {/* Di sini Anda dapat menggunakan FlatList atau komponen lain untuk menampilkan daftar posting */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Ganti dengan warna latar belakang yang Anda inginkan
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  bio: {
    fontSize: 16,
    color: 'gray',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 16,
    color: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#007BFF', // Warna tombol
    borderRadius: 4,
    paddingVertical: 8,
    marginHorizontal: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Gaya untuk daftar posting jika diperlukan
});

export default ProfileScreen;
