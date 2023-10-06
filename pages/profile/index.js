import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
  // Dapatkan data profil dari route atau sumber lainnya
  const { username, bio, profileImage, posts } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={profileImage} // Gunakan gambar profil yang sesuai
        style={styles.profilePicture}
      />
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.bio}>{bio}</Text>
      {/* Tambahkan informasi lainnya seperti jumlah postingan, pengikut, dan yang diikuti */}
      {/* Tambahkan daftar postingan pengguna menggunakan FlatList */}
      {/* Misalnya: */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={item.image} style={styles.postImage} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 24,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  postImage: {
    width: 100,
    height: 100,
    margin: 2,
  },
  // Gantilah atau tambahkan gaya sesuai kebutuhan Anda
});

export default ProfileScreen;
